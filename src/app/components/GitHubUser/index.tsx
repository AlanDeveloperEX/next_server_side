import React from "react";
import Count from "./components/Count";

export interface GitHubuserProps {
  username: string;
}

const GitHubUser = async ({ username }: GitHubuserProps) => {
  const response = await fetch(`http://api.github.com/users/${username}`, {
    next: {
      revalidate: 10,
    },
  });
  const userData = await response.json();
  const userId = userData.id.toString();

  return (
    <>
      <p>My User ID: {userId}</p>
      <Count user={userData} />
    </>
  );
};

export default GitHubUser;
