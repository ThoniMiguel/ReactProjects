import React from 'react'

const Panel = ({image, name, quote, title, btnPressed}) => {
    return (
        <div className="panel-main">
            <div className="panel-img">
                <img src={image} alt="persons-face"/>
            </div>
            <div className="panel-title-div">
                <h3 className="panel-name">{name}</h3>
                <p className="panel-title">{title}</p>
            </div>
            <div className="panel-quote-div">
                <p className="panel-quote">{quote}</p>
            </div>
            <div className="btn-directions-div">
            <button className="btn-prev" onClick={() => {btnPressed(-1)}}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button className="btn-next"  onClick={() => {btnPressed(1)}}>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            </div>
        </div>
    )
}

export default Panel
