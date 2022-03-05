import React from "react";
import { Button, Input } from "semantic-ui-react";

//function으로 컴포넌트를 만드는 방식
function Login2() {
  return (
    <div>
      <Input
        label={{ icon: "asterisk" }}
        labelPosition="left corner"
        placeholder="아이디를 입력하세요."
      />
      &nbsp;
      <Button
        primary
        onClick={(e) => {
          console.log(e);
          alert(e.target.value);
        }}
      >
        로그인
      </Button>
    </div>
  );
}

//class로 컴포넌트를 만드는 방식
class Login extends React.Component {
  //Login state의 id인 값(입력값이 없음)
  constructor() {
    super();
    this.state = { id: "입력값이 없음" };
  }
  render() {
    return (
      <div>
        {/*onChange : Input으로 받은 value가 Login state에 새롭게 저장됨
          (내가 쓴 내용이 alert 창에 띄워진다는 뜻)*/}
        <Input
          label={{ icon: "asterisk" }}
          labelPosition="left corner"
          placeholder="아이디를 입력하세요."
          onChange={(e) => this.setState({ id: e.target.value })}
        />
        &nbsp;
        <Button
          primary
          onClick={(event) => {
            alert(this.state.id);
          }}
        >
          Login
        </Button>
        {/*e는 event의 e
        onClick이라는 이벤트가 발생한 target이 바로 Login Button
        value는 this.state의 id(입력값이 없음) */}
        {/*또는
          <Button primary value = {this.state.id} onClick = { (event) => {
            alert(event.target.value)
          } }> Login </Button>
        */}
      </div>
    );
  }
}

export default Login;
