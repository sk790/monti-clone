"use client"

import { useState } from "react"
import { GraduationCap, Building, ClipboardList, MapPlus,MapIcon,Text } from "lucide-react"
import "./Tabsection.css" // Import the CSS file for styling

export default function Tabsection() {
  const [activeTab, setActiveTab] = useState("all")

  const tabData = {
    all: {
      options: [
        "Top Engineering Course in India",
        "Top LAW Colleges in India",
        "Top MBA Colleges in India",
        "Top University Colleges in India",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electrical Engineering",
      ],
    },
    education: {
      options: [
        "Bachelor of Technology (B.Tech)",
        "Bachelor of Science (B.Sc)",
        "Master of Technology (M.Tech)",
        "PhD Programs in STEM",
      ],
    },
    institution: {
      options: ["IIT Delhi", "IIT Bombay", "Delhi University", "Jawaharlal Nehru University"],
    },
    courses: {
      options: [
        "Computer Science Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electrical Engineering",
      ],
    },
    Exams: {
      options: [
        "JEE Main",
        "JEE Advanced",
        "GATE",
        "CAT",
        "XAT",
        "MAT",
        "UPSC",
      ],
    },
    Places: {
      options: [
        "Delhi",
        "Mumbai",
        "Bangalore",
        "Chennai",
        "Hyderabad",
        "Kolkata",
        "Pune",
      ],
    },
  }

  return (
    <section id="tab-section" className="tab-section">
        <div className="tab-header">
            <h1 className="tab-heading">Explore the World of Education</h1>
            {/* <p className="tab-subtitle">Discover a wide range of educational programs, institutions, and courses tailored to your interests.</p> */}
        </div>
        {/* <img src="./TabSection.png" alt="tabsection"/> */}
    <div className="tab-container">
      <div className="tab-navigation">
        <div className="tab-btn">
        <button className={`tab-button ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
          <span className="tab-icon">All</span>
        </button>
          <div className="tabtext">
          All Categories
          </div>
          </div>
        <div className="tab-btn">
        <button
          className={`tab-button ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          <GraduationCap className="tab-icon" />
        </button>
        <div className="tabtext">
            Education Programs
          </div>
        </div>
        <div className="tab-btn">
        <button
          className={`tab-button ${activeTab === "institution" ? "active" : ""}`}
          onClick={() => setActiveTab("institution")}
        >
          <Building className="tab-icon" />
        </button>
        <div className="tabtext">
          Top Institutions
          </div>
        </div>
        <div className="tab-btn">
        <button
          className={`tab-button ${activeTab === "courses" ? "active" : ""}`}
          onClick={() => setActiveTab("courses")}
        >
          <ClipboardList className="tab-icon" />
        </button>
        <div className="tabtext">
            Popular Courses
          </div>    
        </div>
        <div className="tab-btn">
        <button
          className={`tab-button ${activeTab === "Exams" ? "active" : ""}`}
          onClick={() => setActiveTab("Exams")}
          >
          <Text className="tab-icon" />
        </button>
        <div className="tabtext">
           Top Exams
          </div>    
        </div>
        <div className="tab-btn">
        <button 
          className={`tab-button ${activeTab === "Places" ? "active" : ""}`}
          onClick={() => setActiveTab("Places")}
          >
          <MapPlus className="tab-icon" />
        </button>
        <div className="tabtext">
           Top Places
          </div>    
        </div>
            </div>
      <div className="tab-content-wrapper">
        <h2 className="tab-title">
          {activeTab === "all" && "All Categories"}
          {activeTab === "education" && "Education Programs"}
          {activeTab === "institution" && "Top Institutions"}
          {activeTab === "courses" && "Popular Courses"}
            {activeTab === "Exams" && "Exams"}
            {activeTab === "Places" && "Top Places"}
        </h2>
        <div className="tab-content" key={activeTab}>
          {tabData[activeTab].options.map((option, index) => (
            <button key={index} className="option-button">
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
    <div className="imgsection">
        <img src="./TabSection.png" alt="tabsection" />
    </div>
    <br />
    </section>
  )
}
