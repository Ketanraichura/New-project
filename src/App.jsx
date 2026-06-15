import { useCallback, useState } from 'react';
import Counter from './components/Counter.jsx';
import PageHeader from './components/PageHeader.jsx';
import PropsPracticeSection from './components/PropsPracticeSection.jsx';
import TodoList from './components/TodoList.jsx';
import WeatherApp from './components/WeatherApp.jsx';
import { products, users } from './data/showcase.js';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(users[0].id);
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);

  const toggleTheme = useCallback(() => {
    setIsDark((currentTheme) => !currentTheme);
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
      <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <section className="mx-auto max-w-4xl">
          <PageHeader isDark={isDark} onToggleTheme={toggleTheme} />

          <div className="mt-8 grid gap-6">
            <Counter />
            <TodoList />
            <WeatherApp />
            <PropsPracticeSection
              onSelectProduct={setSelectedProductId}
              onSelectUser={setSelectedUserId}
              selectedProductId={selectedProductId}
              selectedUserId={selectedUserId}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
