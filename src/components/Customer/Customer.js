import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import api from "./api/customer";
import "./App.css";
import AddCustomer from "./AddCustomer";
import CustomerList from "./CustomerList";
import CustomerDetail from "./CustomerDetail";
import EditCustomer from "./EditCustomer";


function Customer() {
  const LOCAL_STORAGE_KEY = "customers";
  const [customers, setCustomers] = useState([]);

  //RetrieveCustomers
  const retrieveCustomers = async () => {
    const response = await api.get("/customers");
    console.log("this is retrieve");
    return response.data;
  };

  const addCustomerHandler = async (customer) => {
    console.log("this is add customer");

    console.log(customer);

    const request = {
      id: uuidv4(),
      ...customer,
    };

    console.log("this is request");
    console.log(request);
    const response = await api.post("/customers", request);
    console.log(response);
    setCustomers([...customers, response.data]);
    console.log("leaving add customer");
  };

  const updateCustomerHandler = async (customer) => {
    console.log("this is update customer");

    const response = await api.put(`/customers/${customer.id}`, customer);
    const { id, name, address } = response.data;
    setCustomers(

      customers.map((customer1) => {
        return customer1.id === id ? { ...response.data } : customer;
      })
    );
  };

  const removeCustomerHandler = async (id) => {
    console.log("this is remove customer");

    await api.delete(`/customers/${id}`);
    const newCustomerList = customers.filter((customer) => {
      return customer.id !== id;
    });

    setCustomers(newCustomerList);
  };

  useEffect(() => {
    // const retriveCustomers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveCustomers) setCustomers(retriveCustomers);
    const getAllCustomers = async () => {
      console.log("this is all customer");
      const allCustomers = await retrieveCustomers();
      if (allCustomers) setCustomers(allCustomers);
    };

    getAllCustomers();
  }, []);

  // useEffect(() => {
  //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(customer));
  //}, [customers]);

  return (
    <div className="ui container">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <CustomerList
                {...props}
                customer={customers}
                getCustomerId={removeCustomerHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddCustomer {...props} addCustomerHandler={addCustomerHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditCustomer
                {...props}
                updateCustomerHandler={updateCustomerHandler}
              />
            )}
          />

          <Route path="/customer/:id" component={CustomerDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default Customer;
