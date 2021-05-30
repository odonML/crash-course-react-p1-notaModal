import Todo from "./components/Todo"
function App() {
  return (
    <div className="todos">
      <h1 className="tittle">My Todos</h1>
      <Todo text="Titulo1"/>
      <Todo text="Titulo2"/>
      <Todo text="Titulo3"/>
    </div>
  );
}

export default App;
