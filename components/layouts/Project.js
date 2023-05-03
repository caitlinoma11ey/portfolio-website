import Image from "next/image";
import Button from "../buttons/Button";
import Link from "next/link";

const Project = () => {

    const portfolioDesc = "My portfolio website is a personal project of mine I picked up to learn more \
    about front end development and challenge my UI design skills.";

    const marketingDesc = "Creating social media posts that are visually appealing and adhere to branding \
    guidelines to inform members about upcoming events.";

    const dashboardDesc = "The Network Dashboard is a web-based dashboard built for a client during a \
    University subject. It was designed to aid in the analysis and detection of leaks.";

    const projectInformation = [
      {
        key: 0,
        path: "/images/project-portfolio.svg",
        title: "Portfolio Website",
        subtitle: "Coding|Design",
        description: portfolioDesc,
        link: "https://github.com/caitlinoma11ey/portfolio-website",
      },
      {
        key: 1,
        path: "/images/project-marketing.svg",
        title: "TechSoc Marketing",
        subtitle: "Design|Marketing",
        description: marketingDesc,
        link: "/techsoc_marketing",
      },
      {
        key: 2,
        path: "/images/project-dashboard.svg",
        title: "Network Dashboard",
        subtitle: "Coding|Design",
        description: dashboardDesc,
        link: "/network_dashboard",
      },
    ];

    function isEven(key){
        if(key % 2 == 0){
            return true;
        }
        return false;
    }

    return (
        <div>
            {projectInformation.map((link) => (
                <div key={link.key}>
                    <div className="project__container">
                        <div className={isEven(link.key) ? "project__right" : "project__left"}>
                            <Image className="project__image" src={link.path} width={598} height={378}/>
                            <div className={isEven(link.key) ? "project__right__text" : "project__left__text"}>
                                <div className="project__text">
                                    <h3>{link.title}</h3>
                                    <h5>{link.subtitle}</h5>
                                    <p>{link.description}</p>
                                    <Link href={link.link}>
                                        <Button label="View More" type="primary" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
          </div>
    );
  };
  export default Project;