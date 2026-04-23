import json
import os
import shutil

FILE_PATH = "men.json"
BASE_IMAGE_DIR = "../public/images"  # adjust if needed

def load_data():
    if not os.path.exists(FILE_PATH):
        return []
    with open(FILE_PATH, "r", encoding="utf-8") as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []

def save_data(data):
    with open(FILE_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

def fix_slug(slug):
    return slug.strip().replace(" ", "-")

# ✅ FIXED (now uses slug properly)
def fix_image(img, slug):
    filename = os.path.basename(img)
    return f"/images/{slug}/{filename}"

# ✅ CREATE FOLDER
def create_product_folder(slug):
    folder_path = os.path.join(BASE_IMAGE_DIR, slug)

    os.makedirs(folder_path, exist_ok=True)

    print(f"📁 Folder created: {folder_path}")
    return folder_path

def input_images(slug, folder_path):
    images = []
    print("\nEnter image file paths (type 'done' to stop):")

    while True:
        img = input("Image path (local file): ").strip()
        if img.lower() == "done":
            break

        if not os.path.exists(img):
            print("❌ File not found")
            continue

        filename = os.path.basename(img)
        dest = os.path.join(folder_path, filename)

        shutil.copy(img, dest)  # copy image into product folder

        images.append(fix_image(filename, slug))

    return images

def input_size_chart(slug, folder_path):
    img = input("\nSize Chart Image path: ").strip()

    if not img:
        return ""

    if not os.path.exists(img):
        print("❌ File not found, skipping size chart")
        return ""

    filename = os.path.basename(img)
    dest = os.path.join(folder_path, filename)

    shutil.copy(img, dest)

    return fix_image(filename, slug)

def input_sizes():
    sizes = []
    print("\nEnter sizes (type 'done' to stop):")

    while True:
        size = input("Size: ").strip()
        if size.lower() == "done":
            break

        price = input("Price: ").strip()
        try:
            price = int(price)
        except:
            print("Invalid price, try again.")
            continue

        sizes.append({
            "size": size,
            "price": price
        })

    return sizes

def input_links():
    links = []
    print("\nEnter links (type 'done' to stop):")

    while True:
        platform = input("Platform (amazon/flipkart/meesho): ").strip().lower()
        if platform == "done":
            break

        seller = input("Seller: ").strip()
        url = input("URL: ").strip()
        rating = input("Rating: ").strip()

        try:
            rating = float(rating)
        except:
            rating = 0

        links.append({
            "platform": platform,
            "seller": seller,
            "url": url,
            "rating": rating
        })

    return links

# ✅ NEW: product details (max 5)
def input_details():
    details = []
    print("\nEnter product details (max 5, type 'done' to stop):")

    while len(details) < 5:
        point = input(f"Point {len(details)+1}: ").strip()

        if point.lower() == "done":
            break

        if point:
            details.append(point)

    return details

def main():
    print("\n=== PRODUCT BUILDER (PRO VERSION) ===\n")

    slug = fix_slug(input("Slug: "))
    name = input("Product Name: ").strip()

    # ✅ create folder
    folder_path = create_product_folder(slug)

    # images
    images = input_images(slug, folder_path)

    # size chart
    size_chart = input_size_chart(slug, folder_path)

    # sizes
    sizes = input_sizes()

    # links
    links = input_links()

    # details
    details = input_details()

    product = {
        "slug": slug,
        "name": name,
        "images": images,
        "sizeChart": size_chart,
        "sizes": sizes,
        "links": links,
        "details": details
    }

    data = load_data()
    data.append(product)
    save_data(data)

    print("\n✅ Product added successfully!")
    print(f"📦 Images stored in /images/{slug}/")

if __name__ == "__main__":
    main()