import React from 'react';
import Button from '@/components/buttons/Button';
import Project from '@/components/layouts/Project';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Homepage() {
  const router = useRouter();

  const scrollToContent = () => {
    const element = document.querySelector(".about__container");
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (element && navbarHeight) {
      const scrollToY = element.offsetTop - navbarHeight - 20;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    } 
  };

  const handleClick = (e, path) => {
    e.preventDefault();
    router.push(path);
  }

  return (
    <div>
      {/* Header */}
      <div className="header">
        <Image
          className="header__text"
          src="/images/header-text.svg"
          width={1095}
          height={271}
          alt=""
        />
        <Button label="Explore" type="header" handleClick={scrollToContent} />
      </div>
      {/* About me  */}
      <div id="about" className="about__container">
        <div className="about">
          <div className="about__text">
            <h2>
              I enjoy <span id="h2__highlight">developing</span> and <br />
              <span id="h2__highlight">designing</span> things
            </h2>
            <p>
              Hey there, I'm Caitlin, a final year student at the University of Technology Sydney.
              I study a Bachelor of Information Technology with a focus on Software Development.              
              My passion lies in creating visually stunning and engaging user experiences
              through front end development and UX/UI design.
              I'm currently working at Macquarie Bank as a full-stack developer.<br></br>
            </p>
            <p>
              When I'm not at my computer, you can find me walking my two dogs, reading a book or 
              struggling to commit to a TV Series. I also love to travel and have been lucky enough to 
              study in Berlin, Germany. 
            </p>
          </div>
          <Image
            className="about__image"
            src="/images/woman-on-computer.svg"
            width={450}
            height={420}
            alt=""
          />
        </div>
      </div>
      {/* Projects */}
      <div id="projects" className="my__work">
        <div className="my__work__content">
          <Image
            className="my__work__text"
            src="/images/project-text.svg"
            width={506}
            height={180}
            alt=""
          />
          <Project />
        </div>
      </div>
    </div>
  );
}