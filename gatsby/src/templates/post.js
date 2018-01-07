import React from "react";
import styled from "styled-components";

const PostWrapper = styled.div`
  h3 {
    // Todo - Try to use Typography js Rhythm here instead... 
    margin-top: 0;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <PostWrapper>
      <h1>{post.frontmatter.title}</h1>
      <h3>— {post.frontmatter.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </PostWrapper>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;