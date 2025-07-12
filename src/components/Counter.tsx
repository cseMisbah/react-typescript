import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

type counterStateType = {
  count: number;
};

const INCREMENT = "INCREMENT";
const INCREMENTBYAMOUNT = "INCREMENTBYAMOUNT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

type IncrementActionType = { type: typeof INCREMENT };
type IncrementAmountByActionType = {
  type: typeof INCREMENTBYAMOUNT;
  payload: number;
};
type ResetActionType = { type: typeof RESET };
type DecrementActionType = { type: typeof DECREMENT };

type CounterActionType =
  | IncrementActionType
  | IncrementAmountByActionType
  | ResetActionType
  | DecrementActionType;

const reducer = (state: counterStateType, action: CounterActionType) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };

    case INCREMENTBYAMOUNT:
      return { count: state.count + action.payload };

    case RESET:
      return { count: 0 };

    case DECREMENT:
      return { count: state.count - 1 };

    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>count : {state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: INCREMENT });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: INCREMENTBYAMOUNT, payload: 9 });
        }}
      >
        increment by amount
      </button>
      <button
        onClick={() => {
          dispatch({ type: RESET });
        }}
      >
        reset
      </button>
      <button onClick={() => dispatch({ type: DECREMENT })}>decrement</button>
    </div>
  );
};

export default Counter;
