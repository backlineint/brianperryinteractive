import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const PostWrapper = styled.div`
  h3 {
    margin-top: 0;
  }
`;

export default ({ data }) => (
  <div>
    <h4>{data.allMarkdownRemark.totalCount} Post</h4>
    <h4>All ({data.allNodePost.totalCount})</h4>
    <h4>Posts ({data.posts.totalCount})</h4>
    <h4>Links ({data.links.totalCount})</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostWrapper key={node.id}>
        <Link
          to={node.fields.slug}
        >
          <h1>
            {node.frontmatter.title}{" "}
          </h1>
          <h3>— {node.frontmatter.date}</h3>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
      </PostWrapper>
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
          title
          body {
            value
          }
          created
        }
      }
    }
    posts: allNodePost(sort: { fields: [created], order: DESC }) {
      totalCount
      edges {
        node {
          title
          body {
            value
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
          title
          body {
            value
          }
          post_type
          created
        }
      }
    }
  }
`