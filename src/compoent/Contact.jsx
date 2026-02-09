import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Contact = () => {
  const contactOptions = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      info: "Dehradun",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      info: "9758306566",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "sainidronika.@gmailcom",
    },
    {
      icon: <FaFileAlt />,
      title: "Resume",
      info: (
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-yellow-400"
        >
          Download
        </a>
      ),
    },
  ];

  return (
    <section  id="contact" className="p-12 md:p-24 bg-[#0f0f0f] text-center">
      {/* Heading with mirror background */}
      <div className="relative w-full flex justify-center items-center mb-12 abc">
        <h3 className="absolute font-extrabold text-8xl md:text-9xl text-gray-800 opacity-20 pointer-events-none select-none text-center whitespace-nowrap ">
          CONTACT ME
        </h3>
        <h3 className="relative text-3xl md:text-4xl font-bold text-white text-center z-10">
          Contact Me
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-400  h-15 pt-8  max-w-2xl mx-auto abc">
        I'm open to work and collaborations. Reach out via any of the options below!
      </p>

      {/* Contact Options */}
      <div className="grid md:grid-cols-4 gap-16 max-w-5xl mx-auto mt-12">
        {contactOptions.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-gray-400 py-8 px-4 rounded-lg bg-gray-850 space-y-6"
          >
            <div className="text-5xl text-yellow-400">{item.icon}</div>
            <p className="font-semibold text-white text-xl abc">{item.title}</p>
            <p className="text-lg" abc>{item.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
