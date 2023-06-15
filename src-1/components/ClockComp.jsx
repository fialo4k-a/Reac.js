import React, { useEffect, useState } from 'react';
import './Clock.css';



//State это JavaScript объект, который хранит динамические данные компонента и позволяет компоненту отслеживать изменения между рендерами(render).

 function ClockComp(props) {
    let [date, setDate]= useState(new Date()); // useState - хук(специальная функция) состояния(предоставляет функциональным компонентам доступ к состоянию react)
    useEffect(()=>{// хук эффекта(даёт возможность выполнять побочные эффекты в функциональном компоненте)
        setInterval(()=>{setDate(new Date())}, 999)
    })

    //Метод setState() планирует изменение объекта состояния (state) компонента. Когда состояние меняется, компонент рендерится повторно.
    
//steDate мы вызывает тогда, когда нам нужно обновить состояние date

    let hours = date.getHours();
    let minuts =  date.getMinutes();
    let seconds =  date.getSeconds();

    if(Number(props.format) == 12){
        hours = hours - 12;
    }
    
    hours = hours + Number(props.timezone);    
    let fixed = (item)=>{
        let res;
        if(item<10)
        res = "0"+item;
        else
        res = item;
        return res;
    };

    if(Number(fixed(hours))>24)
    hours = 1;

      return (
    <div>
        <h1>Формат:{props.format} Часовой пояс:{props.timezone}</h1>
      <h2 className='letters'>Сегодня: </h2>
      <p className='numbers'>{date.toLocaleDateString()}</p>
      <h2 className='letters'>Сейчас: </h2>
      <p className='numbers'>{fixed(hours)}:{fixed(minuts)}:{fixed(seconds)}</p>
    </div>
  );
}

export default ClockComp;

