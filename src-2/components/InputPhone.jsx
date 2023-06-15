import React from 'react';
import './InputPhone.css';
import { useState } from 'react';

export default function InputPhone() {
 
  const [ imageActive,setImageActive ] =  useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAABt0lEQVRIS2Ps4uevYGZjr/+aX8nGwMDAwDOpE0QxfHv18iWYQSPAysDwSpzhfzBjr6jYd0ZGJrYveeVgq+jlAJBdIEcwNrX0/wVxwo7vf8nw/z+D7Lp1YIdc5wAHCM3ADqjJCAcc2wcOcro7oE9MAhwC6Y8egx3wODiYARQSX7ZtoZnvQQbDQwDDAUFBYIvp5oDRNIAeBaDgfz93DsOL7Cw6p4EHD18yMDExvJs+jeFtZyfDnxfP6eOAFZ7+fxXPnmQQi4t/ySIlyfC2q4tBMC2d4XVTA30cAEqEqscOMmieOwXOhvwREQxi7Z0M1znpWBApnj3BoHv8MNgBgpmZDCLlFfQrCRcHhv9VO3qQQcDW9iWHri7D+xkzGAQzsxhe19fSJwpguSDtxq2XjFycDG86OxneT59Gv0SILRuCHEG3EGiaOPcZuDbctRFcB8AqI+6FrDSNAoYzEOMZ4Q7YuQEsQHcH9EtIgUMg7cFDsANgtaGG/2b6hACGA6C1Id0cMJoG+iWkLjIwMIh+rmwGxzlvO6QAKvQFJw3aAlaG54wTpKRc//9j6P1c2SxCVwewMjxnEGIIAwCfu+ioy0e8vgAAAABJRU5ErkJggg==');

  let info = [
    {
      numbers: '+375', 
      flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAABt0lEQVRIS2Ps4uevYGZjr/+aX8nGwMDAwDOpE0QxfHv18iWYQSPAysDwSpzhfzBjr6jYd0ZGJrYveeVgq+jlAJBdIEcwNrX0/wVxwo7vf8nw/z+D7Lp1YIdc5wAHCM3ADqjJCAcc2wcOcro7oE9MAhwC6Y8egx3wODiYARQSX7ZtoZnvQQbDQwDDAUFBYIvp5oDRNIAeBaDgfz93DsOL7Cw6p4EHD18yMDExvJs+jeFtZyfDnxfP6eOAFZ7+fxXPnmQQi4t/ySIlyfC2q4tBMC2d4XVTA30cAEqEqscOMmieOwXOhvwREQxi7Z0M1znpWBApnj3BoHv8MNgBgpmZDCLlFfQrCRcHhv9VO3qQQcDW9iWHri7D+xkzGAQzsxhe19fSJwpguSDtxq2XjFycDG86OxneT59Gv0SILRuCHEG3EGiaOPcZuDbctRFcB8AqI+6FrDSNAoYzEOMZ4Q7YuQEsQHcH9EtIgUMg7cFDsANgtaGG/2b6hACGA6C1Id0cMJoG+iWkLjIwMIh+rmwGxzlvO6QAKvQFJw3aAlaG54wTpKRc//9j6P1c2SxCVwewMjxnEGIIAwCfu+ioy0e8vgAAAABJRU5ErkJggg=='
    }, 
    {
      numbers:'+7',
      flag:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAo0lEQVRIS2PcuO+I+u07D/d/+/5DkoGOgIuT47mqirwjY8+spc/obTnMnyBHMDZNnPsfJFCcHkdH/zMw9M5cBLZv1AGjITDwIcCoWf+fhZWNwcotnq654NDW2ZBcMOqA0RAYDYEBD4HlAgzg2tBaRoKu5cDRJy8g5cCoA0ZDYDCEwGUGBgYdumYBhGXnGZdxM4gzsTHs+/+fQYvOjjj//zeDJwBxf34P7r+YUwAAAABJRU5ErkJggg=='
    },
    {
      numbers:'+48',
      flag:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAlklEQVRIS2PcuO+I+u07D/d/+/5DkoGOgIuT47mqirwjY8+spc/obTnMnyBHMDZNnPsfJFCcHkdH/zMw9M5cBLZv1AGjITAaAqMhMPAhMJmBAVwSeqlK07Uk3Hb7KaQkHHXAaAiMhsBoCAx4CMxkZnr26+8/uraIYUUuOzPTE8aNvLzqL759PfDr7z8JepbFIMvFubhdABr9hiLY/1hmAAAAAElFTkSuQmCC'
    },
    {
      numbers:'+380', 
      flag:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAkElEQVRIS2Nk8JstzvKfcc9/BgYdBjoCRgaGK38Y/7swsvjOuUxvy2H+BDmCkdl3zn+QgKa5Kx39z8Bw/eRusH2jDhgNgdEQGA2BgQ+BUw0M4JLQ1JuRriXh6a1gaxkYRx0wGgKjITAaAoMhBC4z0LlFDC9yGRnOM55oZRBn+s2wj4GBQYuuZTEjw/l/LAyeAIt/eV49symwAAAAAElFTkSuQmCC'
    },
    {
      numbers:'+370', 
      flag:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAYklEQVRYR2NkGGDAOMD2M4w6YDQEGD9sUw8ZyITI+HG7xv9RB4yGwICGwJ31OgObCPVy3EcdMBoCIzwEFqpbDGwIbJA3G3XAaAgMbAhMjTDfMqC14UBaDrJ7tFk+GgIDHgIAmVcsLny2L4UAAAAASUVORK5CYII='
    },
    {
      numbers:'+371', 
      flag:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAi0lEQVRIS2PsZhf0Zfz3bzYDI6M4Az3B//8v/zMxpTL2sPK/oLvlMI/+//+SsYdN4D+I76quSU//M+y+eR1s36gDRkNgNAQGPgSaJs79z87OxpAaHUrXcmDKvKWQcmDUAQMeAqN1wWgIjIbAaAgMaKOUgeEZI7hZzvBvDsN/RjG61kYMDM/+MzJmAABXiXXUUZYtcAAAAABJRU5ErkJggg=='
    }

];

let fun = (e)=>{
switch(Number(e.target.id)){

  case 1:setImageActive(info[0].flag);
  document.getElementById('inputPhone').value = info[0].numbers
  break;

  case 2:setImageActive(info[1].flag);
  document.getElementById('inputPhone').value = info[1].numbers
  break;

  case 3:setImageActive(info[2].flag);
  document.getElementById('inputPhone').value = info[2].numbers
  break;

  case 4:setImageActive(info[3].flag);
  document.getElementById('inputPhone').value = info[3].numbers
  break;

  case 5:setImageActive(info[4].flag);
  document.getElementById('inputPhone').value = info[4].numbers
  break;
  
  case 6:setImageActive(info[5].flag);
  document.getElementById('inputPhone').value = info[5].numbers
  break;
}
}

let fun1 = () =>{
  let str = document.getElementById('inputPhone').value;
 switch(str){
   case info[0].numbers:
    setImageActive(info[0].flag);
   break;
   case info[1].numbers:
    setImageActive(info[1].flag);
    break;
   case info[2].numbers:
      setImageActive(info[2].flag);
      break;
   case info[3].numbers:
      setImageActive(info[3].flag);
      break;
   case info[4].numbers:
      setImageActive(info[4].flag);
      break;
   case info[5].numbers:
       setImageActive(info[5].flag);
      break;
 }
};

//Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.

let fun2 = ()=>{
  let str = document.getElementById('inputPhone').value;

  let len =  str.length;

  if(str.substring(0,4) == info[0].numbers && len == 13){
    document.getElementById('inputPhone').value = str.substring(0,4)+"("+str.substring(4,6)+")"+str.substring(6,9)+"-"+str.substring(9, 11)+"-"+str.substring(11,13);
  }

  if(str.substring(0,2) == info[1].numbers && len == 12){
    document.getElementById('inputPhone').value = str.substring(0,2)+"("+str.substring(2,5)+")"+str.substring(5,8)+"-"+str.substring(8, 10)+"-"+str.substring(10,12);
  }

  if(str.substring(0,3) == info[2].numbers && len == 12){
    document.getElementById('inputPhone').value = str.substring(0,3)+"("+str.substring(3,6)+")"+str.substring(6,9)+"-"+str.substring(9, 12);
  }

  if(str.substring(0,4) == info[3].numbers && len == 13){
    document.getElementById('inputPhone').value = str.substring(0,4)+"("+str.substring(4,6)+")"+str.substring(6,9)+"-"+str.substring(9, 11)+"-"+str.substring(11,13);
  }
  
  if(str.substring(0,4) == info[5].numbers && len == 12){
    document.getElementById('inputPhone').value = str.substring(0,4)+" "+str.substring(4,8)+"-"+str.substring(8, 12);
  }

}

let text =  <input id='inputPhone' type='text' onInput={fun1} onChange={fun2}/>

function ted() {
  document.getElementById('list').classList.toggle('visib');
}

let fun3 =  ()=>{
  document.getElementById('inputPhone').value = "";
};

  return (
    <div>
      <div className='wrapper'>
        <h2>Введите ваш номер телефона: </h2>
        <div className='phoneArea'>
          <div className='flags' id='button' onClick={fun3} ><img className='flag' src={imageActive}/></div>
          <div>
            {text}
              <div className='unvisible' id='list' onClick={fun}>
                <div className='style' id='1'><img src={info[0].flag} className='fix'/><span>Беларусь({info[0].numbers})</span></div>
                <div className='style' id='2'><img src={info[1].flag} className='fix'/><span>Россия({info[1].numbers})</span></div>
                <div className='style' id='3'><img src={info[2].flag} className='fix'/><span>Польша({info[2].numbers})</span></div>
                <div className='style' id='4'><img src={info[3].flag} className='fix'/><span>Украина({info[3].numbers})</span></div>
                <div className='style' id='5'><img src={info[4].flag} className='fix'/><span>Литва({info[4].numbers})</span></div>
                <div className='style' id='6'><img src={info[5].flag} className='fix'/><span>Латвия({info[5].numbers})</span></div>
              </div>
            </div>
          <div id='btn' className='listButton' onClick={ted}></div>
        </div>
      </div>
    </div>
  );
}