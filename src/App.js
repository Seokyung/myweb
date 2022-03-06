import React from "react";
import {
  Image,
  Divider,
  Header,
  Icon,
  Button,
  Grid,
  Input,
  Menu,
} from "semantic-ui-react";
import Buttons from "./buttons.js";
import Comments from "./comments.js";
import sunbaGuitar from "./img/sunbaGuitar.jpeg";

function App() {
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

      <Menu inverted widths={3} style={{margin:0}}>
        <Menu.Item>MENU</Menu.Item>
        <Menu.Item>HOME</Menu.Item>
        <Menu.Item>LOGIN</Menu.Item>
      </Menu>

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

      <Comments />

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

export default App;
