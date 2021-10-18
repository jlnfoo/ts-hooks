import UseEffectComponent from "./useEffectComponent";
import UseStateComponent from "./useStateComponent";
import UseContextComponent from "./UseContextComponent";
import UseReducerComponent from "./UseReducerComponent";


function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useState</h1>
     <UseStateComponent />
    </div>
  );
}

export default App;
