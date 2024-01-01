import { verify } from "jsonwebtoken";
import { headers } from "next/headers";

export const GetUserId = () => {
  const token = headers().get("authorization").split(" ")[1];
  console.log(`token ${token}`);
  const payLoad = verify(token, process.env.SECRET_KEY);
  return payLoad.id;
};
