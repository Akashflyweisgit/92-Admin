/** @format */

import React from "react";
import { ContainerS } from "../../Common/CommonStyling";
import Header from "../../Common/Header";
import HOC from "../../Common/HOC";
import styled from "styled-components";
import axios from "axios";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* flex-direction: column; */
`;
const Wrapper = styled.div`
  width: 50%;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 5px;
    margin-top: 10px;
    color: #6d6de5;
    font-weight: 700;
  }

  select {
    padding: 5px 10px;

    border-radius: 3px;
    border-color: #c0e6eb;
    outline-color: #6d6de5;
  }

  button {
    width: 128px;
    border: none;
    border-radius: 4px;
    background: #00bcd4;
    color: #fff;
    margin: 20px 0;
    padding: 5px 0;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Agreements = () => {
  const [title, setTitle] = React.useState("");
  const [subtitle, setSubtitle] = React.useState("");
  const [qar, setQar] = React.useState("");
  const [pdf, setPdf] = React.useState(null);
  const [category, setcategory] = React.useState("624aca77a21dce5cc979bc71");
  const [name, setname] = React.useState("category1");

  console.log(category);

  const AddAgreements = async () => {
    let url = "https://nintytwo-9092.herokuapp.com/api/agreement/agreements";

    // let data = {
    //     title: title,
    //     subtitle: subtitle,
    //     qar: qar,
    //     myFeildpdf: pdf,
    //     category_id: category

    // }
    const fd = new FormData();
    fd.append("title", title);
    fd.append("subTitle", subtitle);
    fd.append("qar", qar);
    fd.append("myFeild", pdf);
    fd.append("category_id", category);

    try {
      const res = await axios.post(url, fd);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ContainerS>
        <Header cname={"Agreements"} />
        <MainContainer>
          <Wrapper>
            <span>Upload Agreement :</span>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setPdf(e.target.files[0])}
            />
            <span>Title :</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span>Subtitle :</span>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
            <span>QAR :</span>
            <input
              type="text"
              value={qar}
              onChange={(e) => setQar(e.target.value)}
            />
            <span>Select Agreement Type :</span>
            <select onChange={(e) => setcategory(e.target.value)}>
              <option value={category}> {name}</option>
            </select>
            <button onClick={AddAgreements}>Upload</button>
          </Wrapper>
        </MainContainer>
      </ContainerS>
    </>
  );
};

export default HOC(Agreements);
