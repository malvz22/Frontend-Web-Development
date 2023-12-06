import { cache } from "react";

export const revalidate = 1800;

export const getServerTime = async () => {
  const date = new Date();
  return date.getTime();
};
