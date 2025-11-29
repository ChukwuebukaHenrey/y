import React, { useState } from 'react'


const CounterApp = () => {
  // let count = 0
  // const counter = ()=> {
  //   count++;
  //   console.log(count);
  // }


  let initialValue = 0
  
  const [count, setCount] = useState(initialValue)

  const increase = ()=> {
    setCount((prev) => prev + 1)
    console.log("Count is now: ", count);
    
  }
  
  const decrease = ()=> {
    setCount(count - 1)
    console.log("Count is now: ", count);
  }


  return (
    <div className='h-screen  bg-blue-950 w-full justify-center items-center flex font-bold text-white'>
      <div className='sm:w-[400px] w-[90%] bg-blue-500/40 justify-center items-center rounded-2xl flex flex-col gap-4 p-4 md:py-10 
          md:px-7 lg:px-10'>
        <h1 className='font-bold sm:text-3xl text-lg'>Click to Count</h1>
        <div className='flex items-center justify-center gap-3 mx-auto'>
          <button className='bg-blue-400/45 rounded py-5 px-4 font-bold cursor-pointer' onClick={increase}>+</button>
          <h1 className='text-xl px-1'>{count}</h1>
          <button className='bg-blue-400/45 rounded py-5 px-4 font-bold cursor-pointer' onClick={decrease}>-</button>
        </div>
      </div>
    </div>
  )
}

export default CounterApp












// export default function CounterPage() {
//   let count = 0;

//   function handleIncrement() {
//     count++;
//     console.log("count is: ", count);
//   }

//   function handleDecrement() {
//     count--;
//     console.log("count is: ", count);
//   }

//   return (
//     <div className="h-screen bg-sky-950  text-white flex justify-center items-center">
//       <div className="bg-sky-50/10 w-[90%] max-w-[300px] rounded-2xl sm:p-10 p-4 font-bold">
//         <h1 className="xl:text-2xl lg:text-xl text-lg text-center">
//           Click to Count
//         </h1>

//         <div className="flex gap-4 justify-center items-center">
//           {/* Increment */}
//           <button
//             className="bg-white/10 hover:bg-white/20 text-white rounded-lg p-4 mt-5 md:text-2xl text-lg cursor-pointer"
//             onClick={handleIncrement}
//           >
//             +
//           </button>

//           {/* Count */}
//           <p className="text-2xl font-bold text-center mt-5">{count}</p>

//           {/* Decrement */}
//           <button
//             className="bg-white/10 hover:bg-white/20 text-white rounded-lg p-4 mt-5 md:text-2xl text-lg cursor-pointer"
//             onClick={handleDecrement}
//           >
//             -
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// export default function CounterPage() {
//   // const [state, setState] = useState(initialValue);
//   // state = 0;
//   // setState(0);

//   const [count, setCount] = useState(0);

//   function handleIncrement() {
//     setCount((prevCount) => prevCount + 1);
//     setCount((prevCount) => prevCount + 1);
//     setCount((prevCount) => prevCount + 1);
//   }

//   function handleDecrement() {
//     setCount(count - 1);
//   }

//   return (
//     <div className="h-screen bg-sky-950  text-white flex justify-center items-center">
//       <div className="bg-sky-50/10 w-[90%] max-w-[300px] rounded-2xl sm:p-10 p-4 font-bold">
//         <h1 className="xl:text-2xl lg:text-xl text-lg text-center">
//           Click to Count
//         </h1>

//         <div className="flex gap-4 justify-center items-center">
//           {/* Increment */}
//           <button
//             className="bg-white/10 hover:bg-white/20 text-white rounded-lg p-4 mt-5 md:text-2xl text-lg cursor-pointer"
//             onClick={handleIncrement}
//           >
//             +
//           </button>

//           {/* Count */}
//           <p className="text-2xl font-bold text-center mt-5">{count}</p>

//           {/* Decrement */}
//           <button
//             className="bg-white/10 hover:bg-white/20 text-white rounded-lg p-4 mt-5 md:text-2xl text-lg cursor-pointer"
//             onClick={handleDecrement}
//           >
//             -
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
//sm:bg-red-950 md:bg-blue-950 lg:bg-yellow-950 xl:bg-green-950 2xl:bg-orange-950