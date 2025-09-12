import { useState,useEffect } from 'react'
import Blog from './components/Blog'
import './App.css'

function App() {

  const [arr,setArr]=useState([])

  const main=async()=>{
    const res=await fetch("https://newsapi.org/v2/everything?q=tesla&from=2025-08-11&sortBy=publishedAt&apiKey=e71d935f77de45dc953bf2f66f617920")
    const data=await res.json();
    setArr(data.articles)
    console.log(data.articles);
  }

  useEffect(()=>{
    main();
  },[])

  return (
    <>
    <Blog></Blog>
    </>
  )
}

export default App
