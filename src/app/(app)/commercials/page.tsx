import { client } from "@/sanity/lib/client";
import { SanityDocument } from "sanity";
import { PortableTextBlock } from "@portabletext/types";
import { Embed } from "@/components/Embed";
import { PortableText } from "@portabletext/react";

type LinkItem = {
  link: string;
  width?: number;
  height?: number;
};

interface Commercial extends SanityDocument {
  title: string;
  text: PortableTextBlock[];
  links: LinkItem[];
}

export const revalidate = 60;

const portableTextComponents = {
  marks: {
    link: ({
      value = { href: "#" },
      children,
    }: {
      value?: { href: string };
      children: React.ReactNode;
    }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

export default async function Commercials() {
  const commercials: Commercial[] = await client.fetch(`
    *[_type == "commercial"] | order(date desc) {
      _id,
      title,
      date,
      text,
      links
    }
  `);

  return (
    <div className="md:max-w-[900px] w-full">
      {commercials.map((commercial) => (
        <div
          key={commercial._id}
          className="space-y-[10px] mb-[60px] md:flex md:flex-row md:space-y-[-3px] md:justify-between"
        >
          <div className="space-y-[10px] mb-[16px] md:w-[70%]">
            {commercial.links &&
              commercial.links.map((linkItem, idx) => (
                <div key={idx}>
                  <Embed
                    link={linkItem.link}
                    width={linkItem.width}
                    height={linkItem.height}
                  />
                </div>
              ))}
          </div>
          <div className="md:w-[26.5%]">
            <div className="md:sticky md:top-[38px]">
              <h2 className="mb-[12px]">{commercial.title}</h2>
              {commercial.text && (
                <div className="space-y-[12px]">
                  <PortableText
                    value={commercial.text}
                    components={portableTextComponents}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
