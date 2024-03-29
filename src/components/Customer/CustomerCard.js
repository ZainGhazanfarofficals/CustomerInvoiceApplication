import React from "react";
import { Link } from "react-router-dom";
import user from "./images/user.png";

const CustomerCard = (props) => {
  const { id, name, address } = props.customer;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{ pathname: `/customer/${id}`, state: { customer: props.customer } }}
        >
          <div className="header">{name}</div>
          <div>{address}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { customer: props.customer } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default CustomerCard;
