import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Ensure 2 digits
  const day = String(currentDate.getDate()-1).padStart(2, '0'); // Ensure 2 digits
  
  const date = `${year}-${month}-${day}`;

    let[data,setData] = useState({});
  
    useEffect(()=>{
  fetch(`https://${date}.currency-api.pages.dev/v1/currencies/${currency}.json`)
  .then((res)=>res.json())
  .then((res)=>setData(res[currency]));
},[currency])
  return data;
}

export default useCurrencyInfo;



