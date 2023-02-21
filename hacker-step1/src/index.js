import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HackerApp from './HackerApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
{/*   <react.StrincMode>두번찍히게 한다.  <App /> */}
  <HackerApp/>
  {/* 태그를 만들어서 쓸 수 있다. 사용자 정의 태그 */}
  </>
);
/* HackerNews데이터를 axios가 가져올때 <react.StrincMode>있으면 두번 가져오니까 빈태그로 변경하였다.
여기서 빈 태그는 Fragment를 의미함*/
