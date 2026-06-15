import { memo } from 'react';
import Button from './Button.jsx';

function UserCard({ isActive, onSelect, user }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-blue-600 text-lg font-bold text-white">
          {user.name.charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {user.role}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
        {user.bio}
      </p>

      <Button
        className="mt-4 text-sm"
        onClick={() => onSelect(user.id)}
        variant={isActive ? 'secondary' : 'primary'}
      >
        {isActive ? 'Active user' : 'View user'}
      </Button>
    </article>
  );
}

export default memo(UserCard);
