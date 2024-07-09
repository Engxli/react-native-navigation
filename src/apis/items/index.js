import instance from "..";

const getAllItems = async () => {
  const { data } = await instance.get("/mini-project/api/items");
  return data;
};

export { getAllItems };
