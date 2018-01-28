import React from "react";
import styled from "styled-components";

import PostList from '../components/PostList';

const Totals = styled.div`
  margin-top: 2.25rem;
  li {
    float: left;
    list-style-type: none;
    margin-right: 1rem;
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
        </Totals>
        <PostList
          data={this.props.data}
          postType={this.state.selectedPostType}
        />
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