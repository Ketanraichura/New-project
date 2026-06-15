import { useState } from 'react';

const startingTodos = [
  {
    id: 1,
    text: 'Review components and props',
    isComplete: true,
  },
  {
    id: 2,
    text: 'Practice controlled forms',
    isComplete: false,
  },
];

function TodoList() {
  const [todos, setTodos] = useState(startingTodos);
  const [todoText, setTodoText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTodo = (event) => {
    event.preventDefault();

    const cleanText = todoText.trim();

    if (!cleanText) {
      return;
    }

    const nextTodo = {
      id: Date.now(),
      text: cleanText,
      isComplete: false,
    };

    setTodos([nextTodo, ...todos]);
    setTodoText('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
      ),
    );
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const saveTodo = (id) => {
    const cleanText = editingText.trim();

    if (!cleanText) {
      return;
    }

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: cleanText } : todo,
      ),
    );
    setEditingId(null);
    setEditingText('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <section className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
      <h2 className="text-2xl font-semibold">Todo List</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Add, update, complete, and remove little practice tasks.
      </p>

      <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={addTodo}>
        <input
          className="min-w-0 flex-1 rounded-md border border-slate-300 bg-white px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:ring-blue-950"
          onChange={(event) => setTodoText(event.target.value)}
          placeholder="Add a todo"
          type="text"
          value={todoText}
        />
        <button
          className="rounded-md bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
          type="submit"
        >
          Add todo
        </button>
      </form>

      <ul className="mt-5 space-y-3">
        {todos.map((todo) => (
          <li
            className="rounded-md border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950"
            key={todo.id}
          >
            {editingId === todo.id ? (
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  className="min-w-0 flex-1 rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:ring-blue-950"
                  onChange={(event) => setEditingText(event.target.value)}
                  type="text"
                  value={editingText}
                />
                <button
                  className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                  onClick={() => saveTodo(todo.id)}
                  type="button"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <label className="flex flex-1 items-center gap-3">
                  <input
                    checked={todo.isComplete}
                    className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    onChange={() => toggleTodo(todo.id)}
                    type="checkbox"
                  />
                  <span
                    className={
                      todo.isComplete
                        ? 'text-slate-400 line-through dark:text-slate-500'
                        : 'text-slate-800 dark:text-slate-100'
                    }
                  >
                    {todo.text}
                  </span>
                </label>
                <div className="flex gap-2">
                  <button
                    className="rounded-md px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950"
                    onClick={() => startEditing(todo)}
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    className="rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950"
                    onClick={() => deleteTodo(todo.id)}
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
