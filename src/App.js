import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
// import user from "./user";
import { bindActionCreators } from "redux";
import { actionCreation } from "./State/index";

export default function App() {
  const state = useSelector((state) => state.amount);
  const dispatch = useDispatch();
  const { add, sub } = bindActionCreators(actionCreation, dispatch);
  console.log(state);
  const count = useRef(0);
  const inputElement = useRef();
  console.log(inputElement);
  useEffect(() => {
    count.current = count.current + 1;
  }, [state]);

  const focus = () => {
    inputElement.current.focus();
  };

  return (
    <div className="App">
      <h1>{state}</h1>
      <input type="text" ref={inputElement} />
      <button onClick={focus}>click</button>
      <h1>NO of Render {count.current}</h1>
      <button onClick={() => add(100)}>Increase</button>
      <button onClick={() => sub(100)}>Decrease</button>
    </div>
  );
}
