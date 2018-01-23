import React from "react";
import styled from "styled-components";

const PostWrapper = styled.div`
  h3 {
    margin-top: 0;
  }
`;

export default ({ data }) => {
  const post = data.nodePost;
  let date = new Date(0); // The 0 there is the key, which sets the date to the epoch
  // Convert the epoch date time we get from Drupal
  date.setUTCSeconds(post.created);
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const formattedDate = date.toLocaleString('en-US', options);
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