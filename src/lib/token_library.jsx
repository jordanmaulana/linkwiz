import { verify } from "jsonwebtoken";

export const GetUserId = (token) => {
  const payLoad = verify(token, process.env.SECRET_KEY);
  return payLoad.id;
};
