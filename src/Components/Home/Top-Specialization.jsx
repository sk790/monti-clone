import { PlusCircle } from "lucide-react"
import "./Top-Specialization.css"

export default function TopSpecialization() {
  const specializations = [
    // Row 1
    ["Computer Science", "Mechanical Engineering", "Electronics & Communication", "Civil Engineering"],
    // Row 2
    ["Information Technology", "Electrical & Electronics", "Electrical", "Electronics", "Chemical Engineering"],
    // Row 3
    ["Biotechnology", "Agricultural Engineering", "Biomedical Engineering", "Robotics", "Food Technology"],
    // Row 4
    ["Mechatronics", "Mobile App Development", "Aerospace Engineering", "Industrial Engineering", "Mining"],
  ]

  return (
    <div className="specialization-container">
      <h1 className="specialization-heading">Top Specialization for BE/B.Tech</h1>

      <div className="specialization-content">
        {specializations.map((row, rowIndex) => (
          <div key={rowIndex} className="specialization-row">
            {row.map((specialization, index) => (
              <button key={`${rowIndex}-${index}`} className="specialization-pill">
                {specialization}
                <PlusCircle className="plus-icon" size={16} />
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
