import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const MainWrapper = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1000px;
`;

const Navigation  = styled.div`
  @media screen and (min-width: 40em) {
    position: fixed;
    width: 30%;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    margin-bottom: .5rem;
  }
  li {
    margin-bottom: .25rem;
  }
`;

const Content = styled.div`
  @media screen and (min-width: 40em) {
    display: inline-block;
    margin-left: 30%;
    width: 70%;
  }
`;

export default ({ children }) => (
  <MainWrapper>
    <Navigation>
      <Link to="/">
        <h2>Brian Perry</h2>
      </Link>
      <p>Web Developer</p>
      <ul>
        <li><Link to="about">About</Link></li>
        <li><a href="https://github.com/backlineint" target="_blank">Github</a></li>
        <li><a href="https://www.drupal.org/u/brianperry" target="_blank">Drupal.org</a></li>
      </ul>
    </Navigation>
    <Content>
      {children()}
    </Content>
  </MainWrapper>
);