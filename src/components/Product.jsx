
import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeProduct, editProduct } from "../redux/shopSlice"
import { IconPencil  } from "@tabler/icons-react"

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [newDesignation, setNewDesignation] = useState(product.designation)
  const [newFamille, setNewFamille] = useState(product.famille)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(editProduct({ ...product, designation: newDesignation, famille: newFamille }))
    setIsEditing(false)
  }

  return (
    <div
      className="product flex flex-col items-center p-4 m-4 bg-white rounded-lg shadow-lg w-64"
    >
      <img
        src={product.photo ? URL.createObjectURL(product.photo) : ""}
        alt={product.designation}
        className="w-full rounded-t-lg"
      />
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="designation" className="sr-only">
            Designation
          </label>
          <input
            type="text"
            id="designation"
            value={newDesignation}
            onChange={(event) => setNewDesignation(event.target.value)}
            className="w-full px-2 py-1 text-lg font-bold border border-gray-300 rounded-md"
          />
          <label htmlFor="famille" className="sr-only">
            Famille
          </label>
          <input
            type="text"
            id="famille"
            value={newFamille}
            onChange={(event) => setNewFamille(event.target.value)}
            className="w-full px-2 py-1 text-lg font-bold border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Save
          </button>
        </form>
      ) : (
        <>
          <h1 className="text-2xl font-bold">{product.designation}</h1>
          <h2 className="text-lg">{product.famille}</h2>
        </>
      )}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          {isEditing ? <IconPencil className="h-5 w-5" /> : "Edit"}
        </button>
        <button
          onClick={() => dispatch(removeProduct(product.id))}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          remove
        </button>
      </div>
    </div>
  )
}

export default Product

