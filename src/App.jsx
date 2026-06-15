import { useState } from 'react';
import Counter from './components/Counter.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <section className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                Day 1
              </p>
              <h1 className="mt-2 text-4xl font-bold">
                React Fundamentals Refresh
              </h1>
              <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
                A small practice board for getting comfortable with components,
                state, inputs, and simple UI updates again.
              </p>
            </div>

            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>

          <div className="mt-8 grid gap-6">
            <Counter />
            <TodoList />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
