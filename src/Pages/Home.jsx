import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import Tabsection from '../Components/Home/Tabsection'
import ExplorePrograms from '../Components/Home/Explore-programs'
import TopSpecialization from '../Components/Home/Top-Specialization'
import CollegeRanking from '../Components/Home/college-filter-table'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Tabsection />
      <ExplorePrograms/>
      <TopSpecialization/>
 <CollegeRanking/>
    </div>
  )
}

export default Home
