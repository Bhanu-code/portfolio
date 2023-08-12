import React from "react";
import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";

function Contact() {
  return (
    <section id="contact">
      <h1 className="my-10 text-center font-bold text-4xl">
        Contact Me
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col  lg:flex-row  items-center justify-center space-x-20 mb-1">
      
        <div className="mail flex flex-row sm:flex-col items-center justify-center">
          <a href="https://mail.google.com/" rel="noreferrer" target="_blank">
          <AiOutlineMail
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={30}
          />
          </a>
          Mail me at
          <span className="font-semibold text-teal-600">
            &nbsp; bhanuchowhan652@gmail.com{" "}
          </span>
        
        </div>

        <div className="mobile flex flex-row sm:flex-col items-center justify-center">
          <a href="" rel="noreferrer" target="_blank">
          <AiOutlineMobile
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={30}
          />
          </a>
          Call me
          <span className="font-semibold text-teal-600">
            &nbsp; +91 7319345359{" "}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
