/* eslint-disable */  // 안쓰는거 있다고 하는 경고 메세지 없애준다.
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const post = '강남 우동 맛집';
  const [제목,수정] = useState(['남자 코트 추천','강남 맛집 추천','자바스크립트 마스터하기']); // state 쓰는이유 ? 재랜더링 ! 자주 내용 바뀌는거에 쓰도록한다.
  const [modal, setModal] = useState(false);
  const [따봉,따봉수정] = useState(0);
  const [title,setTitle] = useState(2);
  const [입력값, 입력값변경] = useState('');


  return (    // jsx : js에서 html 사용하게하는 라이브러리
    <div className="App">  
      <div className="black-nav">
        <h4 style={{color:'red', fontSize : '30px'}}>블로그임</h4>
      </div>

      {
        제목.map((a,i) => {
      return(
        <div className='list' key={i}>
          <h4 onClick={() => { setModal(true); setTitle(i) }}>{제목[i]} 
          <span onClick={ (e) => { 따봉수정(따봉+1)}  }>👍
          </span> {따봉} </h4>
          <p>2월 17일 발행</p>
        </div> 
        )
      })
    }
    <input onChange={ (e) => 입력값변경(e.target.value) } />
    <button onClick={ () => {const 추가 = 제목.push(입력값)} }>버튼임</button>

    {modal === true ? <Modal text = {제목} title = {title} /> : null } 
    </div>
  );

}

const Modal = (props) =>  { /// 이것이 바로 컴포넌트    , // probs 부모에서 자식에게 전송만 가능.
  return (
  <div className='modal'>
  <h4>{props.text[props.title]}</h4>
  <p>날짜</p>
  <p>상세내용</p>

  </div>
  )
}

export default App;
