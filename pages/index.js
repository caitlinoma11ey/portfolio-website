import React from 'react';
import Button from '@/components/buttons/Button';
import Project from '@/components/layouts/Project';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Homepage() {
  const router = useRouter();

  const scrollToContent = () => {
    const element = document.querySelector(".about__container");
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (element && navbarHeight) {
      const scrollToY = element.offsetTop - navbarHeight;
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
      <div className="about__container">
        <div className="about">
          <div className="about__text">
            <h2>
              I enjoy <span id="h2__highlight">developing</span> and <br />
              <span id="h2__highlight">designing</span> things
            </h2>
            <p>
              I’m a third year student at the University of Technology Sydney
              (UTS) studying a Bachelor of Information Technology. My passion
              lies in creating visually stunning and engaging user experiences
              through front-end development and UX/UI design. I have over a
              year of internship experience working with React and front-end
              products. I'm looking to upskill myself and learn UX/UI.
            </p>
            <Button
              label="Learn more"
              type="primary"
              handleClick={(e) => handleClick(e, "/about")}
            />
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