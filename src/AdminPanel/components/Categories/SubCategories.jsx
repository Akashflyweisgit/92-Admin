/** @format */

import React, { useState, useEffect } from "react";
import { ContainerS } from "../../Common/CommonStyling";
import Header from "../../Common/Header";
import HOC from "../../Common/HOC";
import styled from "styled-components";
import { Navigate, useLocation, useNavigate } from "react-router";
import axios from "axios";

const Content = styled.div`
  padding: 20px;

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
  h2 {
    margin: 20px 0;
    font-size: 1.15rem;
    font-weight: 600;
    color: #4a0606;
  }

  h5 {
    min-width: 200px;
    font-size: 1rem;
    font-weight: 700;
  }

  span {
    margin-left: 10px;
  }

  .categoryDetails {
    display: flex;
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
`;

const style = {
  border: "none",
  borderRadius: "4px",
  padding: "5px 10px",
  backgroundColor: "#06604a",
  color: "#fff",
  margin: "0 10px ",
};
const style2 = {
  border: "none",
  borderRadius: "4px",
  padding: "5px 10px",
  backgroundColor: "#ff5c04",
  color: "#fff",
  margin: "0 10px ",
};

const SubCategories = () => {
  const location = useLocation();

  console.log(location.state);
  //   const { descrption, title, img } = location.state;

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const getSubCategories = async () => {
    try {
      const res = await axios.get(
        "https://nintytwo-9092.herokuapp.com/api/subcategory/subcategory"
      );
      setData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSubCategories();
  }, []);
  console.log("data", data);

  return (
    <>
      <ContainerS>
        <Header
          cname={"SubCategories"}
          btn="Add SubCategory"
          pathname="/add-subcategory"
          needaddbtn={true}
        />

        <Content>
          {/* <img src="" alt="" /> */}

          {/* <div className="categoryDetails">
            <h5>Categories Name </h5> :<span> title </span>
          </div>
          <div className="categoryDetails">
            <h5>Description </h5> :<span> descrption </span>
          </div> */}
          <TableWrapper>
            <h2>Sub-Categories List</h2>

            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>
              {data.map((item) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        <img
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "999px",
                            objectFit: "contain",
                          }}
                          src={item.subCategoryImg.url}
                          alt=""
                        />
                      </td>
                      <td>{item.subCategory} </td>

                      <td>
                        <button
                          style={style}
                          onClick={() => navigate("/edit-subcategory")}
                        >
                          {" "}
                          Edit{" "}
                        </button>
                        <button style={style2}> Delete </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </TableWrapper>
        </Content>
      </ContainerS>
    </>
  );
};

export default HOC(SubCategories);
