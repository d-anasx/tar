import { useReducer } from "react";

const BMICalc = () => {

  
    const initialState = {
        height: 0,
        weight: 0,
        BMI: 0  
    }


    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_HEIGHT':
                return { ...state, height: action.payload }
            case 'SET_WEIGHT':
                return { ...state, weight: action.payload }
            case 'SET_BMI':
                return { ...state, BMI: action.payload }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="bg-white p-4 mx-auto max-w-sm rounded-md shadow-md" >
        <h1 className="text-3xl font-bold text-center">BMI Calculator</h1>
        <form className="mt-4" onSubmit={(event) => event.preventDefault()} >
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">Height (cm)</label>
                <input
                    type="number"
                    id="height"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={state.height}
                    onChange={(event) =>
                        dispatch({ type: 'SET_HEIGHT', payload: event.target.value })
                    }
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">Weight (kg)</label>
                <input
                    type="number"
                    id="weight"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={state.weight}
                    onChange={(event) =>
                        dispatch({ type: 'SET_WEIGHT', payload: event.target.value })
                    }
                />
            </div>
            <div className="mb-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({ type: 'SET_BMI', payload: state.weight / (state.height / 100) ** 2 })} type="submit">Calculate BMI</button>
            </div>
        </form>
        <p className="text-center text-2xl font-bold">BMI: {state.BMI.toFixed(2)}</p>
    </div>
  )
}

export default BMICalc

