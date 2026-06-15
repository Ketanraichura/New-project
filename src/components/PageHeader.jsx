import ThemeToggle from './ThemeToggle.jsx';

function PageHeader({ isDark, onToggleTheme }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
          React 18.2.0
        </p>
        <h1 className="mt-2 text-4xl font-bold">
          React Fundamentals Refresh
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          A small practice board for getting comfortable with components,
          props, state, inputs, and simple UI updates again.
        </p>
      </div>

      <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
    </div>
  );
}

export default PageHeader;
