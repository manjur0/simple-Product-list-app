/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
const ProductTable = ({ products, setProducts }) => {
  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  return (
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Product Listed Table</h1>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg  table-auto">
              <th>Product Name</th>
              <th>Product Id</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Color</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.id} className="bg-base-200 text-lg text-center ">
                <td className="md:border-grey-500">{product.name}</td>
                <td>{product.id}</td>
                <td> $ {product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.color}</td>
                <td>{product.description}</td>
                <div className="cursor-pointer justify-center align-center">
                  <MdDelete
                    className="red-500"
                    onClick={() => handleDelete(product.id)}
                  />
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
