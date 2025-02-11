import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import React from "react";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default Home;
