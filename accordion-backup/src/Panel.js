import React, { useState } from 'react';
import Question from './Question';
import data from './data';

const Panel = () =>{

    const [infos, setInfos] = useState(data);
    return(
        <div className="panel-main">
            <section className="title">
            <h3>Questions and answers about login</h3>
            </section>
            <section className="panel-menu">
                {infos.map((info, index) => {
                    return <Question key={index} text={info.text} subText={info.subtext}/>
                })}
            </section>

        </div>
    )
}


export default Panel;