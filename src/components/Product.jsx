import { useState, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { removeProduct, editProduct } from "../redux/shopSlice";
import { IconPencil, IconTrash, IconPhoto } from "@tabler/icons-react";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDesignation, setNewDesignation] = useState(product.designation);
  const [newFamille, setNewFamille] = useState(product.famille);
  const [newPhoto, setNewPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const updatedProduct = { 
      ...product, 
      designation: newDesignation, 
      famille: newFamille,
    };
    if (newPhoto) {
      updatedProduct.photo = newPhoto;
    }
    dispatch(editProduct(updatedProduct));
    setIsEditing(false);
    setNewPhoto(null);
  }, [dispatch, product, newDesignation, newFamille, newPhoto]);

  const toggleEdit = useCallback(() => {
    setIsEditing((prev) => !prev);
    setNewDesignation(product.designation);
    setNewFamille(product.famille);
    setNewPhoto(null);
  }, [product]);

  const handleRemove = useCallback(() => dispatch(removeProduct(product.id)), [dispatch, product.id]);

  const handlePhotoChange = useCallback((event) => {
    if (event.target.files && event.target.files[0]) {
      setNewPhoto(event.target.files[0]);
    }
  }, []);

  const triggerFileInput = useCallback(() => {
    fileInputRef.current.click();
  }, []);

  return (
    <div className="product flex flex-col items-center p-4 m-4 bg-white rounded-lg shadow-lg w-64">
      <div className="relative w-full h-48 mb-4">
        <img
          src={newPhoto ? URL.createObjectURL(newPhoto) : (product.photo ? URL.createObjectURL(product.photo) : "/placeholder-image.jpg")}
          alt={product.designation}
          className="w-full h-full object-cover rounded-t-lg"
        />
        {isEditing && (
          <button
            onClick={triggerFileInput}
            className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md"
          >
            <IconPhoto className="h-5 w-5 text-blue-500" />
          </button>
        )}
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            value={newDesignation}
            onChange={(e) => setNewDesignation(e.target.value)}
            className="w-full px-2 py-1 text-lg font-bold border border-gray-300 rounded-md mb-2"
            placeholder="Designation"
          />
          <input
            type="text"
            value={newFamille}
            onChange={(e) => setNewFamille(e.target.value)}
            className="w-full px-2 py-1 text-lg border border-gray-300 rounded-md mb-2"
            placeholder="Famille"
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handlePhotoChange}
            className="hidden"
            accept="image/*"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
          >
            Save
          </button>
        </form>
      ) : (
        <>
          <h1 className="text-2xl font-bold mt-4">{product.designation}</h1>
          <h2 className="text-lg text-gray-600">{product.famille}</h2>
        </>
      )}
      <div className="flex items-center space-x-2 mt-4">
        <button
          onClick={toggleEdit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
        >
          <IconPencil className="h-5 w-5 mr-1" />
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button
          onClick={handleRemove}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
        >
          <IconTrash className="h-5 w-5 mr-1" />
          Remove
        </button>
      </div>
    </div>
  );
};

export default Product;