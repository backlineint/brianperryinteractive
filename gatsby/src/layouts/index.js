import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { Helmet } from "react-helmet";
import { FaTwitter, FaGithub, FaDrupal } from 'react-icons/lib/fa';
import background from '../assets/Sky-100-Vertices.jpeg';

const Background = styled.div`
  min-height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const MainWrapper = styled.div`
  margin: 0 auto;
  padding-top: 2.25rem;
  padding-bottom: .25rem;
  max-width: 1000px;
`;

const AsideWrapper = styled.div`
  padding: 0 1rem;
  margin-bottom: 2rem;
  @media screen and (min-width: 40em) {
    width: 30%;
    max-width: 300px;
    padding: 0 .5rem 0 1rem;
    position: fixed;
  }
`;

const Navigation  = styled.div`
  padding: 1rem;
  background-color: rgba(255, 255, 255, .7);
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);
  h2 {
    margin-top: 0;
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
  padding: 0 1rem;
  @media screen and (min-width: 40em) {
    display: inline-block;
    margin-left: 30%;
    width: 70%;
    padding: 0 1rem 0 .5rem;
  }
`;

export default ({ data, children }) => (
  <Background>
    <MainWrapper>
      <Helmet>
        <title>Brian Perry - Web Developer</title>
      </Helmet>
      <AsideWrapper>
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
      </AsideWrapper>
      <Content>
        {children()}
      </Content>
    </MainWrapper>
  </Background>
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