import React from "react";
import styled from "styled-components";

import PostTeaser from '../components/PostTeaser';

const Totals = styled.div`
  margin-top: 2.25rem;
  li {
    float: left;
    list-style-type: none;
    margin-right: 1rem;
  }
`;

export default ({ data }) => (
  <div>
    <Totals>
      <li>All ({data.allNodePost.totalCount})</li>
      <li>Posts ({data.posts.totalCount})</li>
      <li>Links ({data.links.totalCount})</li>
    </Totals>
    {data.allNodePost.edges.map(({ node }) => (
      <PostTeaser
        key={node.id}
        slug={node.fields.slug}
        title={node.title}
        link={node.link}
        date={node.created}
        body={node.body.value}
        postType={node.post_type}
      />
    ))}
  </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          html
        }
      }
    }
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
    posts: allNodePost(sort: { fields: [created], order: DESC }) {
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
    links: allNodePost(sort: { fields: [created], order: DESC }) {
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