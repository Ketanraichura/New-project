function SectionCard({ children }) {
  return (
    <section className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
      {children}
    </section>
  );
}

export default SectionCard;
