import React from "react";
import firebase from "firebase/compat/app";
import {
  Image,
  Divider,
  Header,
  Icon,
  Button,
  Grid,
  Menu,
} from "semantic-ui-react";
import Buttons from "./buttons.js";
import Comments from "./comments.js";
import auth from "./fb.js";
import sunbaGuitar from "./img/sunbaGuitar.jpeg";

var provider = new firebase.auth.GoogleAuthProvider();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "Stranger",
    };
  }
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "50px",
            margin: 0,
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          Soondol's Page
        </h1>

        <Menu inverted widths={3} style={{ margin: 0 }}>
          <Menu.Item>MENU</Menu.Item>
          <Menu.Item>{`Welcome, ${this.state.userName}!`}</Menu.Item>
          <Menu.Item
            onClick={() => {
              firebase
                .auth()
                .signInWithPopup(provider)
                .then((result) => {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  var token = result.credential.accessToken;
                  // The signed-in user info.
                  var user = result.user;
                  this.setState({ userName: user.displayName });
                  // ...
                })
                .catch((error) => {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // The email of the user's account used.
                  var email = error.email;
                  // The firebase.auth.AuthCredential type that was used.
                  var credential = error.credential;
                  // ...
                });
            }}
          >
            LOGIN
          </Menu.Item>
        </Menu>
        {/*
          userName을 Welcome에 보여주는 또다른 방법
          <Menu.Item
            onClick={() => {
              firebase
                .auth()
                .signInWithPopup(provider)
                .then((result) => {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  var token = result.credential.accessToken;
                  // The signed-in user info.
                  var user = result.user;
                  return user.displayName;
                  // ...
                })
                .then((result) => this.setState({ userName: result }))
                .catch((error) => {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // The email of the user's account used.
                  var email = error.email;
                  // The firebase.auth.AuthCredential type that was used.
                  var credential = error.credential;
                  // ...
                });
            }}
          >
            LOGIN
          </Menu.Item>
        */}

        <br />
        <Divider horizontal>
          <Header as="h5" style={{ color: "white" }}>
            <Icon name="images" />
            Photos
          </Header>
        </Divider>
        <br />

        <Grid centered>
          <Grid.Row>
            <Image src={sunbaGuitar} style={{ width: "400px" }} centered />
          </Grid.Row>
          <Grid.Row>
            <Buttons />
          </Grid.Row>
        </Grid>
        <br />
        <br />

        <Comments userNameComment = {this.state.userName} />

        <br />
        <Divider horizontal>
          <Header as="h5" style={{ color: "grey" }}>
            <Icon name="hand point down outline" />
            Contact Me!
          </Header>
        </Divider>
        <br />

        <div>
          <Grid centered>
            <Button color="facebook" onClick={() => alert("준비중입니다.")}>
              <Icon name="facebook" /> Facebook
            </Button>
            <Button color="twitter" onClick={() => alert("준비중입니다.")}>
              <Icon name="twitter" /> Twitter
            </Button>
            <Button color="google plus" onClick={() => alert("준비중입니다.")}>
              <Icon name="google" /> Google
            </Button>
            <Button
              color="instagram"
              onClick={() =>
                window.open("https://www.instagram.com/seo_kyung_tell/")
              }
            >
              <Icon name="instagram" /> Instagram
            </Button>
            <Button
              color="youtube"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCXI8uJLT7ukmrBMbSBk9puQ/featured"
                )
              }
            >
              <Icon name="youtube" /> YouTube
            </Button>
          </Grid>
        </div>
        <br />
      </div>
    );
  }
}

export default App;
