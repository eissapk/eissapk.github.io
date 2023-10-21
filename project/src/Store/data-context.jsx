import React from "react";
import gallery from "../services/endpoint.js";

export const data = {
  name: "Hi, I'm Eissa",
  job: "MERN Stack Developer",
  desc: "Design and build applications based on wireframes and product requirements",
  btns: {
    contact: {
      text: "Contact Me",
      mail: "eissapk44@gmail.com",
    },
    resume: {
      text: "Resume",
      fileName: "Eissa_Saber_Web_Developer_Resume",
    },
    scroll: "Scroll down",
  },
  gallery,
};

export const DataContext = React.createContext(data);
