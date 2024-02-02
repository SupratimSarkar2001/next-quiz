"use client"
import React, { useState, useEffect } from 'react'
import NextJsQuestions from '../questions/nextJsQuestions';
import style from "./quiz-page.module.css"
import Image from 'next/image';
import Link from 'next/link';
const Page = () => {
   const [shuffledQuestions, setShuffledQuestions] = useState([]);
   useEffect(() => {
      const suffle = [...NextJsQuestions].sort(() => Math.random() - 0.5);
      setShuffledQuestions(suffle);
   }, [])

   const[currentQuestion, setCurrentQuestion] = useState(0);
   const[selectedAnswer, setSelectedAnswer] = useState(null);
   const[score, setScore] = useState(0);
   const[quizOver, setQuizOver] = useState(false);

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

   if (quizOver) {
      return (
         <main className={style.main}>
            <h1 className={style.text_h1}>Quiz Over</h1>
            <Image src="/achive.jpg" width={300} height={300} alt="Quiz Over" />
            <h3 className={style.text_h3}>You scored {score} out of {shuffledQuestions.length}</h3>
            <Link className={style.button_home} href={"/"}>Home</Link>
         </main>
      );
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
            <button className={style.button_finish} onClick={() => setQuizOver(true)}>Finsh</button>
         ):(
            <button className={style.button_next} onClick={handleNextQuestion}>Next</button>
         )
         }
      </main>
   )
}

export default Page;
