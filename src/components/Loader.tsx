import * as React from "react";
import styled from "styled-components";

export default () => {
  const StyledLoader = styled.div`
    text-align: center;
    margin: 15px 100px;
  `;

  return (
    <div className="Card">
      <StyledLoader>Loading...</StyledLoader>
    </div>
  );
};
