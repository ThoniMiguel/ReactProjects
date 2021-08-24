import React from 'react'

const Item = ({img, title, price, desc}) => {
    return (
        <div className="items">
            <img src={img} alt="" className="item-img"/>
            <div className="item-title">
                <header>
                    <h4>{title}</h4>
                    <h4 className="item-price">{price}</h4>
                </header>
                <p className="item-text">{desc}</p> 
            </div>
        </div>
    )
}

export default Item
