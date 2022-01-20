import React, { useState } from 'react';
import Data from './directory';
import './baucua.styles.css';



const abc = Data;

function Baucua(){
    const randomResult = (getdata) => {
            return Math.floor(Math.random()*Object.keys(getdata).length);
    }
    
    const [ abcc,setData ] = useState(()=>{
        let random = randomResult(abc);
        let random1 = randomResult(abc);
        let random2 = randomResult(abc);
        let antien1 = [abc[random],abc[random1],abc[random2]];
        return antien1;
    });

    

    const changeResult = ()=>{
        let random = randomResult(abc);
        let random1 = randomResult(abc);
        let random2 = randomResult(abc);
        let antien2 = [abc[random],abc[random1],abc[random2]];
        setData(antien2);
    }

    return (
        <div>
            <h1>Bầu cua đê</h1>
            <div className="flex">
            {abcc.map((p,index )=> (
                <div className="child-flex" key={index}>
                    <img src={p.image} alt="game" />
                    <h2>{p.name}</h2>
                </div>
            ))}
            </div>
            <button onClick={changeResult}>
                Xóc phát đê
            </button>
        </div>
    )
}


export default Baucua;