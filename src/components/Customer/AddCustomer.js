import React from "react";
class AddCustomer extends React.Component {
  state = {
    name: "",
    address: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.address === "") {
      alert("ALL the fields are mandatory!");
      return;
    }
    this.props.addCustomerHandler(this.state);
    this.setState({ name: "", address: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Customer</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddCustomer;
