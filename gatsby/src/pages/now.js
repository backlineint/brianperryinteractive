import React from "react";
import { Helmet } from "react-helmet";
import Link from "gatsby-link";
import styled from "styled-components";

import ContentGrid from '../components/ContentGrid';
import ContentGridMain from '../components/ContentGridMain';

const Now = styled.div`
  background-color: rgba(255, 255, 255, .4);
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);
  padding: 1rem;
  margin-bottom: 2rem;
  h1 {
    margin-top: .5rem;
  }
  h2 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export default () => (
  <ContentGrid>
    <ContentGridMain>
      <Now>
        <Helmet>
          <title>Now - Brian Perry</title>
        </Helmet>
        <h1>Now</h1>
        <p><em>This is <a href="https://nownownow.com/about">a now page</a>. It's kind of a public contract with myself about what I'm focused on, but maybe you'll find it interesting as well. I expect to look at this page frequently when I inevitably get distracted by some shiny new idea.</em></p>
        <h2>Client Work</h2>
        <p>My main jam at work is a redesign and replatforming of a site that provides home furnishings. This Progressively Decoupled build will allow me to explore some interesting ways to improve the integration between Drupal and React, learn more about Drupal Commerce, and build some exciting front-end components. Contributing to the success of this project is an extremely high priority, but I also need to remind myself to balance that with other responsibilities.</p>
        <h2>Speaking</h2>
          <p>I'm continuing to speak at Drupal community events, mainly on the topic of <a href="https://noti.st/brianperry/dS1GVt/an-external-design-system-in-practice">External Design Systems</a>. I'm also trying to focus my time and effort in this area a little better, which will likely result in me attending fewer events this year.</p>
        <h2>Rebuilding My Personal Site</h2>
        <p>I want to rebuild this website with a focus on improving the development and authoring experience. By reducing the friction I'm hoping I can share more frequently, in more interesting ways, and have more fun while doing so.</p>
        <h2>Decluttering My Home</h2>
        <p>As has often been a goal of mine, I'm hoping to end the summer with substantially fewer things than I began it with. I'm starting in the garage and then hoping to ride that momentum throughout the house.</p>
        <h2>Playing Cuphead</h2>
        <p>Colin and I are really into playing <a href="https://www.nintendo.com/games/detail/cuphead-switch/">Cuphead on Switch</a>, and hoping to make it through the entire game. The catch is that it is hard as hell.</p>
        <p><em>Last updated 5/12/19.</em></p>
      </Now>
    </ContentGridMain>
  </ContentGrid>
);