import React from "react";
import { Helmet } from "react-helmet";
import Link from "gatsby-link";
import styled from "styled-components";
import { FaGlobe, FaCode, FaHome, FaMicrophone, FaGamepad, FaMagic } from 'react-icons/lib/fa';

import ContentGrid from '../components/ContentGrid';
import ContentGridMain from '../components/ContentGridMain';

const About = styled.div`
  background-color: rgba(255, 255, 255, .4);
  box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);
  padding: 1rem;
  margin-bottom: 2rem;
  h1 {
    margin-top: .5rem;
  }
`;

const Fact = styled.div`
  margin-bottom: 1rem;
`;

const FactIcon = styled.div`
  width: 50px;
  display: inline-block;
  float: left;
`;

const FactText = styled.div`
  margin-left: 60px;
  font-size: 1.25rem;
`;

export default () => (
  <ContentGrid>
    <ContentGridMain>
      <About>
        <Helmet>
          <title>About - Brian Perry</title>
        </Helmet>
        <h1>What Exactly Do You Do Here?</h1>
        <Fact>
          <FactIcon>
            <FaGlobe size={40} />
          </FactIcon>
          <FactText>
            I live in the Chicago area, but was born and raised on the East Coast.
          </FactText>
        </Fact>
        <Fact>
          <FactIcon>
            <FaCode size={40} />
          </FactIcon>
          <FactText>
            I work for <a href="http://hs2solutions.com">HS2 solutions</a> as an Interactive Developer. I love component based  development with Drupal, Pattern Lab and React.
          </FactText>
        </Fact>
        <Fact>
          <FactIcon>
            <FaHome size={40} />
          </FactIcon>
          <FactText>
            I live in a cozy (aka small) house with my wife, son, two cats, and (currently) one fish. (Updated 6/22/18 - <Link to="/post/sometimes-a-recruiter-reminds-you-that-your-pet-died/">thanks recruiter</Link>)
          </FactText>
        </Fact>
        <Fact>
          <FactIcon>
            <FaMicrophone size={40} />
          </FactIcon>
          <FactText>
            <a href="http://improvboston.com">I performed comedy for years in the Boston area</a>. I don't get on stage much anymore, but I'm still up for a good laugh.
          </FactText>
        </Fact>
        <Fact>
          <FactIcon>
            <FaGamepad size={40} />
          </FactIcon>
          <FactText>
            I love video games, and especially all things Nintendo. I'm glad that the Wii U era is behind us.
          </FactText>
        </Fact>
        <Fact>
          <FactIcon>
            <FaMagic size={40} />
          </FactIcon>
          <FactText>
            I sometimes use icons to spice up boring about pages on personal websites.
          </FactText>
        </Fact>
      </About>
    </ContentGridMain>
  </ContentGrid>
);