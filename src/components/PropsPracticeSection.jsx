import { useCallback } from 'react';
import ProductCard from './ProductCard.jsx';
import SectionCard from './SectionCard.jsx';
import UserCard from './UserCard.jsx';
import { products, users } from '../data/showcase.js';

function PropsPracticeSection({
  onSelectProduct,
  onSelectUser,
  selectedProductId,
  selectedUserId,
}) {
  const handleSelectProduct = useCallback(
    (productId) => {
      onSelectProduct(productId);
    },
    [onSelectProduct],
  );

  const handleSelectUser = useCallback(
    (userId) => {
      onSelectUser(userId);
    },
    [onSelectUser],
  );

  return (
    <SectionCard>
      <h2 className="text-2xl font-semibold">Components, Props, and State</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        These cards render from data, pass props down, and lift selected state
        back up to the app.
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
                onSelect={handleSelectUser}
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
                onSelect={handleSelectProduct}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

export default PropsPracticeSection;
