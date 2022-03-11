import React from "react";
import {
  Comment,
  Form,
  Button,
  Divider,
  Header,
  Icon,
} from "semantic-ui-react";
import { db } from "./fb.js";
import "./comments.css";
import userIcon from "./img/user.png";
import moment from "moment";

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Avatar src={userIcon} />
      <Comment.Content>
        <Comment.Author as="a" style={{ color: "white" }}>
          {detail.info.userNameComment}
        </Comment.Author>
        <Comment.Metadata>
          <div style={{ color: "white" }}>{detail.info.time}</div>
        </Comment.Metadata>
        <Comment.Text style={{ color: "white" }}>
          {detail.info.content}
        </Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
      inputTime: "",
      userNameComment: "",
      commentsList: [],
    };
  }

  componentDidMount = () => {
    db.collection("comments")
      .get()
      .then((ss) => {
        let comments = [];
        ss.forEach((doc) => {
          comments.push(doc.data());
        });
        return comments;
      })
      .then((res) => {this.setState({commentsList : res})});
  };

  render() {
    console.log(this.state.commentsList);
    return (
      <div id="commentCenter">
        <Comment.Group>
          <Divider horizontal>
            <Header as="h3" style={{ color: "white" }}>
              <Icon name="comments" />
              Comments
            </Header>
          </Divider>

          {this.state.commentsList.map((comments) => (
            <SingleComment info={comments} />
          ))}

          <Form reply>
            {/*onChange시 inputContent의 값이 TextArea에 있는 새로운 입력값으로 바뀜*/}
            <Form.TextArea
              style={{ minHeight: "100px" }}
              placeholder="댓글을 입력해주세요."
              value={this.state.inputContent}
              onChange={(e) => this.setState({ inputContent: e.target.value })}
            />

            <Button
              floated="right"
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
              onClick={() => {
                if (this.state.inputContent != "") {
                  this.setState((prevState) => {
                    return {
                      commentsList: [
                        ...prevState.commentsList,
                        {
                          content: this.state.inputContent,
                          time: moment().format(
                            "YYYY년 MM월 DD일 HH시 mm분 ss초"
                          ),
                          userNameComment: this.props.userNameComment,
                        },
                      ],
                      inputContent: "",
                    };
                  });
                } else {
                  alert("내용을 입력해주세요!");
                }
              }}
            />
          </Form>
        </Comment.Group>
      </div>
    );
  }
}

export default Comments;
