// import { Stack } from "@mantine/core";
// import { Outlet, useNavigate } from "react-router-dom";
// import { CommonHeader } from "./General/CommonHeader";

import { Outlet } from "react-router-dom";
import Header from "./General/Header";

export default function Root() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
