import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"

const exprience = [
    {
        job_role: "Node.js Developer",
        company:
            "Bluehorse Software Solns Pvt Ltd",
        image: "/bluehorse.png",
        desc: 'Responsible for creating and managing APIs, creating frontends and collaborating with developers',
        duration: 'Oct 2023 - Dec 2023',
    },
    {
        job_role: "Service Desk Analyst Trainee",
        company:
            "HCL Technologies",
        image: "/HCLTech.png",
        desc: 'Customer services, communicationg with people to resolve tickets and troubleshooting.',
        duration: 'Dec 2022 - Feb 2023',
    },
    {
        job_role: "Programmer Analyst Trainee",
        company:
            "Cognizant Technology Solutions India Ltd.",
        image: "/cognizant.png",
        desc: 'Worked with Java, XML and MySql database etc. Managing and collaboring in development with PEGA CRPC.',
        duration: 'Feb 2022 - May 2022',
    },
]

const ExpSection = () => {
    return (
        <section id="experience">
            <h1 className="my-10 text-center font-bold text-4xl">
                Experience
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {exprience.map((experience, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                            
                                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                <div className="mt-8 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">{experience.job_role}</h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-800 dark:text-neutral-400">
                                            {experience.desc}
                                            <br />
                                            <span className="text-l">Duration: {experience.duration}</span>
                                        </p>

                                    </div>
                                    <div className=" md:w-1/2">
                                        <Link href='#'>
                                            <Image
                                                src={experience.image}
                                                alt=""
                                                width={800}
                                                height={800}
                                                className="rounded-xl"
                                            />
                                        </Link>
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

export default ExpSection
