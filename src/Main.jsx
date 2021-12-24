import React from 'react';
import User from './view/User';
import UserList from './view/UsersList';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userName: '', designation: 'default',  users : [] };
  }

  saveUser = (User) => {
    //console.log(User.designation, User.userName);
    this.setState({
     users: [...this.state.users, User]
    });
  };

  render() {
    return (
      <div>
        <h2>User Application</h2>
        <User dataPassed={...this.state} saveUser={this.saveUser} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}
