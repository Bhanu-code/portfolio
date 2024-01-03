import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Next.Store",
    description:
      "Next.Store is an full stack Ecommerce web app where you can buy products online and make payments online.",
    image: "/nextstore.jpg",
    TechStack: "Next.js, Material-UI, Styled-components, Redux-toolkit, Node.js, Express.js, JWT, MongoDB Atlas",
    github: "https://github.com/Bhanu-code/next_store_client",
    link: "https://nextstoreweb.netlify.app/",
  },
  {
    name: "VideoMotion",
    description:
      "Videomotion is a video streaming web app that build with React & Material UI. You can search videos, get feed, see your hisory, delete them etc.",
    image: "/videomotion.jpg",
    TechStack: "React.js, Material-UI, Redux-toolkit, Node.js, Express.js, JWT, MySql, RapidAPI, Aiven Cloud",
    github: "https://github.com/Bhanu-code/youtube_clone_client",
    link: "https://videomotion.netlify.app/",
  },
  {
    name: "CryptoSys",
    description: "CryptoSys is a cryptocurrency details app with latest cryptos, news & crypto exchange statistics build with React Redux toolikt, Ant design & rapidapi",
    image: "/cryptosys.jpg",
    TechStack: "React.js, Ant Design, RapidAPI, Chart.js",
    github: "https://github.com/Bhanu-code/-react-crypto-app",
    link: "https://cryptosys.netlify.app",
  },
  {
    name: "React Weather App",
    description:
      "Realtime weather details provider app build with Reactjs. This app uses openweather-api to fetch weather details.",
    image: "/weather.jpg",
    TechStack: "React.js, Open Weather API",
    github: "https://github.com/Bhanu-code/weatherapp",
    link: "https://weathermy.netlify.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                      <br />
                      <br />
                      <span className="text-l">Tech Stack: {project?.TechStack}</span>
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
