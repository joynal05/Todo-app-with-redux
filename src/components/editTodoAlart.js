import store from "../redux/store/store";
import Swal from "sweetalert2";
import { editTodo } from "../redux/features/todo/todoSlice";

export function editTodoAlart(id, item) {
  Swal.fire({
    title: "Update Task",
    background: "#272829",
    input: "text",
    inputPlaceholder: "type text",
    inputValue: item,
    inputValidator: (value) => {
      if (value) {
        store.dispatch(editTodo({ index: id, todo: value }));
      }
    },
  });
}
