import React, {useState, useEffect} from 'react';
import Panel from './Panel';
const App = () =>{
    const url = 'https://course-api.com/react-tabs-project'


    const [jobs, setJobs] = useState();

    const [isLoading, setIsLoading] = useState(true);
    const [value, setValue] = useState(0);

    const getApiData = async () =>{
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setIsLoading(false);
    }
    
    const returnSelected = (value) => {
        let jobsTemp = jobs.find((data) => data.company.toLowerCase() == value);
        if(value === "tommy"){
            setValue(0);
            return;
        }else if(value === "bigdrop"){
            setValue(1);
            return;
        }else{
            setValue(2);
            return;
        }
    }


    useEffect(() => {
        getApiData();
    }, [])
    if(isLoading){
        return(
            <h1 className="loading-screen">Loading...</h1>
        )
    }
    const {order, company, dates, title, duties } = jobs[value];
    return (
        <main> 
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>
            <div className="panel-main">
                <div className="btn-container">
                {jobs.map((item, index) => {
                    return <button key={item.id} onClick={() => {setValue(index)}} className={`btn ${index === value && 'btn-selected'}`}>{item.company}</button>
                })}
                </div>
            <Panel key={order} company={company} dates={dates} title={title} duties={duties} onSelect={returnSelected}/>
            </div>
        </main>
    )
}



export default App;