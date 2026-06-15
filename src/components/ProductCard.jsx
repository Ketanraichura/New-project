import Button from './Button.jsx';

function ProductCard({ isSelected, onSelect, product }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {product.description}
          </p>
        </div>
        <p className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          ${product.price}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {product.stock} in stock
        </p>
        <Button
          className="text-sm"
          onClick={() => onSelect(product.id)}
          variant={isSelected ? 'secondary' : 'primary'}
        >
          {isSelected ? 'Selected' : 'Pick product'}
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;
