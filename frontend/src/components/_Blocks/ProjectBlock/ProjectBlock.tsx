import { ProjectBlockT } from "@/types/types";

const ProjectBlock = (props: ProjectBlockT) => {
  const { title } = props;
  return <div>ProjectBlock title: {title} </div>;
};

export default ProjectBlock;
