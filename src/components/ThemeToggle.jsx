import Button from './Button.jsx';

function ThemeToggle({ isDark, onToggle }) {
  return (
    <Button className="text-sm" onClick={onToggle} variant="outline">
      {isDark ? 'Switch to light' : 'Switch to dark'}
    </Button>
  );
}

export default ThemeToggle;
