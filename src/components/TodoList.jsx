import { useState } from 'react';
import Button from './Button.jsx';
import SectionCard from './SectionCard.jsx';

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
    <SectionCard>
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
        <Button className="px-5" type="submit">
          Add todo
        </Button>
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
                <Button
                  className="text-sm"
                  onClick={() => saveTodo(todo.id)}
                  variant="dark"
                >
                  Save
                </Button>
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
                  <Button
                    className="px-3 text-sm"
                    onClick={() => startEditing(todo)}
                    variant="ghost"
                  >
                    Edit
                  </Button>
                  <Button
                    className="px-3 text-sm"
                    onClick={() => deleteTodo(todo.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}

export default TodoList;
