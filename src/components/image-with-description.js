import React, { Component } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  padding-bottom: 2.25rem;
`;

const ImageThumbnail = styled.img`
  width: 100%;
`;

const ImageDescription = styled.p`
  text-align: center;
`;

class ImageWithDescription extends Component {
  render = () => {
    return (
      <>
        <ImageWrapper>
          <ImageThumbnail src={this.props.image}></ImageThumbnail>
          <ImageDescription>{this.props.description}</ImageDescription>
        </ImageWrapper>
      </>
    );
  };
}

ImageWithDescription.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
};

export default ImageWithDescription;
