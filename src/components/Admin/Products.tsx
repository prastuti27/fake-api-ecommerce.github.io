// src/components/Admin/Products.tsx

import { useGetProductsQuery } from "../../service/Api/FakeApiSlice";
import { useNavigate } from "react-router-dom";
import Table from "./Table";
import Button from "../Button";

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const navigate = useNavigate();

  const handleEdit = (id: number) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete product with id: ${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products.</div>;

  return (
    <>
      <div className="flex justify-end mb-4">
        <Button className=" bg-blue-500 text-white hover:bg-blue-700">
          Add Product
        </Button>
      </div>
      <Table data={products} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
};

export default Products;