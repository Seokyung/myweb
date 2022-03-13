import React from "react";
import {
  Comment,
  Form,
  Button,
  Divider,
  Header,
  Icon,
  Pagination,
  Grid,
} from "semantic-ui-react";
import { db } from "./fb.js";
import "./comments.css";
import userIcon from "./img/user.png";
import moment from "moment";
import _ from "lodash";

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Avatar src={userIcon} />
      <Comment.Content>
        <Comment.Author as="a" style={{ color: "white" }}>
          {detail.info.userNameComment}
        </Comment.Author>
        <Comment.Metadata style={{ color: "DarkGrey" }}>
          {detail.info.time}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Comment.Actions>
            <Comment.Action
              style={{ color: "LemonChiffon" }}
              onClick={() => {
                //console.log(detail.info.userNameComment)
                //console.log(detail.userName)
                if (
                  detail.info.userNameComment == detail.userName &&
                  detail.userName != "Stranger"
                ) {
                  detail.selectComment(
                    detail.index,
                    detail.info.content,
                    detail.info.id
                  );
                } else {
                  alert("본인이 작성한 댓글만 수정할 수 있습니다.");
                }
              }}
            >
              Update
            </Comment.Action>
            <Comment.Action
              style={{ color: "salmon" }}
              onClick={() => {
                if (
                  detail.info.userNameComment == detail.userName &&
                  detail.userName != "Stranger"
                ) {
                  db.collection("comments")
                    .doc(detail.info.id)
                    .delete()
                    .then((res) => alert("삭제 완료"));
                } else {
                  alert("본인이 작성한 댓글만 삭제할 수 있습니다.");
                }
              }}
            >
              Delete
            </Comment.Action>
          </Comment.Actions>
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
      inputId: "",
      commentsList: [],
      formLocation: -1,
    };
  }

  selectComment = (num, content, id) => {
    this.setState({ formLocation: num, inputContent: content, inputId: id });
  };

  componentDidMount = () => {
    db.collection("comments")
      .get()
      .then((ss) => {
        let comments = [];
        ss.forEach((doc) => {
          comments.push(Object.assign(doc.data(), { id: doc.id }));
        });
        return comments;
      })
      .then((res) => {
        this.setState({ commentsList: res });
      });
  };

  render() {
    console.log(this.state);
    return (
      <div id="commentCenter">
        <Comment.Group>
          <Divider horizontal>
            <Header as="h3" style={{ color: "white" }}>
              <Icon name="comments" />
              Comments
            </Header>
          </Divider>

          {/*댓글 작성 시 보이는 댓글란*/}
          {this.state.formLocation == -1 ? (
            <Form reply style={{ paddingTop: "10px", paddingBottom: "40px" }}>
              {/*onChange시 inputContent의 값이 TextArea에 있는 새로운 입력값으로 바뀜*/}
              <Form.TextArea
                style={{ minHeight: "100px" }}
                placeholder="댓글을 입력해주세요."
                value={this.state.inputContent}
                onChange={(e) =>
                  this.setState({ inputContent: e.target.value })
                }
              />
              <Button
                floated="right"
                content="Comment"
                labelPosition="left"
                icon="edit"
                primary
                onClick={() => {
                  if (this.state.inputContent != "") {
                    this.setState(
                      (prevState) => {
                        let newComment = {
                          content: this.state.inputContent,
                          time: moment().format(
                            "YYYY년 MM월 DD일 HH시 mm분 ss초"
                          ),
                          userNameComment: this.props.userNameComment,
                        };

                        return {
                          commentsList: [...prevState.commentsList, newComment],
                          inputContent: "",
                        };
                      },
                      () =>
                        db
                          .collection("comments")
                          .add(
                            this.state.commentsList[
                              this.state.commentsList.length - 1
                            ]
                          )
                    );
                  } else {
                    alert("내용을 입력해주세요!");
                  }
                }}
              />
            </Form>
          ) : null}

          {/*댓글 수정 시 보이는 댓글*/}
          {_.orderBy(this.state.commentsList, "time", "asc").map(
            (comments, index) => (
              <div style={{ padding: "10px" }}>
                <SingleComment
                  info={comments}
                  userName={this.props.userNameComment}
                  selectComment={this.selectComment}
                  index={index}
                />
                {this.state.formLocation == index ? (
                  <Form
                    reply
                    style={{ paddingTop: "10px", paddingBottom: "40px" }}
                  >
                    {/*onChange시 inputContent의 값이 TextArea에 있는 새로운 입력값으로 바뀜*/}
                    <Form.TextArea
                      style={{ minHeight: "100px" }}
                      placeholder="댓글을 수정해주세요."
                      value={this.state.inputContent}
                      onChange={(e) =>
                        this.setState({ inputContent: e.target.value })
                      }
                    />
                    <Button
                      floated="right"
                      content="Update"
                      labelPosition="left"
                      icon="edit"
                      onClick={() => {
                        if (this.state.inputContent != "") {
                          this.setState(
                            (prevState) => {
                              let newArr = _.filter(
                                prevState.commentsList,
                                (comments) => this.state.inputId != comments.id
                              );
                              let newComment = {
                                content: this.state.inputContent,
                                time: moment().format(
                                  "YYYY년 MM월 DD일 HH시 mm분 ss초"
                                ),
                                userNameComment: this.props.userNameComment,
                              };

                              return {
                                commentsList: [...newArr, newComment],
                                inputContent: "",
                                formLocation: -1,
                              };
                            },
                            () =>
                              db
                                .collection("comments")
                                .doc(this.state.inputId)
                                .update(
                                  this.state.commentsList[
                                    this.state.commentsList.length - 1
                                  ]
                                )
                          );
                        } else {
                          alert("내용을 입력해주세요!");
                        }
                      }}
                    />
                  </Form>
                ) : null}
              </div>
            )
          )}
          <Grid centered style={{ paddingTop: "30px" }}>
            <Pagination
              inverted
              onPageChange={this.handlePaginationChange}
              totalPages={5}
            />
          </Grid>
        </Comment.Group>
      </div>
    );
  }
}

export default Comments;
