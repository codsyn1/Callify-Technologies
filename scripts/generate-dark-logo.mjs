import sharp from "sharp";

const BG = { r: 26, g: 26, b: 26 };

function isNearWhite(r, g, b) {
  return r > 235 && g > 235 && b > 235;
}

function isBrandBlue(r, g, b) {
  return b >= 90 && b > r + 15 && b > g + 5 && r < 140;
}

function recolorForDarkBg(data) {
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    if (isNearWhite(r, g, b)) {
      data[i] = BG.r;
      data[i + 1] = BG.g;
      data[i + 2] = BG.b;
      data[i + 3] = 255;
      continue;
    }

    if (isBrandBlue(r, g, b)) {
      data[i + 3] = 255;
      continue;
    }

    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    if (lum < 200) {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
    }
    data[i + 3] = 255;
  }
}

async function loadTrimmedRgb() {
  const trimmed = await sharp("public/callify-logo-rgb.png")
    .trim({ threshold: 10 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  return trimmed;
}

async function recolorBuffer({ data, info }) {
  recolorForDarkBg(data);

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png();
}

const trimmed = await loadTrimmedRgb();
const darkLogo = await recolorBuffer(trimmed);
await darkLogo.toFile("public/callify-logo-dark.png");

const iconCropW = Math.round(trimmed.info.width * 0.28);
const iconRaw = await sharp(await darkLogo.toBuffer())
  .extract({
    left: 0,
    top: 0,
    width: iconCropW,
    height: trimmed.info.height,
  })
  .png()
  .toBuffer();

const icon512 = await sharp(iconRaw)
  .extend({
    top: 40,
    bottom: 40,
    left: 40,
    right: 40,
    background: BG,
  })
  .resize(512, 512, { fit: "contain", background: BG })
  .png()
  .toBuffer();

await sharp(icon512).png().toFile("public/callify-icon-dark.png");
await sharp(icon512).resize(32, 32).png().toFile("src/app/icon.png");
await sharp(icon512).resize(180, 180).png().toFile("src/app/apple-icon.png");
await sharp(icon512).resize(48, 48).png().toFile("public/favicon-48.png");
await sharp(icon512).resize(32, 32).png().toFile("public/favicon.ico");

console.log("Generated callify-logo-dark.png and favicon assets.");
