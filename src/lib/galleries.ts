function buildPaths(slug: string, count: number): string[] {
  return Array.from(
    { length: count },
    (_, i) => `/galleries/${slug}/${String(i + 1).padStart(2, "0")}.jpg`
  );
}

export const FRAMES_GALLERY = buildPaths("frames-gallery", 8);
export const WRAPPING_GALLERY = buildPaths("wrapping-gallery", 8);
