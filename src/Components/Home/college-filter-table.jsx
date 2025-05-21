import { ChevronRight } from "lucide-react"
import "./college-filter-table.css"
import { useState } from "react"

export default function CollegeRankings() {
  const [activeFilter, setActiveFilter] = useState("Computer Science")

  const filters = [
    "Computer Science",
    "Mechanical Engineering",
    "Electronics & Communication",
    "Civil Engineering",
    "Information Technology",
    "Electrical Engineering",
    "Chemical Engineering",
    "Biotechnology",
    "Aerospace Engineering",
  ]

  const colleges = [
    {
      rank: 1,
      logo: "/placeholder.svg?height=40&width=40",
      name: "IIT Bombay - Indian Institute of Technology - [IITB]",
      location: "Mumbai,Maharashtra",
      rating: "5/5",
      rankingSource: "India Today",
      rankingPosition: "#1 out of 160 in India 2024",
      cutoff: "JEE-Advanced 2024 Cut off 68",
      applicationDeadline: "10 June - 18 Jun 2024",
      fees: "₹2,30,700",
      feesDetail: "1st Year Fees",
    },
    {
      rank: 2,
      logo: "/placeholder.svg?height=40&width=40",
      name: "IIT Delhi - Indian Institute of Technology [IITD]",
      location: "New Delhi,Delhi NCR",
      rating: "4.9/5",
      rankingSource: "NIRF",
      rankingPosition: "#1 out of 275 in India 2024",
      cutoff: "JEE-Advanced 2024 Cut off 417",
      applicationDeadline: "10 June - 18 Jun 2024",
      fees: "₹2,28,650",
      feesDetail: "1st Year Fees",
    },
    {
      rank: 3,
      logo: "/placeholder.svg?height=40&width=40",
      name: "IIT Madras - Indian Institute of Technology - [IITM]",
      location: "Chennai,Tamil Nadu",
      rating: "4.9/5",
      rankingSource: "Outlook",
      rankingPosition: "#1 out of 25 in India 2024",
      cutoff: "JEE-Advanced 2024 Cut off 419",
      applicationDeadline: "10 June - 18 Jun 2024",
      fees: "₹2,53,417",
      feesDetail: "1st Year Fees",
    },
    {
      rank: 4,
      logo: "/placeholder.svg?height=40&width=40",
      name: "IIT Kanpur - Indian Institute of Technology - [IITK]",
      location: "Kanpur,Uttar Pradesh",
      rating: "4.9/5",
      rankingSource: "India Today",
      rankingPosition: "#3 out of 284 in India 2024",
      cutoff: "JEE-Advanced 2024 Cut off 252",
      applicationDeadline: "10 June - 18 Jun 2024",
      fees: "₹2,29,970",
      feesDetail: "1st Year Fees",
    },
    {
      rank: 5,
      logo: "/placeholder.svg?height=40&width=40",
      name: "IIT Kharagpur - Indian Institute of Technology - [IITKGP]",
      location: "Kharagpur,West Bengal",
      rating: "4.9/5",
      rankingSource: "India Today",
      rankingPosition: "#4 out of 160 in India 2024",
      cutoff: "JEE-Advanced 2024 Cut off 898",
      applicationDeadline: "10 June - 18 Jun 2024",
      fees: "₹2,62,360",
      feesDetail: "1st Year Fees",
    },
    {
      rank: 6,
      logo: "/placeholder.svg?height=40&width=40",
      name: "IIT Roorkee - Indian Institute of Technology - [IITR]",
      location: "Roorkee,Uttarakhand",
      rating: "4.8/5",
      rankingSource: "NIRF",
      rankingPosition: "#5 out of 275 in India 2024",
      cutoff: "JEE-Advanced 2024 Cut off 680",
      applicationDeadline: "10 June - 18 Jun 2024",
      fees: "₹2,24,100",
      feesDetail: "1st Year Fees",
    },
  ]

  return (
    <div className="college-rankings-container">
      <h1 className="college-rankings-heading">Top 10 Colleges</h1>

      {/* Horizontal Scrollable Filter */}
      <div className="filter-container">
        <div className="filter-scroll">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-pill ${filter === activeFilter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="scroll-indicator">
          <ChevronRight size={20} />
        </div>
      </div>

      {/* College Rankings Table */}
      <div className="table-container">
        <table className="rankings-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>College</th>
              <th>Ranking</th>
              <th>Cutoff</th>
              <th>Application Deadline</th>
              <th>Fees</th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((college) => (
              <tr key={college.rank}>
                <td className="rank-cell">#{college.rank}</td>
                <td className="college-cell">
                  <div className="college-info">
                    <img
                      src={college.logo || "/placeholder.svg"}
                      alt={`${college.name} logo`}
                      className="college-logo"
                    />
                    <div className="college-details">
                      <div className="college-name">{college.name}</div>
                      <div className="college-location">
                        {college.location} | <span className="rating">★ {college.rating}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="ranking-cell">
                  <div className="ranking-info">
                    <img
                      src="/placeholder.svg?height=30&width=30"
                      alt={college.rankingSource}
                      className="ranking-logo"
                    />
                    <div className="ranking-position">{college.rankingPosition}</div>
                  </div>
                </td>
                <td className="cutoff-cell">{college.cutoff}</td>
                <td className="deadline-cell">{college.applicationDeadline}</td>
                <td className="fees-cell">
                  <div className="fees-amount">{college.fees}</div>
                  <div className="fees-detail">{college.feesDetail}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back to top button */}
    </div>
  )
}

