import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { Helmet } from "react-helmet";
import { FaTwitter, FaGithub, FaDrupal,FaRssSquare } from 'react-icons/lib/fa';
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
  iframe {
    max-width: 100%;
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
          <AsideBlock className="navigation">
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
              <a href="http://brianperryinteractive.com/rss.xml" target="_blank"><FaRssSquare size={35} /></a>
            </div>
          </AsideBlock>
          <AsideBlock className="upcoming">
            <h3>Upcoming</h3>
            <ul>
              <li><a href="https://2018.decoupleddays.com/">Decoupled Drupal Days</a>: August 17 - 19, 2018 (<a href="https://2018.decoupleddays.com/session/dealing-limitations-gatsby-source-drupal">Presenting</a>)</li>
              <li><a href="https://www.drupalgovcon.org/">Drupal GovCon</a>: August 22 - 24, 2018 (Presenting: <a href="https://www.drupalgovcon.org/2018/program/sessions/can-we-figure-drupal-component-thing-out-already">Session 1</a>, <a href="https://www.drupalgovcon.org/2018/program/sessions/storybook-interactive-pattern-library-your-decoupled-applications">Session 2</a>)</li>
            </ul>
          </AsideBlock>
        </div>
      </AsideWrapper>
      <Content className="content">
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