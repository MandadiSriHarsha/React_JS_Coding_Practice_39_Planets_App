import Slider from 'react-slick'

import './index.css'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    infinite: true,
    speed: 500,
  }

  return (
    <div className="app-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings} className="slider-container">
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
