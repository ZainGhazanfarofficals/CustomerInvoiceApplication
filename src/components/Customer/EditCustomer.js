import React from "react";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, address } = props.location.state.customer;
    this.state = {
      id,
      name,
      address,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.address === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateCustomerHandler(this.state);
    this.setState({ name: "", address: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Customer</h2>
        <form className="ui form" onSubmit={this.update}>
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
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
