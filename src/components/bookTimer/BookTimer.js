import React, { useState, useEffect, useContext } from "react";

import {BookContext} from "../book/BookProvider"




export const Timer = (props) => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  const [recordMinute, setRecordMinute] = useState({})
  const [recordSecond, setRecordSecond] = useState({})


  const {addPagesToLibraryBook} = useContext(BookContext) || {}
  const {userBooks, getUserBooks} = useContext(BookContext)

  

  useEffect(() => {
      
  })

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);
        


        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  const stopTimer = () =>{
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  }
 //gets current state of the second and minute counter, combines them total seconds that is converted to minutes
 //Props if passed from the LibraryBookDetail component and used here to get the current library book
 //addPagesToLibraryBook is an edit function that modifys the userbook object and adds the minutes read to the existing 
 //userbook object
 
  const recordMinutes = () => {
      setIsActive(false)
      setRecordSecond(second)
      setRecordMinute(minute)

        const recordMinute = parseInt(minute * 60) //converting everything to seconds
        const recordSecond = parseInt(second) //already seconds
        const totalSeconds = Math.ceil(recordMinute + recordSecond / 60)
        
        const currentLibraryBook = parseInt(props.match.params.userbookId)
        const toUpdate = userBooks.find(ub => ub.id === currentLibraryBook)
        
        addPagesToLibraryBook({
            minutesRead : toUpdate.minutesRead + totalSeconds,
            id : toUpdate.id,
            pagesRead : toUpdate.pagesRead,
            userId : toUpdate.userId,
            bookId : toUpdate.bookId,
            favorite : toUpdate.favorite

        }).then(props.history.push(`/library/${currentLibraryBook}`))

        
      
      
  }

  return (
    <div className="container">
      <div className="time">
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setIsActive(!isActive)} className="start">
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={stopTimer} className="reset">
          Reset
        </button>
        <button type="submit"
        onClick={e => {
            e.preventDefault()
            recordMinutes()
        }}
        >
            Record Minutes
        </button>
      </div>
    </div>
  );
};

