import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
       <AddTodo></AddTodo>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">Buy milk</div>
          <div class="col-4">04/08/2003</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-6">Go to college</div>
          <div class="col-4">04/08/2003</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
