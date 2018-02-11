import React from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled from "styled-components";

import PostList from '../components/PostList';

const Totals = styled.div`
  position: relative;
  @media screen and (min-width: 40em) {
    top: 0;
  }
  li {
    float: left;
    margin: 0;
    padding: .5rem;
    background-color: rgba(255, 255, 255, .4);
    box-shadow: 0px -1px 2px 0px rgba(0,0,0,0.3);
    list-style-type: none;
    font-family: 'Montserrat',sans-serif;
    color: hsla(0,0%,0%,0.5);
    cursor: pointer;
  }
`;

const PostListWrapper = styled.div`
  clear:both;
  .post-list-enter {
    opacity: 0.01;
    &.post-list-enter-active {
      opacity: 1;
      transition: opacity 500ms ease-in;
    }
  }
`;

class IndexPage extends React.Component {
  constructor() {
    super();
    const selectedPostType = 'all';
    this.state = {
      selectedPostType
    };
  }

  selectPostType = (postType) => {
    this.setState({
      selectedPostType: postType
    });
  };

  componentDidMount() {
    // Ensure that twitter embeds load (initial load)
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

  componentDidUpdate() {
    // Ensure that twitter embeds load (when switching post types.)
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
    return(
      <div>
        <Totals>
          <li
            onClick={() => this.selectPostType('all')}
          >
            All ({this.props.data.allNodePost.totalCount})
          </li>
          <li
            onClick={() => this.selectPostType('posts')}
          >
            Posts ({this.props.data.posts.totalCount})
          </li>
          <li
            onClick={() => this.selectPostType('links')}
          >
            Links ({this.props.data.links.totalCount})
          </li>
          <li
            onClick={() => this.selectPostType('notes')}
          >
            Notes ({this.props.data.links.totalCount})
          </li>
        </Totals>
        <PostListWrapper>
          <CSSTransitionGroup
            component="div"
            transitionName="post-list"
            transitionEnterTimeout={500}
            transitionLeave={false}
          >
            <PostList
              className="post-list"
              key={this.state.selectedPostType}
              data={this.props.data}
              postType={this.state.selectedPostType}
            />
          </CSSTransitionGroup>
        </PostListWrapper>
      </div>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allNodePost(sort: { fields: [created], order: DESC }) {
      totalCount
      edges {
        node {
          id
          title
          link
          body {
            value
          }
          fields {
            slug
          }
          post_type
          created
        }
      }
    }
    posts: allNodePost(sort: { fields: [created], order: DESC }, filter: { post_type: { eq: "post" }}) {
      totalCount
      edges {
        node {
          id
          title
          body {
            value
          }
          fields {
            slug
          }
          post_type
          created
        }
      }
    }
    links: allNodePost(sort: { fields: [created], order: DESC }, filter: { post_type: { eq: "link" }}) {
      totalCount
      edges {
        node {
          id
          title
          link
          body {
            value
          }
          fields {
            slug
          }
          post_type
          created
        }
      }
    }
    notes: allNodePost(sort: { fields: [created], order: DESC }, filter: { post_type: { eq: "note" }}) {
      totalCount
      edges {
        node {
          id
          title
          body {
            value
          }
          fields {
            slug
          }
          post_type
          created
        }
      }
    }
  }
`