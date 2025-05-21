import React from "react";
import "./HeroSection.css"; // Import the CSS file for styling
import { Search ,User} from "lucide-react";

const HeroSection = () => {
  return (
    <div>
      <section id="hero" className="hero">
        <div className="hero-content">
            <div className="hero-text-anbook">
            <h1>
            Explore the <br />
            <span>World of Education</span>
          </h1>
          <div className="hero-img">
          <img src="./Book.png" alt="Books" />
        </div>
            </div>
          <div className="search-box">
            <div className="placeholder1">
              Search BE/B.Tech Colleges, Courses and Exams
              <span>
                <span>"in Noida"</span>
                <span>"in Uttar Pradesh"</span>
                <span>"in Uttarakhand"</span>
                <span>"in Delhi"</span>
                <span>"in Mumbai"</span>
                <span>"in Chennai"</span>
                <span>"in Hyderabad"</span>
                <span>"in Kolkata"</span>
              </span>
            </div>

            <input
              type="text"
              placeholder="Search Colleges, Exams, Courses..."
            />
          </div>
        </div>
      </section>
      <section>
      <div className=" searchButton">
        <a href="#hero">
          <Search color="white" size={26} />
        </a>
      </div>
      </section>
    </div>
  );
};

export default HeroSection;
