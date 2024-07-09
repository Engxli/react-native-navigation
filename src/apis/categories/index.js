import instance from "..";

const getAllCategories = async () => {
  const { data } = await instance.get("/mini-project/api/categories/");
  return data;
};

export { getAllCategories };
