import json
import os

FILE_PATH = "men.json"

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
    return slug.replace(" ", "-")

def fix_image(img):
    if not img.startswith("/images/"):
        return "/images/" + img
    return img

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
        url = input("URL (leave empty to skip amazon): ").strip()
        rating = input("Rating: ").strip()

        # ❌ Skip amazon if no URL
        if platform == "amazon" and not url:
            print("Skipping Amazon (no URL)")
            continue

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

def main():
    print("\n=== PRODUCT BUILDER ===\n")

    slug = fix_slug(input("Slug: ").strip())
    name = input("Product Name: ").strip()

    # images
    images = []
    print("\nEnter images (type 'done' to stop):")
    while True:
        img = input("Image: ").strip()
        if img.lower() == "done":
            break
        images.append(fix_image(img))

    # size chart
    size_chart = input("\nSize Chart Image: ").strip()
    size_chart = fix_image(size_chart) if size_chart else ""

    # sizes
    sizes = input_sizes()

    # links
    links = input_links()

    product = {
        "slug": slug,
        "name": name,
        "images": images,
        "sizeChart": size_chart,
        "sizes": sizes,
        "links": links
    }

    data = load_data()
    data.append(product)
    save_data(data)

    print("\n✔ Product added successfully!")

if __name__ == "__main__":
    main()