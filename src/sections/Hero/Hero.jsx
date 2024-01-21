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
          <h1>Empower Your Fitness Journey! </h1>
          <p>Welcome to Weight Shop, your ultimate destination for fitness excellence. Discover the ideal gym equipment and supplements that align with your goals, empowering you to reach new heights in your fitness journey. Our curated selection ensures top-notch quality, providing the tools you need to elevate your workouts and achieve peak performance. </p>
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