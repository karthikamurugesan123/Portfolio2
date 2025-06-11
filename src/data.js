import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub,AiFillLinkedin,AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
import Eathappy from "../src/assets/Eathappy.png";
import Agro from "../src/assets/agro-connect.jpeg";

export const menu = [
    {name:"About"},
    {name:"Services"},
    {name:"Skill"},
    {name:"Projects"},
    {name:"Testimonial"},
    {name:"Contact"},
]



export const projects = [
    // { 
    //   id:1,
    //   title: 'AI Powered School',
    //   image: 'https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png',
    //   category:"UI/UX",
    //   data:{
    //      description: `Transforming education with AI, our School UI Design project revolutionizes the 
    //                    learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
    //                    and intuitive navigation, our design empowers educators and students alike. Experience 
    //                    innovation at its finest as we pave the way for a smarter, more efficient educational 
    //                    journey.`,
    //      demoLink: "https://google.com/",
    //   },
    //   stack:[
    //     {
    //       name:"XD",
    //       icon: <SiAdobexd/>,
    //       iconColor:"skyblue",
    //     },
    //     {
    //       name:"Pigma",
    //       icon: <SiAdobexd/>,
    //       iconColor:"skyblue",
    //     },
    //   ]
    // },
    {
      id:2,
      title: 'Food Ordering System ',
      image: Eathappy,
      category:"Web",
      data:{
        description:`A full-stack food ordering web app that simplifies the process of browsing menus, placing orders, and managing deliveries. 
        Designed for scalability and responsiveness, this project offers a modern user experience and efficient backend operations.
Highlights:
User-friendly UI with real-time updates using React.
RESTful API built with Node.js & Express for fast, scalable performance.
MongoDB for storing user profiles, orders, and menu data.
Admin dashboard for menu and order management.
Secure authentication and role-based access control (Admin, Restaurant, User).
Stripe integration for seamless online payments.`,
        demoLink: "https://eathappyfrontend.onrender.com/",
      },
      stack:[
        {
          name:"ReactJs",
          icon: <DiReact/>,
          iconColor:"skyblue",
        },
        {
          name:"NodeJs",
          icon: <FaNodeJs/>,
          iconColor:"green",
        },
        {
          name:"ExpressJs",
          icon: <SiExpress/>,
        },
        {
          name:"MongoDB",
          icon: <SiMongodb/>,
          iconColor:"limegreen",
        },
      ]
    },
    {
      id:3,
      title: 'Agro-connect farmer to consumer marketplace',
      image: Agro,
      category:"Web",
      data:{
        description: `Engineered a Full-stack Agro-connect web platform to connect 
farmers directly with consumers, utilizing HTML, CSS, Bootstrap, 
JavaScript, PHP, and MySQL for seamless user interaction and 
efficient backend operation`,
        demoLink: "https://google.com/",
      },
      stack:[
        {
          name:"Bootstrap",
          // icon: <DiReact/>,
          // iconColor:"skyblue",
        },
        {
          name:"PHP",
          // icon: <FaNodeJs/>,
          // iconColor:"green",
        },
        // {
        //   name:"ExpressJs",
        //   icon: <SiExpress/>,
        // },
        {
          name:"MySQL",
          // icon: <SiMongodb/>,
          // iconColor:"limegreen",
        },
        // {
        //   name:"MongoDBT",
        //   icon: <SiMongodb/>,
        // },
        // {
        //   name:"MongoDBT",
        //   icon: <SiMongodb/>,
        // },
        // {
        //   name:"MongoDBT",
        //   icon: <SiMongodb/>,
        // },
      ]
    },
    // {
    //   id:4,
    //   title: 'Project Management application',
    //   image: 'https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png',
    //   category:"Apps",
    //   data:{
    //     description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
    //                    Elevate your project management experience and achieve success with ease.`,
    //     demoLink: "https://google.com/",
    //   },
    //   stack:[
    //     {
    //       name:"React Native",
    //       icon: <TbBrandReactNative/>,
    //       iconColor:"skyblue",
    //     },
    //     {
    //       name:"NodeJs",
    //       icon: <FaNodeJs/>,
    //       iconColor:"green",
    //     },
    //     {
    //       name:"ExpressJs",
    //       icon: <SiExpress/>,
    //     },
    //     {
    //       name:"MongoDB",
    //       icon: <SiMongodb/>,
    //       iconColor:"limegreen",
    //     },
    //   ]
    // },
    // {
    //   id:5,
    //   title: 'Mobile bank - App Design',
    //   image: 'https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png',
    //   category:"UI/UX",
    //   data:{
    //     description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
    //     demoLink: "https://google.com/",
    //   },
    //   stack:[
    //     {
    //       name:"Figma",
    //       icon: <CgFigma/>,
    //       iconColor:"orangered",
    //     },
    //   ]
    // },
    // {
    //   id:6,
    //   title: 'Quiz App Development',
    //   image: 'https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg',
    //   category:"Apps",
    //   data:{
    //     description: `Elevate engagement and knowledge retention with our Quiz App 
    //                   Development project. Seamlessly crafted for interactive learning 
    //                   experiences, our app offers customizable quizzes, real-time feedback, 
    //                   and captivating visuals. Empower users to test their knowledge anytime,
    //                    anywhere, fostering a dynamic learning environment tailored to their 
    //                    needs.`,
    //     demoLink: "https://google.com/",
    //   },
    //   stack:[
    //     {
    //       name:"React Native",
    //       icon: <TbBrandReactNative/>,
    //       iconColor:"skyblue",
    //     },
    //     {
    //       name:"NodeJs",
    //       icon: <FaNodeJs/>,
    //       iconColor:"green",
    //     },
    //     {
    //       name:"ExpressJs",
    //       icon: <SiExpress/>,
    //     },
    //     {
    //       name:"MongoDB",
    //       icon: <SiMongodb/>,
    //       iconColor:"limegreen",
    //     },
    //   ]
    // },
  ]
  


