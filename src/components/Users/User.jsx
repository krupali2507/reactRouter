import React from "react";
import { useParams } from "react-router-dom";

function Users() {
  const { id } = useParams();
  return <>User: {id} </>;
}

export default Users;
