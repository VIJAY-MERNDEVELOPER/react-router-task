import "./App.css";
import Navbar from "./Navbar";
import Career from "./Career";
import All from "./All";
import Fsd from "./Fsd";
import Ds from "./Ds";
import Cyber from "./Cyber";
import { Routes, Route } from "react-router-dom";
function App() {
  let cardDetails = [
    {
      id: 1,
      category: "ALL",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Design-Thinking-and-Prototyping-in-UIUX-A-Comprehensive-Guide.webp",
      title: "Design Thinking and Prototyping in UI/UX: A Comprehensive Guide",
      className: "card-body",
    },
    {
      id: 2,
      category: "ALL",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Best-IoT-Project-Ideas.webp",
      title: "Top 17 Best IoT Project Ideas",
      className: "card-body",
    },
    {
      id: 3,
      category: "ALL",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-01.png",
      title: "Top 17 Best IoT Project Ideas",
      className: "card-body",
    },
    {
      id: 4,
      category: "ALL",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-B2B-Digital-Marketing-Strategies.webp",
      title: "Top 17 Best IoT Project Ideas",
      className: "card-body",
    },
    {
      id: 5,
      category: "ALL",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image.jpg",
      title: "Top 17 Best IoT Project Ideas",
      className: "card-body",
    },
    {
      id: 6,
      category: "ALL",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Best-Software-Tools-for-Writing-Elevate-Your-Writing-Skills.webp",
      title: "Top 17 Best IoT Project Ideas",
      className: "card-body",
    },
    {
      id: 7,
      category: "FSD",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Introduction-to-HTML-Tags-A-Comprehensive-Guide-With-Examples.webp",
      title:
        "Introduction to HTML Tags: A Comprehensive Guide With Examples [2024]",
      className: "card-body",
    },
    {
      id: 8,
      category: "FSD",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
      title:
        "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
      className: "card-body",
    },
    {
      id: 9,
      category: "FSD",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      className: "card-body",
    },
    {
      id: 10,
      category: "FSD",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      className: "card-body",
    },
    {
      id: 11,
      category: "FSD",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      title: "Horizontal vs Vertical Scaling for Efficient System Design",
      className: "card-body",
    },
    {
      id: 12,
      category: "FSD",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      title: "Best Books to Learn Full-Stack Development",
      className: "card-body",
    },
    {
      id: 13,
      category: "DS",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      className: "card-body",
    },
    {
      id: 14,
      category: "DS",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
      title: "Impact of Certification Programs on Hiring Data Scientists",
      className: "card-body",
    },
    {
      id: 15,
      category: "DS",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title: "Top Product-Based Companies for Data Science Freshers",
      className: "card-body",
    },
    {
      id: 16,
      category: "DS",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      title:
        "What is the Difference between Data Science and Data Engineering?",
      className: "card-body",
    },
    {
      id: 17,
      category: "DS",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-2048x1072.png",
      title: "Top 10 Data Science Tools in 2024",
      className: "card-body",
    },
    {
      id: 18,
      category: "DS",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      title: "Best Data Science Books to Learn in 2024",
      className: "card-body",
    },
    {
      id: 19,
      category: "CS",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      className: "card-body",
    },
    {
      id: 20,
      category: "CS",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title: "What Is Hacking? Types of Hacking & More",
      className: "card-body",
    },
    {
      id: 21,
      category: "CS",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      className: "card-body",
    },
    {
      id: 22,
      category: "CS",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      title:
        "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      className: "card-body",
    },
    {
      id: 23,
      category: "CS",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      title:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      className: "card-body",
    },
    {
      id: 24,
      category: "CS",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
      title: "8 Different Types of Cybersecurity and Threats Involved",
      className: "card-body",
    },
    {
      id: 25,
      category: "career",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image.jpg",
      title: "Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
      className: "card-body",
    },
    {
      id: 26,
      category: "career",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      title:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      className: "card-body",
    },
    {
      id: 27,
      category: "career",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
      title: "UI/UX Designer Job Description and Roles & Responsibilities",
      className: "card-body",
    },
    {
      id: 28,
      category: "career",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      title: "Top 5 IT Jobs for Economics Students",
      className: "card-body",
    },
    {
      id: 29,
      category: "career",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      className: "card-body",
    },
    {
      id: 30,
      category: "career",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      title: "Automation Test Engineer Resume: 10 Important Things To Consider",
      className: "card-body",
    },
  ];
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<All cardDetails={cardDetails}></All>} />
        <Route path="/fsd" element={<Fsd cardDetails={cardDetails}></Fsd>} />
        <Route path="/ds" element={<Ds cardDetails={cardDetails}></Ds>} />
        <Route
          path="/cyber"
          element={<Cyber cardDetails={cardDetails}></Cyber>}
        />
        <Route
          path="/career"
          element={<Career cardDetails={cardDetails}></Career>}
        />
      </Routes>
      {/* <All cardDetails={cardDetails}></All> */}
      {/* <Fsd cardDetails={cardDetails}></Fsd> */}
      {/* <DS cardDetails={cardDetails}></DS> */}
      {/* <Cyber cardDetails={cardDetails}></Cyber> */}

      {/* <Career cardDetails={cardDetails}></Career> */}
    </>
  );
}

export default App;
