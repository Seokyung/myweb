import React from "react";
import { Image, Divider, Header, Icon, Button, Grid } from "semantic-ui-react";
import Comments from "./comments.js";
import sunbaGuitar from "./img/sunbaGuitar.jpeg";

function App() {
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Image src={sunbaGuitar} style={{ width: "400px" }} centered />
        </Grid.Row>
        <Grid.Row>
          <Button
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "0",
            }}
          />
          <Button
            basic
            color="blue"
            content="Share"
            icon="fork"
            label={{
              as: "a",
              basic: true,
              color: "blue",
              pointing: "left",
              content: "0",
            }}
          />
        </Grid.Row>
      </Grid>
      <br />
      <br />

      <Comments />

      <br />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="share" />
          Share With
        </Header>
      </Divider>
      <br />

      <div>
        <Grid centered>
          <Button color="facebook">
            <Icon name="facebook" /> Facebook
          </Button>
          <Button color="twitter">
            <Icon name="twitter" /> Twitter
          </Button>
          <Button color="google plus">
            <Icon name="google" /> Google
          </Button>
          <Button color="instagram">
            <Icon name="instagram" /> Instagram
          </Button>
          <Button color="youtube">
            <Icon name="youtube" /> YouTube
          </Button>
        </Grid>
      </div>
      <br />
    </div>
  );
}

export default App;
