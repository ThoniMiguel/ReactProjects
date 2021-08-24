import React, {useEffect, useState} from 'react';
import people from './data';
import Panel from './Panel';
const App = () =>{
    const [peoples, setPeoples] = useState(people);
    const [value, setValue] = useState(0);
    
    const changeValue = (n) => {
        if((value === 0) && n === -1){
            setValue(peoples.length - 1);
            clearTimeout(timeoutVar);

            return;
        }
        if((value === peoples.length - 1) && n === 1){
            setValue(0);
            clearTimeout(timeoutVar);

            return;
        }
        setValue(value + n);
        clearTimeout(timeoutVar);
    }

    const changeValueByTime = () =>{
        if((value === peoples.length - 1)){
            setValue(0);
            return;
        }
        setValue(value + 1);
        console.log("hi");
    }

    let timeoutVar = setTimeout(changeValueByTime, 6000);
  
    const {id, image, name, quote, title} = peoples[value];
    return(
        <>
            <div className="title">
                <h2>
                    <span>/ </span>
                    review
                </h2>
                <Panel image={image} name={name} quote={quote} title={title} btnPressed={changeValue}/>
            </div>
        </>
    )
}



export default App;