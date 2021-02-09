import React, { Component } from "react";

import PropTypes from "prop-types";
import { Title } from "./styled/texts";
import styled from "styled-components";

const AnnouncementWrapper = styled.div`
  display: flex;
`;

const AnnouncementContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

class Announcement extends Component {
  render = () => {
    return (
      <AnnouncementWrapper>
        {this.props.icon}
        <AnnouncementContent>
          <Title>{this.props.title}</Title>
          <p>{this.props.description}</p>
        </AnnouncementContent>
      </AnnouncementWrapper>
    );
  };
}

Announcement.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Announcement;
