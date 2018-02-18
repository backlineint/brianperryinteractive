import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

class ContentGrid extends React.Component {
  render() {
    return (
      <Grid>
        { this.props.children }
      </Grid>
    );
  }
}

export default ContentGrid;