import { useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

  const { data = [] , isLoading } = useGetTodosQuery();

  return (
    <>
      <h1>Todo - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False' } </h4>

      <pre>...</pre>

      <ul>
        {data.map(todo => (
          <li key={todo.id}>
              <strong> {todo.completed ? 'Done' : 'Pending' } </strong>
            {todo.title}
          </li>
        ) )}
      </ul>

      <button>
        Next Todo
      </button>
    </>
  )
}
