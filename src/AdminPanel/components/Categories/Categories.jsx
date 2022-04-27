/** @format */

import React from "react";
import styled from "styled-components";
import { ContainerS } from "../../Common/CommonStyling";
import Header from "../../Common/Header";
import HOC from "../../Common/HOC";
import CategoriesList from "./CategoriesList";

function Complain(props) {
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
          btn={"Add Categories"}
          cname="Categories"
          pathname={"/add-categories"}
        />

        <CategoriesList />
      </MainContainer>
    </ContainerS>
  );
}

export default HOC(Complain);
