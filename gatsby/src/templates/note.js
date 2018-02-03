import React from "react";
import styled from "styled-components";

import {formatDate} from '../utils/date';

const NoteWrapper = styled.div`
  background-color: rgba(255, 255, 255, .4);
  padding: 1rem;
  margin-bottom: 2rem;
  h1 {
    margin-top: .5rem;
  }
  h4 {
    margin-top: 1rem;
  }
`;

export default ({ data }) => {
  const post = data.nodePost;
  const formattedDate = formatDate(post.created);
  return (
    <NoteWrapper>
      <h4>— {formattedDate}</h4>
      <div dangerouslySetInnerHTML={{ __html: post.body.value }} />
    </NoteWrapper>
  );
};

export const query = graphql`
  query NoteQuery($slug: String!) {
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