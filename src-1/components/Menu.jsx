import React, { useState } from 'react';
import './Menu.css'
import Pilot from './Pilot';
import Programmer from './Programmer';
import Artist from './Artist';
import Bilder from './Bilder';
import Doctor from './Doctor';
import NullComp from './NullComp';

export default function Menu() {
    
    const [state, setState] = useState(6);

    let result;

    switch(state){
        case(1):result= <Pilot/>;
        break;
        case(2):result= <Programmer/>
        break;
        case(3):result= <Artist/>
        break;
        case(4):result= <Bilder/>
        break;
        case(5):result= <Doctor/>
        break;
        case(6):result= <NullComp/>
        break;
    }

    return (
        <div id='line'>
            <h1>Профессии:</h1>
            <div id='list'>
                <div><p className='profs'>Пилот</p><button className='btns' onClick={() => setState(1)}>push me!</button></div>
                <div><p className='profs'>Программист</p><button className='btns' onClick={() => setState(2)}>push me!</button></div>
                <div><p className='profs'>Художник</p><button className='btns' onClick={() => setState(3)}>push me!</button></div>
                <div><p className='profs'>Строитель</p><button className='btns' onClick={() => setState(4)}>push me!</button></div>
                <div><p className='profs'>Врач</p><button className='btns' onClick={() => setState(5)}>push me!</button></div>
            </div>
        {result}
        <button className='btns' onClick={()=>setState(6)}>Delete</button>
        </div>
    );
}
