import React, {useState} from 'react'

const Panel = (props) => {
    const [smallText, setSmallText] = useState(props.text);
    const [fullText, setFullText] = useState(props.fullText);
    const [isFullText, setIsFullText] = useState(false);

    const btnName =  isFullText? "Read Less" : "read more";


    const deleteSelf = (id) => {
        console.log(id);
    }
    
    return (
        <section className="panel-section">
            <img src={props.img} alt="Some random image" className="panel-img"/>
            <footer>
                <div className="panel-title-div">
                    <h4 className="panel-title">{props.title}</h4>
                    <h4 className="panel-price">{props.price}</h4>
                </div>
                <p className="panel-text"> {isFullText ? fullText : smallText}
                    <button className="read-more-btn" onClick={() => {setIsFullText(!isFullText)}}>{btnName}</button>
                </p>
                <button className="delete-btn" onClick={() => {props.onDelete(props.onDelete(props.keyValue))}}>Not Interested</button>
            </footer>
        </section>
    )
}

export default Panel
