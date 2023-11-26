import { useEffect, useState } from "react";
import ProductTable from "./ProductTable ";
import { IoAddCircleSharp } from "react-icons/io5";
import { getLocalStorage } from "./Utility";

const FormData = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState(getLocalStorage());

  //on submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, id, price, quantity, color, description };
    setProducts([...products, newProduct]);
    // clear the form
    setName("");
    setId("");
    setPrice("");
    setQuantity("");
    setColor("");
    setDescription("");
  };
  // local storage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  });

  return (
    <div className="   bg-base-200">
      <div className="hero-content container mx-auto grid grid-cols-2  my-5  w-10/12 ">
        {/* right side */}
        <div className="card  shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-bold ">
                  Product Name
                </span>
              </label>
              {/* name input */}
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Product Name "
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-lg font-bold">Product Id</span>
              </label>
              {/* id input */}
              <input
                value={id}
                onChange={(e) => setId(e.target.value)}
                type="number"
                placeholder="Product Id "
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text text-lg font-bold">
                  Product Price
                </span>
              </label>
              {/* price input */}
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Product Price"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text text-lg font-bold">
                  Product Quantity
                </span>
              </label>
              {/* quantity input */}
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                placeholder="Product Quantity"
                className="input input-bordered"
                required
              />
              {/* select color */}
              <label className="m-3 text-lg font-bold">Chose Color</label>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="select select-bordered w-full max-w-xs"
                required
              >
                <option>Chose Your Color </option>
                <option>Red</option>
                <option>Green </option>
                <option>Black </option>
              </select>
              {/* Textarea */}
              <label className="my-3 text-lg font-bold">
                Product Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea textarea-bordered"
                placeholder="Description"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-xl">
                List Product <IoAddCircleSharp className="text-xl" />{" "}
              </button>
            </div>
          </form>
        </div>
        <ProductTable products={products} setProducts={setProducts} />
        {/* {
          products.map((product) => (
            <ProductTable key={product.id} product={product} />
          ))
        } */}
      </div>
    </div>
  );
};

export default FormData;
