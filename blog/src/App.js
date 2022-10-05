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
  let [따봉, 따봉변경] = useState(글제목.map(function(a){
    return 0
  }));
  {/* 글제목만큼 따봉 State 생성 -> [0, 0, 0] */}

  function 함수(){
    console.log(1);
  }

  let [modal, setModal] = useState(false);

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

      {/* 
      <div className="list">
        onClick = {} 안에는 함수 이름만 넣어주어야 함
        /* 문자도 동일함 1만 '반가워'로 변경해주면 됨
        <h4> { 글제목[0] } <span onClick = {()=> { 따봉변경(따봉+1) }}> 👍 </span> { 따봉 } </h4>
        이렇게 함수 만드는 문법을 바로 어줘도 상관없음! (세개 모두 동일한 코드)
        span onClick = { function(){ console.log(1) } } 
        span onClick = { () => { console.log(1)} }
        <p> 2월 17일 발행 </p>

        숙제 2: 버튼 누르면 첫번째 게시물 제목이 '여자코트 추천'으로 변경되게 하기
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
      </div>
      
      <div className="list">
        <h4> { 글제목[1] }</h4>
        <p> 2월 17일 발행 </p>
      </div>
      
      숙제4: 제목 한 번 누르면 Modal창 띄우기, 한 번 더 누르면 Modal창 가리기
      <div className="list">
        <h4 onClick={()=>{ 
          modal == false ? setModal(true) : setModal(false)
         }}> { 글제목[2] }</h4>
        <p> 2월 17일 발행 </p>
      </div>
      
      <Modal/> 로도 사용 가능함

      동적 UI(ex. 탭, 모달창, 툴팁, 경고문 등) -> 
        1. html, CSS로 미리 디자인 완성
        2. UI의 현재 상태 State로 미리 저장해두기
        3. State의 상태에 따라 UI가 어떻게 보일지 작성
          -> 제목을 누를 때마다 모달 창 기능이 펼쳐지도록 구현해보기
      html에는 if문이 적용되지 않으므로 삼항연산자를 if문으로 사용
          null: 비어있는 html 용도로 자주 사용
      {
        modal == true ? <Modal/> : null
      }
      */}

      {/* Map 함수를 이용해 html 반복하기
          숙제5: Map 함수를 이용해 글을 띄우고 글마다 개별적인 좋아요 갯수 기록하기 */}
      {
        글제목.map(function(a, i){
          return (
            <div className="list" key = {i} >
              <h4 onClick = { ()=> {setModal(!modal)} } > {글제목[i]} </h4>
              <span onClick = {()=> { 
                let copy = [...따봉];
                copy[i] = 따봉[i]+1;
                따봉변경(copy);
               }}> 👍 </span> { 따봉[i] }
              <p> 2월 17일 발행 </p>
            </div>
          )
        })
        // 위와  동일코드
        // 글제목.map(function(a){
        //   return (
        //     <div className="list">
        //       <h4> { a }</h4>
        //       <p> 2월 17일 발행 </p>
        //     </div>
        //   )
        // }) 
      }
      {
        modal == true ? <Modal 글제목 = {글제목} 글제목변경 = {글제목변경}/> : null
      }

    </div>
  );
}

{/* 컴포넌트 만들기
    숙제: 글 수정 버튼을 누르면 첫 글 제목이 '여자코트 추천'으로 변경되야 함
    보너스 숙제: Modal 안의 글 제목과 글 목록의 글 제목 일치시키기 */}
    function Modal(props){
      return (
        <div>
          {
            props.글제목.map(function(a){
              return(
                <div  className = "modal" style={{background : props.color}} key={a}>
                  <h4> {a} </h4>
                  <p> 날짜 </p>
                  <p> 상세 내용 </p>
                  <button onClick={ ()=> {
                    let update_copy = [...props.글제목]
                    update_copy[0] = '여자코트 추천'
                    props.글제목변경(update_copy)
                  }}> 글수정 </button>
                </div>
              )
            })
          }
        </div>
      )
    }

export default App;
