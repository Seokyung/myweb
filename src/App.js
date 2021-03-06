import React from "react";
import { db, auth } from "./fb.js";
import _ from "lodash";
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
import VisitorsModal from "./modal.js";
import sunbaGuitar from "./img/sunbaGuitar.jpeg";

var provider = new firebase.auth.GoogleAuthProvider();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "Stranger",
      isModalOpen: false,
      visitors: [],
    };
  }

  componentDidMount = () => {
    db.collection("Basic")
      .doc("F9ynrM8QgwWt4LcEZ8aK")
      .get()
      .then((res) => this.setState({ visitors: res.data().visitors }));
  };

  toggleModal = () =>
    this.setState((prevState) => {
      return { isModalOpen: !prevState.isModalOpen };
    });

  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <VisitorsModal
          isOpen={this.state.isModalOpen}
          closeModal={this.toggleModal}
          visitorsList={this.state.visitors}
        />
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
                  return user.displayName;
                  // ...
                })
                .then((result) => {
                  let duplicate = "";
                  duplicate = _.find(
                    this.state.visitors,
                    (name) => name == result
                  );
                  if (!duplicate) {
                    db.collection("Basic")
                      .doc("F9ynrM8QgwWt4LcEZ8aK")
                      .update({ visitors: [...this.state.visitors, result] })
                      .then((res) =>
                        this.setState((prev) => {
                          return {
                            userName: result,
                            visitors: [...prev.visitors, result],
                          };
                        })
                      );
                  } else {
                    this.setState({ userName: result });
                  }
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
          userName??? Welcome??? ???????????? ????????? ??????
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
            <Buttons
              openModal={this.toggleModal}
              visitors={this.state.visitors.length}
            />
          </Grid.Row>
        </Grid>
        <br />
        <br />

        <Grid centered columns={3}>
          <Grid.Column>
            <Comments userNameComment={this.state.userName} />
          </Grid.Column>
        </Grid>

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
            <Button color="facebook" onClick={() => alert("??????????????????.")}>
              <Icon name="facebook" /> Facebook
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button color="twitter" onClick={() => alert("??????????????????.")}>
              <Icon name="twitter" /> Twitter
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button color="google plus" onClick={() => alert("??????????????????.")}>
              <Icon name="google" /> Google
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              color="instagram"
              onClick={() =>
                window.open("https://www.instagram.com/seo_kyung_tell/")
              }
            >
              <Icon name="instagram" /> Instagram
            </Button>
            &nbsp;&nbsp;&nbsp;
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
        <div
          style={{ paddingTop: "50px", paddingBottom: "40px" }}
        >
          <p
            style={{ color: "Grey", textAlign: "center", fontSize: "12px" }}
          >
            Copyright 2022 by SKJ. All Rights Reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
