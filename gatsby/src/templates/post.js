import React from "react";
import styled from "styled-components";

import {formatDate} from '../utils/date';

const PostWrapper = styled.div`
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