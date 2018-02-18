import React from "react";
import styled from "styled-components";

import {formatDate} from '../utils/date';

import ContentGrid from '../components/ContentGrid';
import ContentGridMain from '../components/ContentGridMain';

const NoteWrapper = styled.div`
  background-color: rgba(255, 255, 255, .4);
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);
  padding: 1rem;
  margin-bottom: 2rem;
  h1 {
    margin-top: .5rem;
  }
  h4 {
    margin-top: 1rem;
  }
`;

class Note extends React.Component {
  componentDidMount() {
    // Ensure that twitter embeds load.
    setTimeout(function() {
      if (
        typeof twttr !== `undefined` &&
        window.twttr.widgets &&
        typeof window.twttr.widgets.load === `function`
      ) {
        window.twttr.widgets.load()
      }
    }, 0);
  }

  render() {
    const post = this.props.data.nodePost;
    const formattedDate = formatDate(post.created);
    return (
      <ContentGrid>
        <ContentGridMain>
          <NoteWrapper>
            <h4>— {formattedDate}</h4>
            <div dangerouslySetInnerHTML={{__html: post.body.value}}/>
          </NoteWrapper>
        </ContentGridMain>
      </ContentGrid>
    );
  }
}

export default Note;

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