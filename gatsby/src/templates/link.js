import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import {formatDate} from '../utils/date';

import PostImage from '../components/PostImage';
import ContentGrid from '../components/ContentGrid';
import ContentGridMain from '../components/ContentGridMain';

const LinkWrapper = styled.div`
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

export default ({ data }) => {
  const post = data.nodePost;
  const formattedDate = formatDate(post.created);
  return (
    <ContentGrid>
      <ContentGridMain>
        <LinkWrapper>
          <Helmet>
            <title>{post.title} | Brian Perry</title>
          </Helmet>
          <h1><a href={post.link}>{post.title}</a></h1>
          <h3>— {formattedDate}</h3>
          {
            post.relationships.image
              ? <PostImage sizes={post.relationships.image.localFile.childImageSharp.sizes}/>
              : null
          }
          <div dangerouslySetInnerHTML={{ __html: post.body.value }} />
        </LinkWrapper>
      </ContentGridMain>
    </ContentGrid>
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