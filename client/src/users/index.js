import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";
import * as actions from "./actions";
import { hideSpinner } from "../Spinner/actions";
import PropTypes from "prop-types";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.hideSpinner();
  }

  onEdit(id) {
    this.props.history.push(`/user/${id}`);
  }

  onDelete(id) {
    this.props.deleteUser(id);
  }

  onAdd() {
    this.props.history.push("/user");
  }

  render() {
    return (
      <div className="row">
        <div className="list-group col-10">
          {this.props.users.map(user => {
            return (
              <UserItem
                key={user.id}
                id={user.id}
                name={user.name}
                surname={user.surname}
                email={user.email}
                onEdit={this.onEdit}
                onDelete={this.onDelete}
              />
            );
          })}
        </div>
        <div className="col-2">
          <button onClick={this.onAdd} style={{ margin: "5px" }}>
            Add user
          </button>
        </div>
      </div>
    );
  }
}

UserList.propTypes = {
  userData: PropTypes.object
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = {
  ...actions,
  hideSpinner
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);