import React from 'react';
import {Button, Progress, Input} from 'semantic-ui-react'

function Login() {
  return(
    <div>
      <Input
        label={{ icon: 'asterisk' }}
        labelPosition='left corner'
        placeholder='아이디를 입력하세요.'
      />
      &nbsp;
      <Button primary> 로그인 </Button>
    </div>
  );
}

function App() {
  return (
    <div>
      <p>안녕하세요!</p>
      <button> 버튼1 </button>
      <Button color="red"> 버튼2 </Button>
      <Button primary> 알아보기 </Button>
      <Progress percent = {85} indicating />
      <Login/> //fuction Login()을 불러옴
    </div>
  );
}

export default App;
