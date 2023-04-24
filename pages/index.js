import React from 'react';
import Button from '@/components/buttons/Button';
import Project from '@/components/layouts/Project';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Homepage() {

    const router = useRouter()

    const scrollToContent = () => {
        const element = document.querySelector(".about__container");
        if(element) {
          element.scrollIntoView({behaviour: "smooth"});
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
                <Image className="header__text" src="/images/header-text.svg" width={1095} height={271} alt=""/>
                <Button label="Explore" type="header" handleClick={scrollToContent} />
            </div>
            {/* About me  */}
            <div class="about__container">
                <div class="about">
                    <div class="about__text">
                        <h2>I enjoy developing and <br/> desigining things</h2>
                        <p>I’m a third year student at the University of Technology Sydney (UTS) studying a Bachelor 
                           of Information Technology. My passion lies in creating visually stunning and engaging 
                           user experiences through front-end development and UX/UI design. I have over a year of 
                           internship experience working with React and front-end products. I'm looking to upskill myself
                           and learn UX/UI.
                        </p>
                        <Button label="Learn more" type="primary" handleClick={(e) => handleClick(e, "/about")} />
                    </div>
                    <Image class="about__image" src="/images/woman-on-computer.svg" width={450} height={420} alt=""/>
                </div>
            </div>
            {/* Projects */}
            <div className="my__work">
                <div className="my__work__content">
                    <Image className="my__work__text" src="/images/project-text.svg" width={506} height={180} alt=""/>
                    <Project />
                </div>
            </div>
        </div>
    )
}