import React from "react";
import Link from "next/link";

interface EmbedProps {
  link: string;
  width?: number | string;
  height?: number | string;
}

export const Embed: React.FC<EmbedProps> = ({ link, width, height }) => {
  console.log(link);

  if (!link) return null;

  // YouTube patterns
  const youtubeRegex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&\s?/]+)/;
  const youtubeMatch = link.match(youtubeRegex);

  // Vimeo pattern
  const vimeoRegex = /vimeo\.com\/(?:video\/)?(\d+)/;
  const vimeoMatch = link.match(vimeoRegex);

  // Instagram pattern
  const instagramRegex = /instagram\.com\/p\/([^\/]+)/;
  const instagramMatch = link.match(instagramRegex);

  let embedUrl = "";
  let defaultWidth = width;
  let defaultHeight = height;
  let aspectRatio = "56.25%"; // Default aspect ratio (16:9)

  if (youtubeMatch) {
    const videoId = youtubeMatch[1];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
    defaultWidth = width || 560;
    defaultHeight = height || 315;
    aspectRatio = "56.25%"; // 16:9 aspect ratio
  } else if (vimeoMatch) {
    const videoId = vimeoMatch[1];
    embedUrl = `https://player.vimeo.com/video/${videoId}`;
    defaultWidth = width || 640;
    defaultHeight = height || 360;
    aspectRatio = "56.25%"; // 16:9 aspect ratio
  } else if (instagramMatch) {
    const postId = instagramMatch[1];
    embedUrl = `https://www.instagram.com/p/${postId}/embed`;
    defaultWidth = width || 400;
    defaultHeight = height || 535; // 4:5 aspect ratio for portrait posts
    aspectRatio = "125%";
  } else {
    return (
      <p>
        Unsupported media link.{" "}
        <Link href={link} target="_blank" rel="noopener noreferrer">
          View Link
        </Link>
      </p>
    );
  }

  // Calculate aspect ratio if custom width and height are provided
  if (defaultWidth && defaultHeight) {
    const w = Number(defaultWidth);
    const h = Number(defaultHeight);
    if (!isNaN(w) && !isNaN(h) && w > 0) {
      aspectRatio = (h / w) * 100 + "%";
    }
  }

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: aspectRatio,
        height: 0,
        overflow: "hidden",
      }}
    >
      <iframe
        src={embedUrl}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        title="Embedded content"
        loading="lazy"
        sandbox="allow-same-origin allow-scripts allow-popups"
      ></iframe>
    </div>
  );
};
