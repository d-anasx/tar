import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addProduct } from "../redux/shopSlice"

const ProductForm = () => {
  const products = useSelector(state => state.shop.products)
  const dispatch = useDispatch()
  const [designation, setDesignation] = useState("")
  const [famille, setFamille] = useState("")
  const [photo, setPhoto] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append("id", products.length + 1)
    formData.append("designation", designation)
    formData.append("famille", famille)
    if (photo) {
      formData.append("photo", photo)
    }
    dispatch(addProduct(formData))
    setDesignation("")
    setFamille("")
    setPhoto(null)
  }

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0])
  }

  return (
    <div className="bg-gray-100 p-4 mx-auto max-w-md rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-center">Product Form</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex flex-col">
          <label htmlFor="designation" className="text-lg font-medium">Designation</label>
          <input
            className="bg-white border border-gray-300 rounded-md p-2 mt-2 w-full"
            id="designation"
            type="text"
            value={designation}
            onChange={(event) => setDesignation(event.target.value)}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="famille" className="text-lg font-medium">Famille</label>
          <input
            className="bg-white border border-gray-300 rounded-md p-2 mt-2 w-full"
            id="famille"
            type="text"
            value={famille}
            onChange={(event) => setFamille(event.target.value)}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="photo" className="text-lg font-medium">Photo</label>
          <input
            className="bg-white border border-gray-300 rounded-md p-2 mt-2 w-full"
            id="photo"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 w-full" onClick={handleSubmit}>Add Product</button>
      </form>
    </div>
  )
}

export default ProductForm

