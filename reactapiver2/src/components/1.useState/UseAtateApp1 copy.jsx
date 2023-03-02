import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const UseStateApp1 = () => {
  console.log('UsestateApp1');//무조건 한번 출력됨
  let nums=[1,2,3];
  let sample=[
    {empno:7566,ename:"이은재"},
    {empno:7566,ename:"김도희"},
    {empno:7566,ename:"목정윤"}
  ];
  const [result2, setResult2]=useState(()=>{
    console.log('useState');//한번은 출력됨-딱 한번만 호출됨
    return 0
  })/* [XXX,XXXX]앞이 변수 뒤가 함수. 함수대로 변수 변화시킴. */
  
  let result=0;
  const plus=()=>{
    console.log(`plus${result}`);
    result++
    //setReault2가 실행될때 다시 return이 실행이된다.(다시 그려짐 그러니까 1씩 증가되는 숫자를 확인 가능함)
    setResult2(result2+1);
  }


  return (
    <>
      <h2>useState복습-1</h2>
      <Button onClick={plus}>더하기</Button>
      <h2>덧셈 결과 출력{result}</h2>
      <h2>덧셈 결과 출력{result2}</h2>
      <hr />
      {nums.map((num,index)=>(
        <h3 key={index}>{num}</h3>
      ))}
      <hr/>
      {sample.map((item,index)=>{
        <h3 key={index}>{item},{item.empno},{item.ename}</h3>
      })}
    </>
  )
  
}

export default UseStateApp1

/*
상태값이 변할때마다 렌더링이 되도록 하고싶다면 useState훅을 사용할것

*/ 
