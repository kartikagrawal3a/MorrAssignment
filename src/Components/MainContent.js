import React, { useEffect, useState } from 'react';
import MainContentCSS from '../styles/MainContent.module.css';
import MainContentCard from './MainContentCard';

const MainContent = (props) => {
    const [entry, setEntry] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFetch, setNotFetch] = useState(false);
    const getContent = async (type) => {
        try{
            const response = await fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json');
            const data = await response.json();
            const PrefinalData = data.entries;
            const finalData = PrefinalData.filter((elem)=>{
                return elem.programType===type && elem.releaseYear>=2010;
            })
            finalData.sort((a,b)=>{
                if (a.title.toLowerCase() < b.title.toLowerCase()) 
                    return -1;
                if (a.title.toLowerCase() > b.title.toLowerCase()) 
                    return 1;
                return 0;
            })
            const res = finalData.slice(0,21);
            setEntry(res);
            setLoading(false);
        }
        catch(error){
            console.log(error);
            setLoading(false);
            setNotFetch(true);
        }
    } 

    useEffect(() => {
        getContent(props.type);
    },[props.type])
    if(loading === true){
        return(
            <p className={MainContentCSS.load}>Loading...</p>
        );
    }
    if (notFetch === true) {
        return(
            <p className={MainContentCSS.load}>Oops. Something went Wrong</p>
        );
    }
    return(
        <>
            <div className="row">
                {
                    entry.map((elem,index)=>{
                        return(
                            <div key={index}>
                                <MainContentCard title={elem.title} url={elem.images['Poster Art'].url} />
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default MainContent;