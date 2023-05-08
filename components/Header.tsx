import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>Fullstack Developer</button>
                    <h2 className="white">I&#39;m a freelance web developer from Indonesia,</h2>
                    <h2 className="white">Currently studying computer science at IPB University</h2>
                    <p className="gray">
                    I can do both Front-End and Back-End development. <br></br>
                    I have experience in building websites with Node js, Express, <br></br> 
                    React, Next js, My SQL, and deploy it using AWS or Google Cloud. </p>
                    <a className="green" href="mailto:ridhokartoni@gmail.com">Email Me!</a>
                </div>
                <Image src="/images/ridho.png" width={510} height={513} alt="Ridho Kartoni"  /> 
            </div>
        </header>
    )
}