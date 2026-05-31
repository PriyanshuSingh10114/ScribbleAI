import Header from '../components/Header.jsx'
import PopularTools from '../components/PopularTools.jsx'
import ExplorePossibilities from '../components/ExplorePossibilities.jsx'
import Steps from '../components/Steps.jsx'
import Description from '../components/Description.jsx'
import Testimonials from '../components/Testimonials.jsx'
import GenerateButton from '../components/GenerateButton.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <PopularTools/>
      <ExplorePossibilities/>
      <Steps/>
      <Description/>
      <Testimonials/>
      <GenerateButton/>
    </div>
  )
}

export default Home