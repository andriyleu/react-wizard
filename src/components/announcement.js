import React, { Component } from "react";
import styled from "styled-components";
import { Title } from "./styled/texts";

const AnnouncementWrapper = styled.div`
  display: flex;
`;

const AnnouncementContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

class Announcement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AnnouncementWrapper>
        {this.props.icon}
        <AnnouncementContent>
          <Title>{this.props.title}</Title>
          <p>{this.props.description}</p>
        </AnnouncementContent>
      </AnnouncementWrapper>
    );
  }
}

export default Announcement;
