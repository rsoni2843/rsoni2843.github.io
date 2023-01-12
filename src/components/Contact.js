import React from "react";
import { contact } from "../data";

const Contact = () => {
  return (
    <section className="section bg-tertiary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:lg:block text-accent">
            Contact me
          </h2>
          <p className="subtitle mb-10 text-accent">Contact Me for any help!</p>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col lg:gap-x-8 lg:flex-row"
        >
          <div className="flex flex-1 flex-col items-start space-y-6 mb-12">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description, link } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-accent text-xl mb-1">
                      {title}
                    </h4>
                    <a target={"blank"} href={link}>
                      <p className="mb-1 text-paragraph">{subtitle}</p>
                    </a>
                    <p className="text-accent font-normal ">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <form className="space-y-2 w-full max-w-[780px]">
              <div data-aos="fade-up" className="flex gap-8">
                <input
                  required
                  className="input"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  required
                  className="input"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <input
                required
                className="input"
                type="text"
                placeholder="Subject"
              />
              <textarea
                required
                className="textarea"
                placeholder="Your message"
              ></textarea>
              <button className="btn btn-lg bg-accent hover:bg-secondary-hover">
                Contact Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
