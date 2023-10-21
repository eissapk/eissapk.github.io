import riangle from "../assets/projects/riangle.webp";
import birds from "../assets/projects/angry-birds.webp";
import assistant from "../assets/projects/assistant.webp";
import clean from "../assets/projects/clean.webp";
import cv from "../assets/projects/cv.webp";
import ecommerce from "../assets/projects/ecommerce.webp";
import mynote from "../assets/projects/my-note.webp";
import olum from "../assets/projects/olum.webp";
import slider from "../assets/projects/slider.webp";
import whiteBoard from "../assets/projects/white-board.webp";
import writer from "../assets/projects/writer.webp";

export default [
  // continue the rest of the routes
  {
    order: 1,
    thumbnail: riangle,
    title: "Riangle",
    date: "12-10-2023",
    links: {
      demo: "https://riangle.onrender.com/stories",
      code: "https://github.com/eissapk/riangle",
    },
  },
  //   web application using api (airline app, like the client on upwork)
  // - make this site: https://webcheckin.info/
  // - and use this api: https://aviationstack.com/
  //   {
  //     order: 2,
  //     thumbnail: "",
  //     title: "",
  //     date: "",
  //     links: {
  //       demo: "",
  //       code: "",
  //     },
  //   },

  // 3. E-commerce site (food, front/back, user auth,payments:stripe, email confirmation, security)
  // (will be related to resturatnt lanbding page)
  // - select items and send them to backend and make the purchase and return the res to front end, if it's success or error
  // - user authentication
  // - send confirmation emails
  //   {
  //     order: 3,
  //     thumbnail: "",
  //     title: "",
  //     date: "",
  //     links: {
  //       demo: "",
  //       code: "",
  //     },
  //   },
  // 5. Simple game (must be multi-player game with ws e.g chess @ https://www.youtube.com/watch?v=QwUZxCBtfLw)
  //   {
  //     order: 4,
  //     thumbnail: "",
  //     title: "",
  //     date: "",
  //     links: {
  //       demo: "",
  //       code: "",
  //     },
  //   },
  //  6. IOT project temp/humidity graph with mern + websocket @ https://www.instructables.com/Raspberry-Pi-Nodejs-Blynk-App-DHT11DHT22AM2302/
  //   {
  //     order: 5,
  //     thumbnail: "",
  //     title: "",
  //     date: "",
  //     links: {
  //       demo: "",
  //       code: "",
  //     },
  //   },

  {
    order: 20,
    thumbnail: olum,
    title: "Olumjs",
    date: "23-7-2021",
    links: {
      demo: "https://olumjs.github.io/",
      code: "https://github.com/olumjs",
    },
  },

  {
    order: 30,
    thumbnail: ecommerce,
    title: "Online Store",
    date: "1-2-2020",
    links: {
      demo: "https://eissa.xyz/ols",
      code: "https://github.com/eissapk/ols/tree/master/src",
    },
  },
  {
    order: 40,
    thumbnail: cv,
    title: "CV Builder",
    date: "1-4-2020",
    links: {
      demo: "https://eissa.xyz/cv-builder",
      code: "https://github.com/eissapk/cv-builder/tree/master/src",
    },
  },
  {
    order: 50,
    thumbnail: clean,
    title: "El Badeil",
    date: "1-1-2020",
    links: {
      demo: "https://eissa.xyz/elbadeil",
      code: "https://github.com/eissapk/elbadeil/tree/master/src",
    },
  },
  {
    order: 60,
    thumbnail: birds,
    title: "Angry Birds",
    date: "1-7-2020",
    links: {
      demo: "https://eissa.xyz/angry-birds",
      code: "https://github.com/eissapk/angry-birds/tree/master/src",
    },
  },
  {
    order: 70,
    thumbnail: mynote,
    title: "My Note",
    date: "1-5-2020",
    links: {
      demo: "https://eissa.xyz/mynote",
      code: "https://github.com/eissapk/mynote/tree/main/www",
    },
  },
  {
    order: 80,
    thumbnail: slider,
    title: "Slider",
    date: "26-9-2021",
    links: {
      demo: "https://www.npmjs.com/package/olum-slider",
      code: "https://github.com/olumjs/olum-slider",
    },
  },
  {
    order: 90,
    thumbnail: writer,
    title: "Writer",
    date: "1-6-2020",
    links: {
      demo: "https://www.npmjs.com/package/olum-writer",
      code: "https://github.com/olumjs/olum-writer/tree/master/src",
    },
  },
  {
    order: 100,
    thumbnail: assistant,
    title: "Assistant",
    date: "1-7-2020",
    links: {
      demo: "https://eissa.xyz/eve",
      code: "https://github.com/eissapk/eve/tree/master/src",
    },
  },
  {
    order: 110,
    thumbnail: whiteBoard,
    title: "Board",
    date: "1-8-2020",
    links: {
      demo: "https://eissa.xyz/white-board",
      code: "https://github.com/eissapk/white-board/tree/master/src",
    },
  },
];
