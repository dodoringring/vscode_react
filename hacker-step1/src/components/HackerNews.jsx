const HackerNews = (props) => { //{newsList:Array(30)}원래 이렇게 되어 있었다. 기존의 자바스크립트보다 훨씬 더 데이터 셋과의 연계가 자유롭다.}
  const {newsList}=props;
  console.log(props);
  // console.log(props.newsList);//->구조분해할당이 된다.
  return (  
    <div>
      {/* [{},{}...] 맵으로 꺼낸다. */}
      {newsList && Object.keys(newsList).map(key=>( /* 태그 안에서 에로우 펑션은 () */
        <li>
          {newsList[key].id}/
          {newsList[key].title}/
          user : 👼{newsList[key].user}/
          comments_count : 👩‍🎓{newsList[key].comments_count}/
          time_ago:🧚‍♂️{newsList[key].time_ago}
         
        </li>
      ))}
    </div>
  );
}
 
export default HackerNews;