import Counter from './components/Counter.jsx';

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Day 1
        </p>
        <h1 className="mt-2 text-4xl font-bold">React Fundamentals Refresh</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          A small practice board for getting comfortable with components,
          state, inputs, and simple UI updates again.
        </p>

        <div className="mt-8 grid gap-6">
          <Counter />
        </div>
      </section>
    </main>
  );
}

export default App;
