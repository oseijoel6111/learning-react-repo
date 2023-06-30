import { useEffect } from "react";

export const loginAuth = async ({ username, password }) => {
  let authRes = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
    body: { username, password },
  });
  if (authRes.status === 401)
    return { msg: "unathorized", status: authRes.status };
  else return { msg: "successfully", status: 200 };
};
