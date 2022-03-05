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

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Avatar src={userIcon} />
      <Comment.Content>
        <Comment.Author as="a">순돌</Comment.Author>
        <Comment.Metadata>
          <div>오늘 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>{detail.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
      commentsList: [],
    };
  }

  render() {
    console.log(this.state.commentsList);
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

            {this.state.commentsList.map((comments) => (
              <SingleComment content={comments} />
            ))}

            <Form reply>
              {/*onChange시 inputContent의 값이 TextArea에 있는 새로운 입력값으로 바뀜*/}
              <Form.TextArea
                style={{ width: "550px", minHeight: "100px" }}
                placeholder="댓글을 입력해주세요."
                value={this.state.inputContent}
                onChange={(e) =>
                  this.setState({ inputContent: e.target.value })
                }
              />

              <Button
                content="Add Reply"
                labelPosition="left"
                icon="edit"
                primary
                onClick={() =>
                  this.setState((prevState) => {
                    return {
                      commentsList: [
                        ...prevState.commentsList,
                        this.state.inputContent,
                      ],
                      inputContent : ""
                    };
                  })
                }
              />
            </Form>
          </Comment.Group>
        </div>
      </Grid>
    );
  }
}

export default Comments;
