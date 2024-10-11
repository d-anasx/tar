import { useReducer, useCallback } from "react";

const initialState = {
  height: '',
  weight: '',
  bmi: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_HEIGHT':
      return { ...state, height: action.payload };
    case 'SET_WEIGHT':
      return { ...state, weight: action.payload };
    case 'CALCULATE_BMI':
      const height = parseFloat(state.height);
      const weight = parseFloat(state.weight);
      if (height > 0 && weight > 0) {
        const bmi = weight / ((height / 100) ** 2);
        return { ...state, bmi };
      }
      return { ...state, bmi: null };
    default:
      return state;
  }
};

const BMICalc = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCalculate = useCallback(() => {
    dispatch({ type: 'CALCULATE_BMI' });
  }, []);

  return (
    <div className="bg-white p-4 mx-auto max-w-sm rounded-md shadow-md">
      <h1 className="text-3xl font-bold text-center">BMI Calculator</h1>
      <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={state.height}
            onChange={(e) => dispatch({ type: 'SET_HEIGHT', payload: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={state.weight}
            onChange={(e) => dispatch({ type: 'SET_WEIGHT', payload: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            onClick={handleCalculate}
            type="button"
          >
            Calculate BMI
          </button>
        </div>
      </form>
      <p className="text-center text-2xl font-bold">
        BMI: {state.bmi !== null ? state.bmi.toFixed(2) : 'N/A'}
      </p>
    </div>
  );
};

export default BMICalc;