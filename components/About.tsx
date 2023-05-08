import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="UI/UX Design"
                        icon="/icons/design.svg"
                        description="I design beautiful user interfaces for web applications."
                        projects={4} />
                    <AboutCard
                        title="Web Development"
                        icon="/icons/code.svg"
                        description="I develop responsive websites using the latest technologies."
                        projects={7} />
                    <AboutCard
                        title="Cloud Computing"
                        icon="/icons/cloud.svg"
                        description="I can deploy your website to the cloud using AWS or Google Cloud."
                        projects={5} />
                </div>
                
                <div className="flex-full about-text">
                    <h4 className="gray">About Me</h4>
                    <h1 className="white">Hello, My name is Ridho Kartoni Pasaribu</h1>
                    <p className="gray">I have always been passionate about programming and technology, and it has been my lifelong dream to pursue a career 
                    in software development. Through my studies and various internships,
                    I have gained extensive knowledge and experience in both front-end and back-end development.<br/><br/>
                    <p>
                    As a front-end developer, I have a strong background in UI/UX design, allowing me to create visually 
                    appealing and user-friendly websites and applications. On the back-end side, I have experience working with databases and server-side 
                    technologies such as Node.js, Express, and MongoDB. This allows me to create dynamic and interactive web
                    applications that can handle large amounts of data and traffic.
                    </p>
                    <br/>
                    As a Full-Stack Developer, I am committed to creating functional and aesthetically 
                    pleasing software solutions that meet the needs of businesses and their customers..</p>
                </div>
            </div>

        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}