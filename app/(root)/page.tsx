import { auth, signOut } from "@/auth";

import React from "react";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return <></>;
};

export default Home;
