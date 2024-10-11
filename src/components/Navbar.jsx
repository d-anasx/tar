import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav
            className="bg-gray-800 shadow-lg flex justify-between items-center py-4"
        >
            <Link
                to="/"
                className="text-xl font-bold text-white ms-5 hover:text-blue-300"
            >
                Shop
            </Link>
            <div className="flex items-center">
                <Link
                    to="/bmi"
                    className="px-4 py-2 text-lg font-semibold text-white hover:text-blue-300 rounded-md"
                >
                    BMI Calculator
                </Link>
                <Link
                    to="/productForm"
                    className="px-4 py-2 text-lg font-semibold text-white hover:text-blue-300 rounded-md"
                >
                    Product Form
                </Link>
            </div>
        </nav>
    )
}

export default Navbar

