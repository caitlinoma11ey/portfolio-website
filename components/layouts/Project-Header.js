import Image from "next/image";

const ProjectHeader = ({ title, category, path }) => {
  return (
    <div className="project__header">
      <h1 className="project__header__title">{title}</h1>
      <h4>{category}</h4>
      <Image className="project__header__img" src={path} width={1305} height={711} />
    </div>
  );
};

export default ProjectHeader;
