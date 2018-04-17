import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const PostImage = styled(Img)`
  display: block;
  @media all and (min-width: 640px) {
    width: 60%;
  }
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  border: 2px solid #07e;
`;

export default PostImage;