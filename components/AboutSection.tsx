import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Java", path:'/icons/java.png' },
  { skill: "Spring/SpringBoot", path:'/icons/springboot.png' },
  { skill: "Python", path:'/icons/python.png' },
  { skill: "Git/Github", path:'/icons/github.png' },
  { skill: "JavaScript", path:'/icons/javascript.png' },
  { skill: "TypeScript", path:'/icons/typescript.png' },
  { skill: "Bootstrap", path:'/icons/bootstrap.png' },
  { skill: "Tailwind CSS", path:'/icons/tailwind.png' },
  { skill: "Ant-Design", path:'/icons/antdesign.png' },
  { skill: "Material-UI", path:'/icons/materialui.png' },
  { skill: "React", path:'/icons/reactjs.png' },
  { skill: "Next.js", path:'/icons/nextjs.png' },
  { skill: "MongoDB", path:'/icons/mongodb.png'},
  { skill: "MySQL", path:'/icons/mysql.png'},
  { skill: "Linux", path:'/icons/linux.png' },
  { skill: "Docker", path:'/icons/docker.png' },
  { skill: "AWS Cloud", path:'/icons/aws.png'}
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-10 pb-16 md:pt-8 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Bhanu and I am {" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer and aspiring SRE(site reliability engineer)
              based in Kolkata, WB.
            </p>
            <br />
            <p>
              I graduated from Vidyasagar University, Kolkata in 2021
              with a BS in Computer Application and have been worked at Cognizant. Currently I am persuing MS in
              Computer Application at Chandigarh University.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to writing blogs,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <>
                   <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                    &nbsp;
                  <img src={item.path} alt="skill_icon" style={{ width:'20px', height:'20px', display:'inline' }} />
                  </p>
                  </>
                 
                )
              })}
            </div>
            <Image
              src="/developer.jpg"
              alt="developer_image"
              width={350}
              height={350}
              className="hidden md:block md:relative md:bottom-0 my-3 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
