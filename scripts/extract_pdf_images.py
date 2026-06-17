"""Extract embedded raster images from the technology deck PDF.

These are real client assets (the 3D LiDAR forest scan, the LiDAR ecosystem
assessment dashboard, and the measurement-technology thumbnails). Outputs to
public/images/tech/ with page-tagged names so they can be mapped by eye.
"""
import os
import fitz  # PyMuPDF

PDF = "_source/text/Added_value_throu_digital_Forest_sensors_2026_.pdf"
OUT = "public/images/tech"
os.makedirs(OUT, exist_ok=True)

doc = fitz.open(PDF)
manifest = []
for pno in range(len(doc)):
    page = doc[pno]
    for idx, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        info = doc.extract_image(xref)
        ext = info["ext"]
        w, h = info["width"], info["height"]
        if w < 200 or h < 120:  # skip tiny logos/icons
            continue
        name = f"p{pno+1}-img{idx}-{w}x{h}.{ext}"
        with open(os.path.join(OUT, name), "wb") as f:
            f.write(info["image"])
        manifest.append((pno + 1, name, w, h, len(info["image"])))

print(f"Extracted {len(manifest)} images:")
for pno, name, w, h, size in manifest:
    print(f"  page {pno}: {name}  ({size//1024} KB)")
