import axios from "axios";
import ButtonBack from "./ButtonBack";
import { getServerTime } from "./utils";

export const metadata = {
  title: "About - Company",
};

async function getUsers() {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  //   const data = await res.json();

  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  console.log("fetching...");

  return res.data;
}

export default async function Company() {
  const users = await getUsers();
  const serverTime = getServerTime();
  return (
    <>
      <div>
        This is Company Page {serverTime} <ButtonBack />
      </div>
      <ul>
        {users.map((data) => {
          <li key={data.id}>{data.name}</li>;
        })}
      </ul>
    </>
  );
}
