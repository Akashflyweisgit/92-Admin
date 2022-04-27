/** @format */

import React from "react";
import styled from "styled-components";
import { ContainerS } from "../../Common/CommonStyling";
import Header from "../../Common/Header";
import HOC from "../../Common/HOC";
import View from "./View";

function ViewAgreements(props) {
  const MainContainer = styled.div`
    width: 100%;

    h5 {
      margin: 20px 0;
    }
  `;

  return (
    <ContainerS>
      <MainContainer>
        <Header
          needaddbtn={true}
          btn={"Add Agreement"}
          cname="Categories"
          pathname={"/agreement"}
        />

        <View />
      </MainContainer>
    </ContainerS>
  );
}

export default HOC(ViewAgreements);
