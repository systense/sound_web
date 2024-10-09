import { client } from "@/sanity/lib/client";
import { SanityDocument } from "sanity";
import { PortableTextBlock } from "@portabletext/types";

type LinkItem = {
  link: string;
  width?: number;
  height?: number;
};

interface Project extends SanityDocument {
  title: string;
  text: PortableTextBlock[];
  links: LinkItem[];
}

export default async function Projects() {
  const projects: Project[] = await client.fetch(`
    *[_type == "project"] | order(date desc) {
      _id,
      title,
      date,
      text,
      links
    }
  `);

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id} className="flex">
          <div>
            {project.links &&
              project.links.map((linkItem, idx) => (
                <div key={idx}>
                  <iframe
                    src={linkItem.link}
                    width={linkItem.width || "560"}
                    height={linkItem.height || "315"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`Video-${idx}`}
                  ></iframe>
                </div>
              ))}
          </div>
          <div>
            <h2>{project.title}</h2>
            {project.text && (
              <div>
                {/* You would need a portable text renderer to handle rich text */}
                {project.text.map((block, idx) => (
                  <p key={idx}>{block.children?.[0]?.text}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      {projects.map((project) => (
        <div key={project._id} className="flex">
          <div>
            {project.links &&
              project.links.map((linkItem, idx) => (
                <div key={idx}>
                  <iframe
                    src={linkItem.link}
                    width={linkItem.width || "560"}
                    height={linkItem.height || "315"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`Video-${idx}`}
                  ></iframe>
                </div>
              ))}
          </div>
          <div>
            <h2>{project.title}</h2>
            {project.text && (
              <div>
                {/* You would need a portable text renderer to handle rich text */}
                {project.text.map((block, idx) => (
                  <p key={idx}>{block.children?.[0]?.text}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
