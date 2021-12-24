import React from 'react';
import styles from './User.module.css';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.dataPassed.userName,
      designation: this.props.dataPassed.designation,
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    if (this.state.designation !== 'default') {
      this.props.saveUser({ ...this.state });
    } else event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="userName"
            required
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <label>Designation</label>
          <select
            name="designation"
            required
            value={this.state.designation}
            onChange={this.handleChange}
          >
            <option value="default" disabled hidden>
              Choose Role
            </option>
            <option value="Engineer">Engineer</option>
            <option value="Sr Engineer">Sr Engineer</option>
            <option value="Manager">Manager</option>
            <option value="Intern">Intern</option>
          </select>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
