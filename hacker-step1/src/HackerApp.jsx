import axios from "axios";
import { useEffect, useState } from "react";
import HackerNews from "./components/HackerNews";

const HackerApp = () => {
  const [newsList,setNewsList]=useState([]);/* 배열은 [] 객체는{} */
  const NEWS_URL= "https://api.hnpwa.com/v0/news/1.json"; /* 이 자리에 jsp 스프링이 들어간다. */
  useEffect(()=>{
    axios.get(NEWS_URL).then(response=>{
      console.log(response.data)
      console.log(newsList);
      //6번에서 선언한 useState훅에 데이터 초기화함
      setNewsList(response.data)
    })
    }, [])
    return ( 
      <HackerNews newsList={newsList}/>
  );
}

export default HackerApp;

