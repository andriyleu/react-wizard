import React, { Component } from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25vw;
`;

const ImageThumbnail = styled.img`
  width: 5rem;
  height: 5rem;
`;

const ImageDescription = styled.p`
  text-align: center;
`;

class ImageWithDescription extends Component {
  render() {
    return (
      <>
        <ImageWrapper>
          <ImageThumbnail src={this.props.image}></ImageThumbnail>
          <ImageDescription>{this.props.description}</ImageDescription>
        </ImageWrapper>
      </>
    );
  }
}

export default ImageWithDescription;