/** @format */

import React, { useEffect } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import HOC from "../../Common/HOC";
import styled from "styled-components";
import Header from "../../Common/Header";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import axios from "axios";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputField = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #3a3952;
  padding: 20px;
  flex-wrap: wrap;
  border-radius: 5px;
  background-color: #dadada;

  -webkit-box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 1);
  box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 1);

  span {
    color: #2d2b5a;
    margin-bottom: 5px;
    font-weight: 600;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: #06604a;
    padding: 6px 30px;
    color: #fff;
    font-weight: 600;
    margin: 20px 0;
    border-radius: 4px;
  }
`;
const Wrapper = styled.div`
  width: 50%;
  padding: 10px;

  p {
    margin: 10px 0;
    font-weight: 100;
    font-size: 1rem;
  }
  input,
  select {
    width: 100%;
    outline: none;
    /* border: 1px solid lightblue; */
    padding: 6px;
    border-radius: 3px;
    border: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const AddSubCategory = () => {
  const [title, setTitle] = React.useState("");
  const [subCategory, setSubCategory] = React.useState("");
  const [img, setimg] = React.useState(null);
  const [msg, setmsg] = React.useState("");
  const [category, setCategory] = React.useState(null);

  const [data, setData] = React.useState([]);

  const GetCategories = async () => {
    try {
      const res = await axios.get(
        "https://nintytwo-9092.herokuapp.com/api/category/category"
      );
      setData(res.data.data);
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetCategories();
  }, []);

  console.log("category", data);

  const fd = new FormData();

  fd.append("myFeild", img);
  fd.append("categoryId", category);
  fd.append("subCategory", subCategory);

  const postSubCategory = async () => {
    try {
      const res = await axios.post(
        "https://nintytwo-9092.herokuapp.com/api/subcategory/subcategory",
        fd
      );
      console.log(res);
      setTitle("");
      setSubCategory("");
      setimg(null);
      setmsg("Sub Category added successfully");
    } catch (err) {
      console.log(err);
      setmsg("Something went wrong");
    }
  };

  return (
    <>
      <ContainerS>
        <Header cname={"Add Sub-Categories"} />
        <MainContainer>
          <InputField>
            <Wrapper>
              <span>Parent Categories Name :</span>

              <select
                name=""
                id=""
                onChange={(e) => setCategory(e.target.value)}
              >
                {data.map((row) => (
                  <option value={row._id}> {row.title} </option>
                ))}
              </select>
              {/* <input type="text"placeholder='Categories' value={title} onChange={(e)=>setTitle(e.target.value)} /> */}
              <span>Sub Category :</span>
              <input
                type="text"
                placeholder="Sub Category"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              />
              {/* <span>Descriptions :</span>
              <input
                type="text"
                placeholder="Descriptions"
                value={descrption}
                onChange={(e) => setdescrption(e.target.value)}
              /> */}
              <span>Image :</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setimg(e.target.files[0])}
              />
              <p>{msg}</p>
            </Wrapper>
            <button onClick={postSubCategory}>Save</button>
          </InputField>
        </MainContainer>
      </ContainerS>
    </>
  );
};

export default HOC(AddSubCategory);
