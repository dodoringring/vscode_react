import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Sub1 from './Sub1'

const UseEffectApp1=()=>{
  const [data,setData]=useState(0)
  const plus=()=>{
    console.log('plus');
    let resData=5
    setData(data+1)
  }
  useEffect(()=>{
    console.log('effect');
  },[data])/* 최초한번만 실행이 되게 하려면 두번째에 빈 배열 넣어라 */
  return(
    <>
    <h3>데이터:{data}</h3>
    <Button onClick={plus}>더하기</Button>
    <Sub1/>
    </>
  )
}
export default  UseEffectApp1