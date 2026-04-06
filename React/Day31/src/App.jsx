import CounterReducer from "./components/CounterReducer";
import FormReducer from "./components/FormReducer";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <CounterReducer />
      <FormReducer />
    </div>
  );
};

export default App;