/** @format */

import React, { useState, useEffect } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import Header from "../../Common/Header";
import styled from "styled-components";
import HOC from "../../Common/HOC";
import axios from "axios";

const MainContainr = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 60%;
  padding: 20px;
  /* border: 1px solid #ccc; */
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  -webkit-box-shadow: 0px 1px 8px 0px rgba(110, 109, 110, 1);
  -moz-box-shadow: 0px 1px 8px 0px rgba(110, 109, 110, 1);
  box-shadow: 0px 1px 8px 0px rgba(110, 109, 110, 1);

  span {
    font-weight: 600;
    padding: 10px 0;
    color: #6d6de5;
  }

  input,
  select {
    padding: 7px 10px;
    border-radius: 4px;
    border: 1px solid lightblue;
    outline-color: #6d6de5;
    outline-offset: 2px;
  }

  button {
    margin: 10px 0;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    background: #00bcd4;
    color: #fff;
    padding: 10px 0;
  }
`;

const LeagelForm = () => {
  const [agreements, setAgreements] = useState([]);
  const [id, setId] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState(null);
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setmsg] = React.useState("");

  const getAgreements = async () => {
    try {
      const res = await axios.get(
        "https://nintytwo-9092.herokuapp.com/api/agreement/agreements/624aca77a21dce5cc979bc71"
      );
      setAgreements(res.data.data);
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAgreements();
  }, []);

  console.log("agreements", agreements);

  const fd = new FormData();

  fd.append("myFeild", image);
  fd.append("agreementId", id);
  fd.append("address", address);
  fd.append("email", email);
  fd.append("name", name);

  const postAgreement = async () => {
    try {
      const res = await axios.post(
        "https://nintytwo-9092.herokuapp.com/api/submit/submit/",
        fd
      );
      console.log(res);
      setName("");
      setAddress("");
      setImage(null);
      setmsg("Sub Category added successfully");
    } catch (err) {
      console.log(err);
      setmsg("Something went wrong");
    }
  };

  return (
    <>
      <ContainerS>
        <Header cname="Legal Form" needaddbtn={false} />
        <MainContainr>
          <Wrapper>
            <span>Upload Document</span>

            <input
              type="file"
              accept="application/pdf,application/vnd.ms-excel"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span>Address</span>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <span>Email</span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Phone Number</span>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <span> Select Category</span>
            <select name="" id="" onChange={(e) => setId(e.target.value)}>
              {agreements.map((row) => (
                <option value={row._id}> {row.title} </option>
              ))}
            </select>

            <span> Select Sub-Category</span>

            <select name="Select Sub-Catrgory" id="q">
              <option value="1">Select Sub-Category</option>
              <option value="1"> Sub-Category 1 </option>
              <option value="1"> Sub-Category 2</option>
              <option value="1"> Sub-Category 3</option>
            </select>

            <button>Upload</button>
          </Wrapper>
        </MainContainr>
      </ContainerS>
    </>
  );
};

export default HOC(LeagelForm);
