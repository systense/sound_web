export const getEmbedUrl = (
  link: string
): { type: "youtube" | "vimeo" | "other"; embedUrl: string } => {
  const youtubeMatch = link.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  const vimeoMatch = link.match(/vimeo\.com\/(\d+)/);

  if (youtubeMatch) {
    const videoId = youtubeMatch[1];
    return {
      type: "youtube",
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
    };
  }

  if (vimeoMatch) {
    const videoId = vimeoMatch[1];
    return {
      type: "vimeo",
      embedUrl: `https://player.vimeo.com/video/${videoId}`,
    };
  }

  return { type: "other", embedUrl: link };
};
