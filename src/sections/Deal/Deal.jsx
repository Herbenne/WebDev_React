import "./Deal.css"

const Deal = () => {
  return (
    <section id="deal">
      <div className="deal-container container">
        <div className="deal-left">
          <img src="/banner.png" alt="" />
        </div>
        <div className="deal-right">
          <h4>Sore today, strong tomorrow.</h4>
          <h1>NEW YEAR SALE DISCOUNT</h1>
          <button className="btn"><a href="#shop">Shop Now</a></button>
        </div>
      </div>
    </section>
  )
}

export default Deal