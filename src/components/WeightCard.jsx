const WeightCard = ({ imgURL, changeWeightImage, weightImg }) => {
    const handleClick = () => {
        if (weightImg !== imgURL.weight) {
            changeWeightImage(imgURL.weight)
        }
    };
    return (
        <div className={`${weightImg === imgURL.weight ?
            'border-primary' : 'border-transparent'
            }selection-container`} onClick={ handleClick }>
            <div className="selection-card">
                <img src={imgURL.thumbnail} alt="" />
            </div>
        </div>
    )
}

export default WeightCard