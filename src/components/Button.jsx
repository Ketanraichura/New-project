const styles = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
  secondary:
    'bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
  dark: 'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200',
  ghost:
    'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950',
  danger:
    'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950',
  outline:
    'border border-slate-300 bg-white text-slate-800 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
};

function Button({
  children,
  className = '',
  onClick,
  type = 'button',
  variant = 'primary',
}) {
  return (
    <button
      className={`rounded-md px-4 py-2 font-medium transition-colors ${styles[variant]} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
