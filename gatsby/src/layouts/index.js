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
  padding-top: 2.25rem;
  padding-bottom: .25rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const AsideWrapper = styled.div`
  padding: 0 1rem;
  @media all and (max-width: 1024px) {
    grid-column: 1 / span 5;
  }
  @media all and (min-width: 1025px) {
    grid-column: span 1;
    // Workaround for position fixed with css grid.
    > div {
      position: fixed;
      width: calc(100%/5.4);
      height: 100vh;
    }
  }
`;

const AsideBlock  = styled.div`
  padding: 1rem;
  background-color: rgba(255, 255, 255, .7);
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);
  font-family: 'Montserrat',sans-serif;
  margin-bottom: 1.5rem;
  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }
  h3 {
    margin-top: 0;
    margin-bottom: .5rem;
  }
  p {
    margin-bottom: .5rem;
  }
  ul {
    margin-bottom: .5rem;
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
  @media all and (max-width: 1024px) {
   grid-column: 1 / span 5;
  }
  @media all and (min-width: 1025px) {
    grid-column: 2 / span 4;
  }
`;

export default ({ data, children }) => (
  <Background>
    <MainWrapper>
      <Helmet>
        <title>Brian Perry - Web Developer</title>
      </Helmet>
      <AsideWrapper>
        <div>
          <AsideBlock>
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
          </AsideBlock>
          <AsideBlock>
            <h3>Upcoming</h3>
            <ul>
              <li><a href="https://www.midcamp.org/">MidCamp</a>: March 8-11, 2018 (<a href="https://www.midcamp.org/topic/hot-jamstack-lessons-building-music-discovery-app-drupal-and-react">Presenting</a>)</li>
            </ul>
          </AsideBlock>
        </div>
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