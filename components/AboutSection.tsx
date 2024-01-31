import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Java", path: "/icons/java.png", type: "language" },
  {
    skill: "SpringBoot",
    path: "/icons/springboot.png",
    type: "backend",
  },
  { skill: "Python", path: "/icons/python.png", type: "language" },
  { skill: "Golang", path: "/icons/golang.png", type: "language" },
  { skill: "Git/Github", path: "/icons/github.png", type: "operations" },
  { skill: "JavaScript", path: "/icons/javascript.png", type: "language" },
  { skill: "TypeScript", path: "/icons/typescript.png", type: "language" },
  { skill: "Bootstrap", path: "/icons/bootstrap.png", type: "frontend" },
  { skill: "Tailwind CSS", path: "/icons/tailwind.png", type: "frontend" },
  { skill: "Ant-Design", path: "/icons/antdesign.png", type: "frontend" },
  { skill: "Material-UI", path: "/icons/materialui.png", type: "frontend" },
  { skill: "React", path: "/icons/reactjs.png", type: "frontend" },
  { skill: "Next.js", path: "/icons/nextjs.png", type: "frontend" },
  { skill: "PHP", path: "/icons/php.png", type: "backend" },
  { skill: "Node.js", path: "/icons/nodejs.png", type: "backend" },
  { skill: "MongoDB", path: "/icons/mongodb.png", type: "backend" },
  { skill: "MySQL", path: "/icons/mysql.png", type: "backend" },
  { skill: "Linux", path: "/icons/linux.png", type: "operations" },
  // { skill: "Jenkins", path: "/icons/jenkins.png", type: "operations" },
  { skill: "Ansible", path: "/icons/ansible.png", type: "operations" },
  { skill: "CircleCI", path: "/icons/circleci.png", type: "operations" },
  { skill: "Docker", path: "/icons/docker.png", type: "operations" },
  // { skill: "Kubernetes", path: "/icons/kubernetes.png", type: "operations" },
  { skill: "Terraform", path: "/icons/terraform.png", type: "operations" },
  { skill: "AWS Cloud", path: "/icons/aws.png", type: "operations" },
];

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
              Hi, my name is Bhanu and I am{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              and aspiring SRE(site reliability engineer) based in Kolkata, WB.
            </p>
            <br />
            <p>
              I graduated from Vidyasagar University, Kolkata in 2021 with a BS
              in Computer Application and have been worked at Cognizant.
              Currently I am persuing MS in Computer Application at Chandigarh
              University.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to writing blogs, I am
              always seeking new experiences and love to keep myself engaged and
              learning new things.
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

            <h3 className="font-bold">Languages</h3>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <>
                    {item.type === "language" && (
                      <p
                        key={idx}
                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                      >
                        {item.skill}
                        &nbsp;
                        <img
                          src={item.path}
                          alt="skill_icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            display: "inline",
                          }}
                        />
                      </p>
                    )}
                  </>
                );
              })}
            </div>

            <h3 className="font-bold">Frontend</h3>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <>
                    {item.type === "frontend" && (
                      <p
                        key={idx}
                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                      >
                        {item.skill}
                        &nbsp;
                        <img
                          src={item.path}
                          alt="skill_icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            display: "inline",
                          }}
                        />
                      </p>
                    )}
                  </>
                );
              })}
            </div>

            <h3 className="font-bold">Backend</h3>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <>
                    {item.type === "backend" && (
                      <p
                        key={idx}
                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                      >
                        {item.skill}
                        &nbsp;
                        <img
                          src={item.path}
                          alt="skill_icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            display: "inline",
                          }}
                        />
                      </p>
                    )}
                  </>
                );
              })}
            </div>

            <h3 className="font-bold">DevOps</h3>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <>
                    {item.type === "operations" && (
                      <p
                        key={idx}
                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                      >
                        {item.skill}
                        &nbsp;
                        <img
                          src={item.path}
                          alt="skill_icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            display: "inline",
                          }}
                        />
                      </p>
                    )}
                  </>
                );
              })}
            </div>
            {/* <Image
              src="/developer.jpg"
              alt="developer_image"
              width={350}
              height={350}
              className="hidden md:block md:relative md:bottom-0 my-3 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
