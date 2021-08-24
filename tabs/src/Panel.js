import React, {useState} from 'react'
import List from './List'
const Panel = ({ company, dates, title, duties, onSelect}) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <>

            <article className="panel-center">
                <h3 className="panel-title">{title}</h3>
                <h4 className="panel-subtitle">{company}</h4>
                <p className="panel-time">{dates}</p>
                <List args={duties[0]}/>
                <List args={duties[1]}/>
                <List args={duties[2]}/>
                
            <button className="more-info">more info</button>
            </article>
        </>
    )
}

export default Panel
