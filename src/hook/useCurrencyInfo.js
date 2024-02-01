/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
// //custom hook which is return a realtime currency exchange data via fetching API 

// import { useEffect, useState } from "react";

// function useCurrencyInfo (currency) {
//     //useState for store API res and show  latest data in UI  
//     const [data , setData ] = useState({});
//     //useEffect : when currency will change , function will call , new data will come and state will updated via setData.
//     useEffect(()=>{
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res)=> res.json())
//         .then((res) => setData(res[currency]))
//     } , [currency])
//     console.log(data);
//     return data ;
// }

// export default useCurrencyInfo ;

// // import {useEffect, useState} from "react"


import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;