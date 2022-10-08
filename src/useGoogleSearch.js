import {useState,useEffect} from 'react'
import API_KEY from './keys';

const CONTEXT_KEY='3a9e490333c9cea5b';
const useGoogleSearch=(term)=> {
  const [data,setdata]=useState(null);
  useEffect(()=>{
       const fetchdata=async()=>{
              fetch(`
              https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}
`).then(res=>res.json()).then(result=>{setdata(result)})
       }
       fetchdata();
  },[term])

  return {data}
}

export default useGoogleSearch

