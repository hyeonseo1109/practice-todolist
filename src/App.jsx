import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState(''); //과제에서는 id/content/time 총 3개의 속성을 가진 객체를 담는 배열이었으나,
                                          //여기서는 간단하게 content만 넣으니 문자열로 초기값 지정함.
  const add = () => {
    console.log("✅ add 함수 실행됨");
    fetch(`http://localhost:3000/todo`, {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
    },
      body: JSON.stringify({
        content: input
      })
    })
    .then(res => res.json())
    .then( (res) => {
      setInput('')
      console.log("📨 fetch 응답", res);
    })
    .catch(err => console.error('POST 에러:', err));
  };

  return (
    <>
      <input 
        value={input}
        onChange={(e) => 
          setInput(e.target.value)}  
        
        //setInput을 이 입력값으로 하면 input상태가 모두 얘 하나로 바뀌는 게 아니라 왜 추가만 되는 걸까?
        //입력창에 넣어서 버튼을 누르면
        //input에 입력값이 저장이 되고 버튼을 누르면서 handleadd함수가 실행되고 그때 서버로 보내지는 거. 하나하나씩
        //input에 여러 리스트가 통틀어서 저장돼있는게 아니라 하나씩 거쳐가는 것.
      />
      <button onClick={add}>추가</button>
    </>
  );
}

export default App;