export const experience = [
  
    {
        title:"UI/UX",
        data:[
            // {
            //     skill:"Figma",
            //     level:"Experienced",
            // },
            // {
            //     skill:"Sketch",
            //     level:"Intermediate",
            // },
            {
                skill:"XD",
                level:"Intermediate",
            },
        ]
    },
    {
        title:"Frontend Development",
        data:[
            {
                skill:"HTML",
                level:"Intermediate",
            },
            {
                skill:"CSS",
                level:"Intermediate",
            },
            {
                skill:"JavaScript",
                level:"Intermediate",
            },
            {
                skill:"Tailwind",
                level:"Intermediate",
            },
            {
                skill:"Bootstrap",
                level:"Intermediate",
            },
            // {
            //     skill:"React",
            //     level:"Experienced",
            // },
            // {
            //     skill:"React Native",
            //     level:"Experienced",
            // },
        ]
    },
    {
        title:"Backend Development",
        data:[
            // {
            //     skill:"Node JS",
            //     level:"Experienced",
            // },
            // {
            //     skill:"MangoDB",
            //     level:"Intermediate",
            // },
            {
                skill:"PHP",
                level:"Intermediate",
            },
            {
                skill:"Python",
                level:"Intermediate",
            },
            {
                skill:"MySQL",
                level:"Intermediate",
            },
        ]
    },

    {
      title:"API Testing",
      data:[
          {
              skill:"Postman",
              level:"Intermediate",
          },
          // {
          //     skill:"Swagger",
          //     level:"Experienced",
          // },
          // {
          //     skill:"XD",
          //     level:"Intermediate",
          // },
      ]
  },
  {
    title:"Cloud Computing",
    data:[
        // {
        //     skill:"AWS",
        //     level:"Intermediate",
        // },
        {
            skill:"Render",
            level:"Intermediate",
        },
        {
            skill:"Netlify",
            level:"Intermediate",
        },
    ]
},

{
  title:"Databases",
  data:[
      {
          skill:"MySQL Server",
          level:"Intermediate",
      },
      // {
      //     skill:"MangoDB",
      //     level:"Experienced",
      // },
      {
          skill:"Oracle",
          level:"Intermediate",
      },
  ]
},
  
]


export const socialHandles = [
  
  {
    name:"Github",
    icon:<AiFillGithub/>,
    link:"",
  },
  {
    name:"LinkedIn",
    icon:<AiFillLinkedin/>,
    link:"",
  },
  {
    name:"Youtube",
    icon:<AiFillYoutube/>,
    link:"",
  },
];