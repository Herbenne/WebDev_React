import CountUp from 'react-countup'
import './Hero.css'
import { jacketsData } from '../../constants'
import jacket1 from '/jacket1.png'
import JacketCard from '../../components/JacketCard'
import { useState } from 'react'

const Hero = () => {
  const [jacketImg, setjacketImg] = useState(jacket1);
  return (
    <section id="hero">
      <div className="hero-container container">
        <div className="hero-left">
          <h1>Finding Your Perfect Items</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas id minima facere debitis facilis nesciunt?</p>
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
          <img src={jacketImg} alt="" />
          <div className="hero-right-container">
            {
              jacketsData.map((jacket, i) => (
                <div key={i}>
                  <JacketCard
                    imgURL={jacket}
                    changeJacketImage={(jacket) => setjacketImg(jacket)}
                    jacketImg={jacketImg}
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