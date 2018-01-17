import React from "react";
import styled from "styled-components";

const PostWrapper = styled.div`
  h3 {
    margin-top: 0;
  }
`;

export default ({ data }) => {
  const post = data.nodePost;
  return (
    <PostWrapper>
      <h1>{post.title}</h1>
      <h3>— {post.created}</h3>
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