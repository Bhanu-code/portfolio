"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SiHashnode, SiLeetcode } from "react-icons/si";
// import { url } from "inspector";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-5 py-3 sm:py-3 md:py-20 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-10 md:w-1/2">
          <Image
            src="/profile.jpeg"
            alt=""
            width={350}
            height={350}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Bhanu!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              MERN/LAMP Stack Developer{" "}
            </span>
            based in Kolkata, WB. Working towards creating software that makes
            life easier and more meaningful.
          </p>

          <div className="flex flex-row items-center gap-5 justify-center mb-5 space-x-3 sm:w-100 md:w-1/2">
            <a
              href="https://github.com/Bhanu-code"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineGithub
                style={{ color: "black" }}
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
            <a
              href="https://twitter.com/ChowhanBhanu"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineTwitter
                style={{ color: "#1DA1F2" }}
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/bhanu-chowhan-130816266/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                style={{ color: "#0077b5" }}
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
            <a
              href="https://metimetraveler.hashnode.dev"
              rel="noreferrer"
              target="_blank"
            >
              <SiHashnode
                style={{ color: "#0000FF" }}
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={25}
              />
            </a>
            <a>
              <SiLeetcode
              style={{ color: "#000000" }}
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={25}
              />
            </a>
          </div>

          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 mt-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
          <a
            href="/Bhanu_Chowhan_Resume.pdf"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mx-4 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
