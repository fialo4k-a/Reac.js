import React from 'react';
import './SortComp.css';
import{ useState } from 'react';

export default function SortComp() {
  
  const [data, setData] = useState( 
     [ 
    {
      name:'Butter', 
      price:0.9,
      in_Stock:0
    },
    {
      name:'Cheese', 
      price:4.9,
      in_Stock:2
    },
    {
      name:'Fanta', 
      price:3.9,
      in_Stock:20
    },
    {
      name:'Milk', 
      price:2.95,
      in_Stock:1
    },
    {
      name:'Cake', 
      price:6.9,
      in_Stock:0
    }, 
    {
      name:'Apple', 
      price:1.57,
      in_Stock:234
    }
  ]);

  const[state, Setstate] =  useState(true);

  const sortData = (item)=>{
    const CopyDate =  data.concat();
    let sortData;

    if(state){
      sortData = CopyDate.sort((a, b)=>{
        return a[item] > b[item] ?  1: -1;
      });
    }
      sortData = CopyDate.reverse((a, b)=>{
        return a[item] > b[item] ?  1 : -1;
      });

    Setstate(!state);
    setData(sortData);
  };

  function color(param) {
    let colorList;
    if(param > 0 && param < 3)
    colorList = { backgroundColor :"yellow"};
    else if(param === 0 )
    colorList = {backgroundColor :"red"};
    return colorList;
  };

  return (
    <div className='wrapperTbl'>
      <table>
        <thead>
        <tr id='headerTbl' className='headerTable'>
          <td onClick={()=>sortData("name") }>Name</td>
          <td onClick={()=>sortData("price")}>Price</td>
          <td onClick={()=>sortData("in_Stock")}>In_Stock</td>
        </tr>
        </thead>
        <tbody>
          {data.map((item)=>(
          <tr>
            <td >{item.name}</td>
            <td >{item.price}</td>
            <td style={color(item.in_Stock)}>{item.in_Stock}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
