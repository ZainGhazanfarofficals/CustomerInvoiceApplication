import React from "react";
import { Link } from "react-router-dom";
import CustomerCard from "./CustomerCard";



 
const CustomerList = (props) => {
  console.log(props);

  const deleteCustomerHandler = (id) => {
    props.getCustomerId(id);
  };

  const renderCustomerList = props.customer.map((customers) => {
    return (
        
      <CustomerCard
        customer={customers}
        clickHander={deleteCustomerHandler}
        key={customers.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        customer List
        <Link to="/add">
          <button className="ui button blue right">Add customer</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderCustomerList}</div>
    </div>
  );
};

export default CustomerList;
