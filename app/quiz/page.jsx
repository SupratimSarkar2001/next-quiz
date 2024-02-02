"use client"
import React, { useState, useEffect } from 'react'
import NextJsQuestions from '../questions/nextJsQuestions';
import style from "./quiz-page.module.css"
const Page = () => {
   const [shuffledQuestions, setShuffledQuestions] = useState([]);
   useEffect(() => {
      const suffle = [...NextJsQuestions].sort(() => Math.random() - 0.5);
      setShuffledQuestions(suffle);
   }, [])

   const[currentQuestion, setCurrentQuestion] = useState(0);
   const[selectedAnswer, setSelectedAnswer] = useState(null);
   const[score, setScore] = useState(0);

   const handleAnswer=(option)=>{
      setSelectedAnswer(option);
   }

   const handleNextQuestion=()=>{
      if (selectedAnswer === shuffledQuestions[currentQuestion].correctAnswer) {
         setScore(score + 1);
      }
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null);
   }

   if (shuffledQuestions.length === 0) {
      return (
         <main className={style.main}>
            <div>Loading...</div>
         </main>
      )
   }

   return (
      <main className={style.main}>
         <h1 className={style.text_h1}>Next.js Quiz</h1>
         <span className={style.text_span}>Question {currentQuestion + 1}/{shuffledQuestions.length}</span>
         <h3 className={style.text_h3}>{shuffledQuestions[currentQuestion].question}</h3>
         <ul className={style.tag_ul}>
            {shuffledQuestions[currentQuestion].options.map((option,index) => (
               <li className={`${style.tag_li} ${selectedAnswer === option ? style.selected : ''}`} key={index}  onClick={()=>handleAnswer(option)}>{option}</li>
            ))}
         </ul>
         {currentQuestion === shuffledQuestions.length - 1 ? (
            <button className={style.button_finish}>Finsh</button>
         ):(
            <button className={style.button_next} onClick={handleNextQuestion}>Next</button>
         )
         }
      </main>
   )
}

export default Page;
