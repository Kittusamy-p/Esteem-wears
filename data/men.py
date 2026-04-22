import json

FILE_PATH = "men.json"

# Load existing data
try:
    with open(FILE_PATH, "r", encoding="utf-8") as file:
        data = json.load(file)
        if not isinstance(data, list):
            data = []
except (FileNotFoundError, json.JSONDecodeError):
    data = []

print("\n🛒 Add New Product\n")

# Basic details
slug = input("Enter slug: ")
name = input("Enter product name: ")

# Images
images = []
img_count = int(input("How many images? "))
for i in range(img_count):
    img = input(f"Image {i+1} path: ")
    images.append(img)

# Sizes
sizes = []
size_count = int(input("\nHow many sizes? "))
for i in range(size_count):
    size = input(f"Size {i+1} (e.g. 20): ")
    price = int(input(f"Price for size {size}: "))
    sizes.append({"size": size, "price": price})

# Links
links = []
platforms = ["amazon", "flipkart", "meesho"]

print("\nEnter platform details:")
for platform in platforms:
    url = input(f"URL for {platform}: ")
    rating = float(input(f"Rating for {platform}: "))
    links.append({
        "platform": platform,
        "url": url,
        "rating": rating
    })

# Final product object
product = {
    "slug": slug,
    "name": name,
    "images": images,
    "sizes": sizes,
    "links": links
}

# Add to list
data.append(product)

# Save file
with open(FILE_PATH, "w", encoding="utf-8") as file:
    json.dump(data, file, indent=4, ensure_ascii=False)

print("\n✅ Product added successfully!")