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

const View = () => {
  const navigate = useNavigate();

  const [agreements, setAgreements] = React.useState([]);

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

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Sub Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {agreements?.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  src={item.img}
                  alt=""
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "999px",
                    objectFit: "contain",
                  }}
                />
              </td>
              <td>{item.title} </td>
              <td>{item.subTitle} </td>
              <td>
                <button
                  style={style}
                  onClick={() =>
                    navigate("/details-subcategories", { state: item })
                  }
                >
                  View Sub-categories
                </button>
                <button
                  onClick={() => navigate("/edit-categories", { state: item })}
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
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default View;
