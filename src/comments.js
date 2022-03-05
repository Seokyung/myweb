import React from "react";
import {
  Grid,
  Comment,
  Form,
  Button,
  Divider,
  Header,
  Icon,
} from "semantic-ui-react";
import "./comments.css";
import userIcon from "./img/user.png";

class Comments extends React.Component {
  render() {
    return (
      <Grid centered>
        <div id="commentCenter">
          <Comment.Group>
            <Divider horizontal>
              <Header as="h3">
                <Icon name="comments" />
                Comments
              </Header>
            </Divider>

            <Comment>
              <Comment.Avatar src={userIcon} />
              <Comment.Content>
                <Comment.Author as="a">순돌</Comment.Author>
                <Comment.Metadata>
                  <div>오늘 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>레오 간지 개쩌러</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>답글 달기</Comment.Action>
                </Comment.Actions>
                <Form reply>
                  <Form.TextArea
                    style={{ width: "550px", minHeight: "100px" }}
                  />
                  <Button
                    content="Add Reply"
                    labelPosition="left"
                    icon="edit"
                    primary
                  />
                </Form>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </div>
      </Grid>
    );
  }
}

export default Comments;
