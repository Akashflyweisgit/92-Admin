/** @format */

import axios from "axios";
import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router";

const style = {
  border: "none",
  color: "#fff",
  backgroundColor: "#06604a",
  padding: "5px 10px",
};

const BannerList = () => {
  const navigate = useNavigate();

  //   const [data, setData] = React.useState([]);

  //   const GetCategories = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://nintytwo-9092.herokuapp.com/api/category/category"
  //       );
  //       setData(res.data.data);
  //       console.log(res.data.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   useEffect(() => {
  //     GetCategories();
  //   }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Categories Name</th>
            {/* <th>Description</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {data?.map((item) => ( */}
          <tr>
            <td>
              <img
                //src={item.img.url}
                alt=""
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "999px",
                  objectFit: "contain",
                }}
              />
            </td>
            <td>title </td>
            {/* <td>{item.descrption} </td>      */}
            <td>
              <button
                style={style}
                //   onClick={() =>
                //     navigate("/details-subcategories", { state: item })
                //   }
              >
                View Sub-categories
              </button>
              <button
                //onClick={() => navigate("/edit-categories", { state: item })}
                style={{
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "green",
                  color: "#fff",
                  margin: "0 10px",
                }}
              >
                Edit
              </button>
              <button
                style={{
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "red",
                  color: "#fff",
                }}
              >
                Delete
              </button>
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </Table>
    </>
  );
};

export default BannerList;
