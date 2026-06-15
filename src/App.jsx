import { useState } from 'react';
import Counter from './components/Counter.jsx';
import ProductCard from './components/ProductCard.jsx';
import SectionCard from './components/SectionCard.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import TodoList from './components/TodoList.jsx';
import UserCard from './components/UserCard.jsx';
import { products, users } from './data/showcase.js';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(users[0].id);
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);

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
            <SectionCard>
              <h2 className="text-2xl font-semibold">
                Components, Props, and State
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                These cards render from data, pass props down, and lift selected
                state back up to the app.
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    User Cards
                  </h3>
                  <div className="mt-3 grid gap-3">
                    {users.map((user) => (
                      <UserCard
                        isActive={selectedUserId === user.id}
                        key={user.id}
                        onSelect={setSelectedUserId}
                        user={user}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Product Cards
                  </h3>
                  <div className="mt-3 grid gap-3">
                    {products.map((product) => (
                      <ProductCard
                        isSelected={selectedProductId === product.id}
                        key={product.id}
                        onSelect={setSelectedProductId}
                        product={product}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
