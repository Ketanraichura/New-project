function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
      onClick={onToggle}
      type="button"
    >
      {isDark ? 'Switch to light' : 'Switch to dark'}
    </button>
  );
}

export default ThemeToggle;
