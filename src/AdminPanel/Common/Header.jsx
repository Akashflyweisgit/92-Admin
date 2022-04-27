/** @format */

import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px;
`;
const LeftSide = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #0d6ea9;
    margin-right: 10px;
  }
`;
const RightSide = styled.div`
  margin-right: 20px;
  button {
    padding: 4px 10px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: #fff;
    background-color: #0d6ea9;
  }
`;
const Header = ({ needaddbtn, cname, btn, pathname }) => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <LeftSide>
          <span>{cname} </span>/
          <span
            onClick={() => navigate(-1)}
            style={{ marginLeft: "10px", cursor: "pointer" }}
          >
            Back
          </span>
        </LeftSide>
        {needaddbtn ? (
          <RightSide>
            <button onClick={() => navigate({ pathname })}>{btn} </button>
          </RightSide>
        ) : null}
      </Container>
    </>
  );
};

export default Header;
