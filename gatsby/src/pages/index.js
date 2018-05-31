import React from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled from "styled-components";

import PostList from '../components/PostList';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const PostListWrapper = styled.div`
  padding: 0 1rem;
  @media all and (max-width: 1024px) {
   grid-column: 1 / span 4;
  }
  @media all and (min-width: 1025px) {
    grid-column: 1 / span 3;
  }
  .post-list-enter {
    opacity: 0.01;
    &.post-list-enter-active {
      opacity: 1;
      transition: opacity 500ms ease-in;
    }
  }
`;

const AsideWrapper = styled.div`
  padding: 0 1rem .5rem 0;
  @media all and (max-width: 1024px) {
    grid-column: 1 / span 4;
    order: -1;
    padding-left: 1rem;
  }
  @media all and (min-width: 1025px) {
    grid-column: span 1;
    > div {
      position: fixed;
      width: calc(100%/5.4);
      height: 100vh;
    }
  }
`;

const Totals = styled.div`
  li {
    padding: .5rem;
    background-color: rgba(255, 255, 255, .4);
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);
    list-style-type: none;
    font-family: 'Montserrat',sans-serif;
    color: hsla(0,0%,0%,0.5);
    cursor: pointer;
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
      <Grid>
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
        <AsideWrapper>
          <Totals className="post-type-controls">
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
              Notes ({this.props.data.notes.totalCount})
            </li>
          </Totals>
        </AsideWrapper>
      </Grid>
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