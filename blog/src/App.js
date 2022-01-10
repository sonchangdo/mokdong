/* esLint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목,글제목변경] = useState(['자바스크립트','리액트','제이쿼리']);
  let [따봉,따봉변경] = useState(0);

  let [modal,modal변경] = useState(false);
  let [누른제목,누른제목변경]= useState(0);
  let [입력값,입력값변경] = useState(''); 



  let posts = '목동 고기 맛집';     
  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = "타입스크립트"
    글제목변경(newArray);
  }

  function 정렬바꾸기(){
    var newArray2 = [...글제목];
    console.log(newArray2)
    글제목변경(newArray2.sort());
  }

  function modal변경함수(){
    var newModal = [...modal];
    newModal = true;
    modal변경(true);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <button onClick={ 정렬바꾸기 }>정렬바꾸기</button>
      {
        글제목.map((글,idx)=>{
          return (
            <div className="list" key={idx}>
            <h3 onClick={()=>{누른제목변경(idx)}}> {글}<span onClick={()=>{ 따봉변경(따봉+1) }}>👍🏻</span>{따봉}</h3>
            <p>2월 17일 발행</p>
            <hr/>
          </div>
          )
        })
      }

      <div className="publish">
        <input onChange={(e)=>{ 입력값변경(e.target.value)}}/>
        <button onClick={()=>{
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경(arrayCopy) 
        }}>저장</button>
      </div>

      <button onClick={()=>{modal변경(!modal)}}>click me</button>
      {
        modal == true
        ? <Modal 글제목={글제목} 누른제목={누른제목}/>
        : null
      }
    </div>
  );
}

function Modal(props){
  return(
  <div className="modal">
        <h2>{props.글제목[props.누른제목]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
  </div>
  )
}

export default App;
