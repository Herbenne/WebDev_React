import CountUp from 'react-countup'
import './Hero.css'
import { weightsData } from '../../constants'
import weight1 from '/weight1.png'
import WeightCard from '../../components/WeightCard'
import { useState } from 'react'

const Hero = () => {
  const [weightImg, setweightImg] = useState(weight1);
  return (
    <section id="hero">
      <div className="hero-container container">
        <div className="hero-left">
          <h1>Finding Your Perfect Items</h1>
          <p>Discover your ideal gym essentials effortlessly with Weight Shop – where finding your perfect items is just a click away!</p>
          <button className='btn'>Shop now</button>
          <div className="hero-stats">
            <div className="stat-box">
              <span>
                <CountUp start={350} end={555} duration={4} />
                <p>+</p>
              </span>
              <span>Sold</span>
            </div>
            <div className="stat-box">
              <span>
                <CountUp start={9900} end={11103} duration={4} />
                <p>+</p>
              </span>
              <span>Customers</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={weightImg} alt="" />
          <div className="hero-right-container">
            {
              weightsData.map((weight, i) => (
                <div key={i}>
                  <WeightCard
                    imgURL={weight}
                    changeWeightImage={(weight) => setweightImg(weight)}
                    weighttImg={weightImg}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero