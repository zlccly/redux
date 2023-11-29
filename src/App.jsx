import Input from "./components/Input";
import List from "./components/List";
import  "./css/App.css"
function App() {

  return (
    <div className="conainer">
      <h1 className="lead" style={{ marginBottom: "30px" }}>待办事项</h1>
      <Input/>
      <List></List>
    </div>
  );
}

export default App;
