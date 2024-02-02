"use client"
import React,{useState,useEffect} from 'react'
import NextJsQuestions from '../questions/nextJsQuestions';
import style from "./quiz-page.module.css"
const Page = () => {
 const [shuffledQuestions, setShuffledQuestions] = useState([]);
 useEffect(() => {
    const suffle=[... NextJsQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(suffle);
 },[])

 console.log(shuffledQuestions)
  return (
   <main className={style.main}>
    Quiz Page
   </main>
  )
}

export default Page;
