import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/shopSlice";
import { IconPhoto } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const dispatch = useDispatch();
  const [designation, setDesignation] = useState("");
  const [famille, setFamille] = useState("");
  const [photo, setPhoto] = useState(null);

  const nav = useNavigate();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if (!designation || !famille) {
      alert("Please fill in all fields");
      return;
    }
    const newProduct = {
      id: Date.now(),
      designation,
      famille,
      photo,
    };
    dispatch(addProduct(newProduct));
    setDesignation("");
    setFamille("");
    setPhoto(null);
    nav('/')
  }, [dispatch, designation, famille, photo]);

  const handlePhotoChange = useCallback((event) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(event.target.files[0]);
    }
  }, []);

  return (
    <div className="bg-gray-100 p-6 mx-auto max-w-md rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="designation" className="block text-lg font-medium text-gray-700">
            Designation
          </label>
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="designation"
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="famille" className="block text-lg font-medium text-gray-700">
            Famille
          </label>
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            id="famille"
            type="text"
            value={famille}
            onChange={(e) => setFamille(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="photo" className="block text-lg font-medium text-gray-700">
            Photo
          </label>
          <div className="mt-1 flex items-center">
            <input
              id="photo"
              type="file"
              onChange={handlePhotoChange}
              className="hidden"
              accept="image/*"
            />
            <label
              htmlFor="photo"
              className="cursor-pointer flex items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-md px-3 py-3 text-sm leading-4 font-medium text-gray-700 hover:text-indigo-500 hover:border-indigo-300 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-gray-50 active:text-indigo-800 transition duration-150 ease-in-out"
            >
              {photo ? (
                <span>{photo.name}</span>
              ) : (
                <span className="flex items-center">
                  <IconPhoto className="h-6 w-6 mr-2" />
                  Upload Photo
                </span>
              )}
            </label>
          </div>
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;