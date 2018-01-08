import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { Helmet } from "react-helmet";
import { FaTwitter, FaGithub, FaDrupal } from 'react-icons/lib/fa';

const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const Navigation  = styled.div`
  padding: 0 .5rem 0 1rem;
  @media screen and (min-width: 40em) {
    position: fixed;
    width: 30%;
    max-width: 300px;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    margin-bottom: .5rem;
  }
  ul {
    margin-bottom: 1rem;
  }
  li {
    margin-bottom: .25rem;
  }
  .social {
    a {
     margin-right: .25rem;
     background-image: none;
    }
  }
`;

const Content = styled.div`
  padding: 0 1rem 0 .5rem;
  @media screen and (min-width: 40em) {
    display: inline-block;
    margin-left: 30%;
    width: 70%;
  }
`;

export default ({ data, children }) => (
  <MainWrapper>
    <Helmet>
      <title>Brian Perry - Web Developer</title>
    </Helmet>
    <Navigation>
      <Link to="/">
        <h2>{data.site.siteMetadata.title}</h2>
      </Link>
      <p>Web Developer</p>
      <ul>
        <li><Link to="about">About</Link></li>
      </ul>
      <div className="social">
        <a href="https://twitter.com/bricomedy" target="_blank"><FaTwitter size={35} /></a>
        <a href="https://github.com/backlineint" target="_blank"><FaGithub size={35} /></a>
        <a href="https://www.drupal.org/u/brianperry" target="_blank"><FaDrupal size={35} /></a>
      </div>
    </Navigation>
    <Content>
      {children()}
    </Content>
  </MainWrapper>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`