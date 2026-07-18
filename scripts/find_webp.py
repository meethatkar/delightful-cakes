import os

webp_files = []
for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".webp") or file.endswith(".avif"):
            webp_files.append(os.path.join(root, file))

with open("scripts/webp_files.txt", "w") as f:
    for path in sorted(webp_files):
        f.write(path + "\n")
