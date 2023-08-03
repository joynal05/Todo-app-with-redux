import { editTodoAlart } from "./editTodoAlart";
import { removeTodoAlart } from "./removeTodoAlart";
const TaskList = ({ todos }) => {
  return (
    <div className="my-4">
      <table className="table table-dark table-hover table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Todo Name</th>
            <th>Edit</th>
            <th>Remove</th>
            <th>Check</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
                <td>
                  <button
                    onClick={() => editTodoAlart(index, item)}
                    className="btn btn-sm btn-success"
                  >
                    Edit todo
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => removeTodoAlart(index)}
                    className="btn btn-sm btn-danger"
                  >
                    Remove todo
                  </button>
                </td>
                <td>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={index}
                    />
                    <label class="form-check-label">Checked</label>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
