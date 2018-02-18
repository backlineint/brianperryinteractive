import React from "react";
import styled from "styled-components";

const GridColumn = styled.div`
  padding: 0 1rem;
  @media all and (max-width: 1024px) {
   grid-column: 1 / span 4;
  }
  @media all and (min-width: 1025px) {
    grid-column: 1 / span 3;
  }
`;

class ContentGridMain extends React.Component {
  render() {
    return (
      <GridColumn>
        { this.props.children }
      </GridColumn>
    );
  }
}

export default ContentGridMain;