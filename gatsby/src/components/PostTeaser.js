import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

import {formatDate} from '../utils/date';

const TeaserWrapper = styled.div`
  clear: both;
  background-color: rgba(255, 255, 255, .4);
  padding: 1rem;
  margin-bottom: 2rem;
  h1 {
    margin-top: .5rem;
  }
  h3 {
    margin-top: 0;
  }
`;

class PostTeaser extends React.Component {
  render() {
    const formattedDate = formatDate(this.props.date);
    if (this.props.postType === 'link') {
      return (
        <TeaserWrapper key={this.props.id}>
          <h1>
            <a href={this.props.link}>{this.props.title}</a>
          </h1>
          <h3>— {formattedDate}</h3>
          <div dangerouslySetInnerHTML={{__html: this.props.body}}/>
          <Link
            to={this.props.slug}
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
              to={this.props.slug}
            >
                {this.props.title}
            </Link>
          </h1>
          <h3>— {formattedDate}</h3>
          <div dangerouslySetInnerHTML={{__html: this.props.body}}/>
        </TeaserWrapper>
      )
    }
  }
}

PostTeaser.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  date: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  postType: PropTypes.string.isRequired
};

export default PostTeaser;
