import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import PostList from '../components/PostList';
import PaginationLink from '../components/PaginationLink';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const PostListWrapper = styled.div`
  padding: 0 1rem;
  @media all and (max-width: 1024px) {
   grid-column: 1 / span 4;
  }
  @media all and (min-width: 1025px) {
    grid-column: 1 / span 3;
  }
`;

const AsideWrapper = styled.div`
  padding: 0 1rem .5rem 0;
  @media all and (max-width: 1024px) {
    grid-column: 1 / span 4;
    order: -1;
    padding-left: 1rem;
  }
  @media all and (min-width: 1025px) {
    grid-column: span 1;
    > div {
      position: fixed;
      width: calc(100%/5.4);
      height: 100vh;
    }
  }
`;

const Totals = styled.div`
  li {
    padding: .5rem;
    background-color: rgba(255, 255, 255, .4);
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.3);
    list-style-type: none;
    font-family: 'Montserrat',sans-serif;
    color: hsla(0,0%,0%,0.5);
    cursor: pointer;
  }
`;

class IndexPage extends React.Component {
  componentDidMount() {
    // Ensure that twitter embeds load (initial load)
    setTimeout(function() {
      if (
        typeof twttr !== `undefined` &&
        window.twttr.widgets &&
        typeof window.twttr.widgets.load === `function`
      ) {
        window.twttr.widgets.load()
      }
    }, 0);
  }

  render() {
    // Define pagination related variables
    const { group, index, first, last, pageCount } = this.props.pathContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();
    return(
      <Grid>
        <PostListWrapper>
          <PostList
            className="post-list"
            data={this.props.pathContext.group}
          />
        </PostListWrapper>
        <AsideWrapper>
          <Totals className="post-type-controls">
            <li>
              <Link to="/">First</Link>
            </li>
            <li>
              <PaginationLink test={first} url={previousUrl} text="Next 5" />
            </li>
            <li>
              <PaginationLink test={last} url={nextUrl} text="Previous 5" />
            </li>
          </Totals>
        </AsideWrapper>
      </Grid>
    );
  }
}

export default IndexPage;
