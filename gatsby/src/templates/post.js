import React from "react";
import styled from "styled-components";

import {formatDate} from '../utils/date';

const PostWrapper = styled.div`
  background-color: rgba(255, 255, 255, .4);
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 15px;
  h1 {
    margin-top: .5rem;
  }
  h3 {
    margin-top: 0;
  }
`;

export default ({ data }) => {
  const post = data.nodePost;
  const formattedDate = formatDate(post.created);
  return (
    <PostWrapper>
      <h1>{post.title}</h1>
      <h3>— {formattedDate}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.body.value }} />
    </PostWrapper>
  );
};

export const query = graphql`
  query PostQuery($slug: String!) {
    nodePost(fields: { slug: { eq: $slug } }) {
      title
      body {
        value
      }
      created
    }
  }
`;