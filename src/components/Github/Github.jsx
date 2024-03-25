import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  console.log("🚀 ~ Github ~ data:", data);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <p>Bio: {data.bio} </p>
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/krupali2507");
  console.log("🚀 ~ githubInfoLoader ~ response:", response);
  return response.json();
};
