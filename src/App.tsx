import Header from "./components/Header";
import TodoHero from "./components/TodoHero";
import TodoForm from "./components/TodoForm";
const App = () => {
  return (
    <>
      <Header />
      <TodoHero completed_todos={2} total_todos={3} />
      <TodoForm />
    </>
  );
};

export default App;
