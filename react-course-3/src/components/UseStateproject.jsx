import React from 'react'
import { useState } from 'react'
//useState hooks are built in react hook that allows you declare and track the state variable of your component it also enable you to manage the state of a program or component 
//Whenever the state variable undergoes a chane react rerenders the path of that program

const UseStateproject = () => {

const [color, setColor] = useState('#ccc');

const getRandomColor = ()=> {
  const random = `#${Math.floor(Math.random() * 16777215) .toString(16)}`;
  return random
};

  const changeColor = () => {
    const randomColor = getRandomColor();
    console.log('Color Change With', randomColor);
    setColor(randomColor)
    
  }

  return (
    <div className='colorize bg-sky-950 w-full min-h-screen flex flex-col items-center justify-center gap-3'>
       <div className='container rounded-xl border border-indigo-950 md:w-[400px] md:h-[400px] h-[200px] w-[50%] p-3 ' style={{backgroundColor: color}}>{color}

       </div>

       <button className='py-4 px-2 bg-sky-600 rounded-xl cursor-pointer hover:bg-sky-800 text-xl text-white' onClick={changeColor}>Change Color</button>
    </div>
  )
} 



export default UseStateproject



//There are two types of functions the stateful functions and the stateless functions
// Pure functions are functions ar fns that take any input and return a similar output.
// Stateful components are components that keep track of the state of a component i.e they manage the changes the state of a component undergoes
// A  reactside effect is any code or code logic that causes a stateless func to always reyurn a different output from it's input
// A react Hook is a component that stores the statefull logic and basically every other code that can change the state of your component
// in a nutshell react hooks are functions that we can ue to seperate the reusable parts from an entire functional component. It can be stateful as weel as manage react side effects.
// React Hooks have certain capabilities that enable access the state of a component.
//