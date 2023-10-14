import { ProjectBlockT } from "@/types/types";
import { Check, Cog, Github, Globe } from "lucide-react";
import Image from "next/image";
import serialize from "../serialize/serialize";
import Link from "next/link";

const ProjectBlock = (props: ProjectBlockT) => {
  const {
    image,
    title,
    shortDescription,
    techs,
    features,
    longDescription,
    websiteLink,
    repoLink,
  } = props;

  return (
    <div className="flex flex-col items-center w-full gap-6 p-8 rounded-lg bg-blackDimmed border-1 border-grey1 lg:p-16 lg:w-10/12">
      {image && (
        <Image
          src={image.url}
          alt={image.alt}
          height={image.height}
          width={image.width}
          className="h-[150px] w-fit md:h-[300px] rounded-lg object-contain border-2 border-cyanDark"
        />
      )}
      <div className="flex flex-col text-center">
        <h3 className="title">{title}</h3>
        <h4 className="leading text-grey3">{shortDescription}</h4>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-2">
        {techs.map((tech) => (
          <div
            key={tech.id}
            className="px-3 py-1 bg-grey1 border-1 border-grey2 content text-whiteDimmed rounded-[32px] flex items-center justify-center lowercase"
          >
            {tech.tech}
          </div>
        ))}
      </div>
      <ul className="flex flex-wrap items-center justify-center w-full gap-4">
        {features.map((feature) => (
          <li
            key={feature.id}
            className="flex items-center justify-center gap-1 content text-grey4"
          >
            <Cog size={20} strokeWidth={1.5} className="text-cyanDark" />
            <span>{feature.feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center justify-center content text-grey3">
        {serialize(longDescription)}
      </div>
      <div className="flex gap-8 content text-whiteDimmed ">
        <div className="flex items-center justify-center gap-2 ">
          <Globe strokeWidth={1.5} size={24} />
          <Link
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            website
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 ">
          <Github strokeWidth={1.5} size={24} />
          <Link
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            see code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
