/* eslint-disable */
{/* Lint 끄는 기능 -> WARNING 메시지 끌 수 있음 */}

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

{/* 실은 function App도 컴포넌트인 것! */}
function App() {

  let post = '강남 우동 맛집';
  {/* 아래는 html에서 변수 문법을 사용할 때 원래 코드 
  document.querySelector('h4').innerHTML = post;
  */}
  let [a, b] = useState('남자 코트 추천');
  let [logo, setLogo] = useState('ReactBlog')

  {/* 숙제 1: state로 글 제목 설정하고, 블로그 글 만들어오기 */}
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학'])

  {/* 따봉: 실제 State | 따봉변경: State 변경 함수(state 변경 함수를 사용해야 html 재렌더링도 잘 됨) */}
  let [따봉, 따봉변경] = useState(0);
  function 함수(){
    console.log(1);
  }

  return (
    <div className="App"> {/* html이 아니라 JSX(.js 파일에서 쓰는 html 대용품) 문법임 */}
      {/* 상단 메뉴 만들기(주석은 이렇게 다는 겁니당!) */}
      <div className="black-nav"> {/* div: 박스 하나 만들어줄 때 */}
        <h4 style={ {color:'red', fontsize: '16px'} }> {logo} </h4>
      </div>

      {/* 숙제 3: 버튼 누르면 글 제목 가나다순 정렬하기 */}
      <button onClick={ ()=> {
        let sort_copy = [...글제목];
        sort_copy.sort();
        console.log(sort_copy);
        글제목변경(sort_copy);
      }}>
        글 제목 가나다순 정렬하기!
      </button>

      <div className="list">
        { /* onClick = {} 안에는 함수 이름만 넣어주어야 함 */}
        { /* 문자도 동일함 1만 '반가워'로 변경해주면 됨 */}
        <h4> { 글제목[0] } <span onClick = {()=> { 따봉변경(따봉+1) }}> 👍 </span> { 따봉 } </h4>
        { /* 이렇게 함수 만드는 문법을 바로 어줘도 상관없음! (세개 모두 동일한 코드)
        span onClick = { function(){ console.log(1) } } 
        span onClick = { () => { console.log(1)} } */}
        <p> 2월 17일 발행 </p>

        {/* 숙제 2: 버튼 누르면 첫번째 게시물 제목이 '여자코트 추천'으로 변경되게 하기 */}
        <button onClick = {()=> { 글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬 독학']) }}> 숙제버튼 </button>
        {/* 이렇게도 가능합니당.
        <button onClick = {()=> {
          글제목[0] = '여자코트 추천';
        }}

        하지만, 3. (참고) array/object 다룰 때는 원본은 그대로 보존하는 것이 좋음! (원본까지 바꾸지 말자는 의미!!)
        button onClick= {()=> {
	        let copy = [...글제목];
          copy[0] = '여자코트 추천'
          글제목변경(copy);
        }
        */}
      </div>

      {/* 하지만, 컴포넌트는 state를 가져다쓸 때 문제가 된다. */}
      <div className="list">
        <h4> { 글제목[1] }</h4>
        <p> 2월 17일 발행 </p>
      </div>

      <div className="list">
        <h4> { 글제목[2] }</h4>
        <p> 2월 17일 발행 </p>
      </div>
      
      {/* <Modal/> 로도 사용 가능함 */}
      <Modal></Modal>

    </div>
  );
}

{/* 컴포넌트 만들기 */}
function Modal(){
  return (
    <div className = "modal">
        <h4> 제목 </h4>
        <p> 날짜 </p> 
        <p> 상세 내용 </p>
    </div>
  )
}

export default App;
