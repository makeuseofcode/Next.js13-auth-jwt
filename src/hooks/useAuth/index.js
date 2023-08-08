"use client" ;
import React from "react";
import Cookies from "universal-cookie";
import { verifyJwtToken } from "@/libs/auth";



export function useAuth() {
  const [auth, setAuth] = React.useState(null);

  const getVerifiedtoken = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token") ?? null;
    const verifiedToken = await verifyJwtToken(token);
    setAuth(verifiedToken);
  };

  React.useEffect(() => {
    getVerifiedtoken();
  }, []);

  return auth;
}


