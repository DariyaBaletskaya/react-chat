import React, { Component } from "react";

const UserItem = props => {
  const { id, name, surname, email } = props;

  return (
    <div className="container list-group-item">
      <div className="row">
        <div className="col-8">
          <span
            className="badge badge-secondary float-left"
            style={{
              fontSize: "2em",
              margin: "2px",
              backgroundColor: "#8b5d5d"
            }}
          >
            {name} {surname}
          </span>
          <span
            className="badge badge-info"
            style={{
              fontSize: "2em",
              margin: "2px",
              backgroundColor: "#8b5d5d"
            }}
          >
            {email}
          </span>
        </div>
        <div className="col-4 btn-group">
          <button
            className="btn btn-outline-primary"
            onClick={e => props.onEdit(id)}
            style={{ border: "3px solid #8b5d5d" }}
          >
            Edit
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={e => props.onDelete(id)}
            style={{ border: "3px solid #8b5d5d" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
