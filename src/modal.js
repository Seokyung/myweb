import React from "react";
import { Modal, Image, Button, Header } from "semantic-ui-react";
import sunbaRock from "./img/sunbaRock.jpg";

class VisitorsModal extends React.Component {
  render() {
    return (
      <Modal open={this.props.isOpen} size="tiny">
        <Modal.Header>Welcome to my Page!</Modal.Header>
        <Modal.Content image>
          <Image size="small" src={sunbaRock} wrapped />
          <Modal.Description>
            <Header>Hall of Visitors</Header>
            <p style={{fontSize:"14px"}}>
              Thank you for logging in to my page.
              <br />
              Feel free to comment me and like my photos. :)
              <br />
              Much Love, XOXO
            </p>
            {this.props.visitorsList.map((name) => (
              <p style={{fontSize:"15px"}}>{`- ${name}`}</p>
            ))}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="violet"
            content="Thank You for Visiting!"
            labelPosition="right"
            icon="checkmark"
            onClick={() => this.props.closeModal()}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default VisitorsModal;
