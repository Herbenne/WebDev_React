const CategoriesCard = ({imgURL, title, link}) => {
  return (
    <div className="categories-card">
        <a href={link}> 
        <img src={imgURL} alt="" />
        </a>
        <h4>{title}</h4>
    </div>
  )
}

export default CategoriesCard