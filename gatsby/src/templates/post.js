import React from "react";
import styled from "styled-components";
import PostImage from '../components/PostImage';

import {formatDate} from '../utils/date';

import ContentGrid from '../components/ContentGrid';
import ContentGridMain from '../components/ContentGridMain';

const PostWrapper = styled.div`
  background-color: rgba(255, 255, 255, .4);
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);
  padding: 1rem;
  margin-bottom: 2rem;
  h1 {
    margin-top: .5rem;
  }
  h3 {
    margin-top: 0;
  }
`;

class Post extends React.Component {
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
          <PostWrapper>
            <h1>{post.title}</h1>
            <h3>— {formattedDate}</h3>
            {
              post.relationships.image
                ? <PostImage sizes={post.relationships.image.localFile.childImageSharp.sizes}/>
                : null
            }
            <div dangerouslySetInnerHTML={{__html: post.body.value}}/>
          </PostWrapper>
        </ContentGridMain>
      </ContentGrid>
    );
  }
}

export default Post;

export const query = graphql`
  query PostQuery($slug: String!) {
    nodePost(fields: { slug: { eq: $slug } }) {
      title
      body {
        value
      }
      relationships {
        image {
          localFile {
            childImageSharp {
              sizes(maxWidth: 1250) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
      created
    }
  }
`;