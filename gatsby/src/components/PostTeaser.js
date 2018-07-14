import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import {formatDate} from '../utils/date';

import PostImage from '../components/PostImage';

const TeaserWrapper = styled.div`
  clear: both;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: rgba(255, 255, 255, .4);
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);
  h1 {
    margin-top: .5rem;
  }
  h3 {
    margin-top: 0;
  }
  h4 {
    margin-top: 1rem;
  }
`;

class PostTeaser extends React.Component {
  render() {
    const node = this.props.node;
    const formattedDate = formatDate(node.created);
    if (node.post_type === 'link') {
      return (
        <TeaserWrapper key={node.id}>
          <h1>
            <a href={node.link}>{node.title}</a>
          </h1>
          <h4>— {formattedDate}</h4>
          {
            node.relationships.image
              ? <PostImage sizes={node.relationships.image.localFile.childImageSharp.sizes}/>
              : null
          }
          <div dangerouslySetInnerHTML={{__html: node.body.value}}/>
          <Link
            to={node.fields.slug}
          >
            Permalink
          </Link>
        </TeaserWrapper>
      )
    }
    else if (this.props.node.post_type === 'note') {
      return (
        <TeaserWrapper key={node.id}>
          <h4>— {formattedDate}</h4>
          {
            node.relationships.image
            ? <PostImage sizes={node.relationships.image.localFile.childImageSharp.sizes}/>
            : null
          }
          <div dangerouslySetInnerHTML={{__html: node.body.value}}/>
          <Link
            to={node.fields.slug}
          >
            Permalink
          </Link>
        </TeaserWrapper>
      )
    }
    // Everything else is a post
    else {
      return(
        <TeaserWrapper>
          <h1>
            <Link
              to={node.fields.slug}
            >
                {node.title}
            </Link>
          </h1>
          <h3>— {formattedDate}</h3>
          {
            node.relationships.image
              ? <PostImage sizes={node.relationships.image.localFile.childImageSharp.sizes}/>
              : null
          }
          <div dangerouslySetInnerHTML={{__html: node.body.value}}/>
        </TeaserWrapper>
      )
    }
  }
}

PostTeaser.propTypes = {
  node: PropTypes.object.isRequired
};

export default PostTeaser;
