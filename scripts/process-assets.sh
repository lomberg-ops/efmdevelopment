#!/usr/bin/env bash
# Processes raw client assets in _source/ into web-ready files in public/.
# Idempotent: safe to re-run. Requires ffmpeg on PATH.
set -euo pipefail
cd "$(dirname "$0")/.."

SRC=_source/images
IMG=public/images
MEDIA=public/media
ORIG=public/media/originals
mkdir -p "$IMG" "$IMG/tech" "$MEDIA" "$ORIG" public/brand

echo "==> Photos (resize to web, strip metadata)"
# source_basename  output_name  mode(land|port)
photo() {
  local src="$SRC/$1.JPG" out="$IMG/$2"
  # Landscape: cap width 2400; Portrait: cap height 2400. q=3 ~ high quality.
  ffmpeg -y -loglevel error -i "$src" -map_metadata -1 \
    -vf "scale='if(gt(a,1),min(2400,iw),-2)':'if(gt(a,1),-2,min(2400,ih))'" \
    -q:v 3 "$out"
  echo "    $1.JPG -> $2"
}
photo IMG_1653 forest-path-hero.jpg
photo IMG_1651 forest-path-timber.jpg
photo IMG_1650 timber-rounds.jpg
photo IMG_1638 timber-hands.jpg
photo IMG_1655 forest-ferns.jpg
photo IMG_1628 forest-foliage.jpg
photo IMG_1654 forest-undergrowth.jpg
photo IMG_1642 about-fieldwork.jpg
photo IMG_1649 about-forest-walk.jpg
photo IMG_1631 leadership-portrait.jpg
photo IMG_1652 timber-rounds-2.jpg
photo IMG_1639 timber-hands-2.jpg

echo "==> Videos (H.264 MP4 + VP9 WebM + poster JPG, ~1080p faststart)"
# source_basename  output_slug
video() {
  local src="$SRC/$1.MOV" slug="$2"
  ffmpeg -y -loglevel error -i "$src" \
    -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 24 -preset slow \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease" \
    -movflags +faststart -c:a aac -b:a 128k "$MEDIA/$slug.mp4"
  ffmpeg -y -loglevel error -i "$src" \
    -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 -cpu-used 4 \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease" \
    -c:a libopus -b:a 96k "$MEDIA/$slug.webm"
  ffmpeg -y -loglevel error -ss 2 -i "$src" -frames:v 1 \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease" -q:v 4 "$MEDIA/$slug-poster.jpg"
  cp "$src" "$ORIG/"
  echo "    $1.MOV -> $slug.{mp4,webm,-poster.jpg}  (original kept)"
}
video DSC_8009 forest-loop-1
video DSC_8007 forest-loop-2
video DSC_8008 forest-loop-3

echo "==> Brand emblem (forest tile — used as the About-page brand visual)"
TILE="_source/text/39340195-2B4B-4768-BAFB-E60B20740B5C.png"
cp "$TILE" public/brand/efm-emblem.png

echo "==> Favicon / app icons (official blue EFM wordmark, fit on a white square)"
# Use the real client logo so the browser-tab icon is the blue 'Efm' mark,
# not the photographic emblem (which turns to mush at favicon size).
LOGO="_source/text/Logo_EFM_Sept_2019_new.jpg"
ffmpeg -y -loglevel error -i "$LOGO" \
  -vf "scale=512:512:force_original_aspect_ratio=decrease,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=white" \
  src/app/icon.png
ffmpeg -y -loglevel error -i "$LOGO" \
  -vf "scale=180:180:force_original_aspect_ratio=decrease,pad=180:180:(ow-iw)/2:(oh-ih)/2:color=white" \
  src/app/apple-icon.png

echo "==> Done."
ls -la "$MEDIA"
