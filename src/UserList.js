import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <div
      style={{
        marginLeft: "200px",
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      {users.map((el) => (
        <Card key={el.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {el.email}
            </Card.Subtitle>
            <Card.Text>{el.phone}</Card.Text>
            <Link to={`/Details/${el.id}`}>more info</Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
