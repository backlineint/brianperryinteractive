import React from "react";
import styled from "styled-components";

const LinkWrapper = styled.div`
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
    <LinkWrapper>
      <h1><a href={post.link}>{post.title}</a></h1>
      <h3>— {formattedDate}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.body.value }} />
    </LinkWrapper>
  );
};

export const query = graphql`
  query LinkQuery($slug: String!) {
    nodePost(fields: { slug: { eq: $slug } }) {
      title
      link
      body {
        value
      }
      created
    }
  }
`;