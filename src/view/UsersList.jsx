import React from 'react';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { userName: '', designation: 'default' };
    console.log(this.props.users.length);
  }

  render() {
    return (
      <div>
        <h4>List of Users</h4>
        {this.props.users.length ? (
          <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>designation</th>
            </tr>
            {this.props.users.map((user, i) => (
              <tr>
                <td>{i}</td>
                <td>{user.userName}</td>
                <td>{user.designation}</td>
              </tr>
            ))}
          </table>
        ) : (
          'No Users Added...'
        )}
      </div>
    );
  }
}
