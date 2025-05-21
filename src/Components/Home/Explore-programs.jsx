import "./Explore-programs.css"

export default function ExplorePrograms() {
  return (
    <div className="explore-container">
      <h1 className="explore-heading">Explore Programs</h1>

      <div className="explore-grid">
        {/* Ranking Card */}
        <div className="explore-card">
          <h2 className="card-title">Ranking</h2>
          <p className="card-description">College ranked based on real data</p>

          <div className="card-image">
            <img src="/placeholder.svg?height=80&width=80" alt="Ranking illustration" />
          </div>

          <div className="tag-container">
            <span className="tag">Collegedunia - 852</span>
            <span className="tag">NIRF - 528</span>
            <span className="tag">IIRF - 612</span>
            <span className="tag">Indiatoday - 512</span>
            <span className="tag">TOI - 449</span>
          </div>

          <a href="#" className="card-link">
            Top Ranked Colleges in India &gt;
          </a>
        </div>

        {/* Find Colleges Card */}
        <div className="explore-card">
          <h2 className="card-title">Find Colleges</h2>
          <p className="card-description">Discover 19000+ colleges via preferences</p>

          <div className="card-image">
            <img src="/placeholder.svg?height=80&width=80" alt="College illustration" />
          </div>

          <div className="link-list">
            <a href="#" className="sub-link">
              Best BTech colleges in India
            </a>
            <a href="#" className="sub-link">
              Best BTech colleges in Delhi
            </a>
          </div>

          <a href="#" className="card-link">
            Discover Top Colleges in India &gt;
          </a>
        </div>

        {/* Compare Colleges Card */}
        <div className="explore-card">
          <h2 className="card-title">Compare Colleges</h2>
          <p className="card-description">Compare on the basis of rank, fees, etc.</p>

          <div className="card-image">
            <img src="/placeholder.svg?height=80&width=80" alt="Compare illustration" />
          </div>

          <div className="college-compare">
            <div className="college-row">
              <span className="college-icon">🟠</span>
              <span className="college-name">IIT Madras</span>
              <span className="college-tag">BE/B.Tech</span>
              <span className="vs">vs</span>
              <span className="college-icon">🔴</span>
              <span className="college-name">IIT Delhi</span>
              <span className="college-tag">BE/B.Tech</span>
            </div>

            <div className="college-row">
              <span className="college-icon">🟠</span>
              <span className="college-name">IIT Madras</span>
              <span className="college-tag">BE/B.Tech</span>
              <span className="vs">vs</span>
              <span className="college-icon">⚪</span>
              <span className="college-name">IIT Bombay</span>
              <span className="college-tag">BE/B.Tech</span>
            </div>
          </div>

          <a href="#" className="card-link">
            Compare Colleges &gt;
          </a>
        </div>

        {/* Exams Card */}
        <div className="explore-card">
          <h2 className="card-title">Exams</h2>
          <p className="card-description">Know more about your exams</p>

          <div className="card-image">
            <img src="/placeholder.svg?height=80&width=80" alt="Exams illustration" />
          </div>

          <div className="tag-container">
            <span className="tag">JEE Main</span>
            <span className="tag">JEE Advanced</span>
            <span className="tag">BITSAT</span>
            <span className="tag">WBJEE</span>
            <span className="tag">KEAM</span>
            <span className="tag">COMEDK UGET</span>
          </div>

          <a href="#" className="card-link">
            Check All Entrance Exams in India &gt;
          </a>
        </div>

        {/* College Predictor Card */}
        <div className="explore-card">
          <h2 className="card-title">College Predictor</h2>
          <p className="card-description">Know your college admission chances</p>

          <div className="card-image">
            <img src="/placeholder.svg?height=80&width=80" alt="Predictor illustration" />
          </div>

          <div className="tag-container">
            <span className="tag">JEE Main</span>
            <span className="tag">JEE Advanced</span>
            <span className="tag">BITSAT</span>
            <span className="tag">KEAM</span>
            <span className="tag">WBJEE</span>
            <span className="tag">COMEDK UGET</span>
          </div>

          <a href="#" className="card-link">
            Find Where you may get Admission &gt;
          </a>
        </div>

        {/* Course Finder Card */}
        <div className="explore-card">
          <h2 className="card-title">Course Finder</h2>
          <p className="card-description">Discover top courses in Indian Colleges 2025</p>

          <div className="card-image">
            <img src="/placeholder.svg?height=80&width=80" alt="Course finder illustration" />
          </div>

          <div className="tag-container">
            <span className="tag">Agricultural Engineering - 22</span>
            <span className="tag">Computer Science - 151</span>
            <span className="tag">General - 128</span>
          </div>

          <a href="#" className="card-link">
            Get Top Courses in Indian Colleges &gt;
          </a>
        </div>
      </div>
    </div>
  )
}
