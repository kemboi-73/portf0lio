import project1 from "../assets/projects/codeup.png";
import project2 from "../assets/projects/mpesa.png";
import project3 from "../assets/projects/project3.jpg";

export const HERO_CONTENT = `
  I am a junior Software Engineer passionate about problem-solving and dedicated to delivering software solutions that make a positive impact in today's digital landscape.
`;


export const ABOUT_TEXT = `
  I'm Kemboi Mike, a passionate Full Stack Web Developer and problem solver with a keen interest in exploring the tech world 
  and continuously learning new technologies. I specialize in Web Development, leveraging my expertise in HTML, CSS, 
  JavaScript, React, Node.js, and more to build dynamic and scalable applications.

`;

// export const EDUCATION_TEXT = `
//   - Bsc.Information Technology student in University of Eldoret
//   I'm always open to new opportunities and collaborations. Feel free to reach out!

//   -Complete Software Engineering at ALX-AFRICA 2023-2024 with specialisation in backend.
// `;
export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Full Stack Developer Intern",
    company: "Constech Limited ",
    description: `Engineered and maintained a scalable online learning platform using React.js, Node.js, Tailwind CSS, PostgreSQL, Prisma, NestJS, and TypeScript; optimized database queries and enhanced overall system performance. Engineered a robust API in Node.js and NestJS, enabling seamless data retrieval from a PostgreSQL database, improving user experience. Integrated Judge0 API to create an online compiler supporting multiple programming languages, enhancing coding efficiency.`,
    technologies: ["Django", "Javascript", "PostgreSQL", "Python"],
  },
];


export const PROJECTS = [
  {
    title: "MSET Point Of sale",
    image: project1,
    // github: "https://github.com/Kamna16/CodeUp",
    // link: "https://codeup-three.vercel.app/",
    description:
      "MSET Point of Sale is a powerful, web-based application tailored for business owners who seek seamless management and tracking of their sales operations. With an intuitive and user-friendly interface, MSET provides real-time insights into your transactions, inventory, and customer interactions, all accessible from any device with an internet connection. Whether you run a retail store, restaurant, or online shop, MSET simplifies complex sales processes, enabling you to monitor sales trends, generate detailed reports, and manage inventory with ease. Its robust features ensure secure transactions, streamlined checkout processes, and accurate record-keeping, making it the ideal solution for growing your business efficiently",
    technologies: ["Django", "Python", "Javascript", "HTML", "CSS", "SQL"],
  },
  {
    title: "MPESA DARAJA API",
    image: project2,
    // github: "https://github.com/Kamna16/MyPortfolio",
    // link: "https://kamna-portfolio.vercel.app/",
    description:
      "MPESA DARAJA API is a Django-based web application that integrates with Safaricom's M-Pesa services to facilitate various mobile payment operations, such as initiating STK Push transactions and querying transaction status.",
    technologies: ["Python", "Django", "SQL", ],
  },
  // {
  //   title: "Bike Repair Website",
  //   image: project3, 
  //   github: "https://github.com/Kamna16/FixMyBike",
  //   link: "",
  //   description:
  //     "I am currently building a Bike Repair website using Next.js. The application aims to improve the bike repair industry by providing innovative services and features. This project will help make bike repair services more accessible and efficient, promoting sustainable transportation.",
  //   technologies: ["Next.js","More.."],
  // },
];

export const CONTACT = {
  phoneNo: "+254-717839550",
  email: "kemboimikey@gmail.com",
  address: "Nairobi - Kenya"
};