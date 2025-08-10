import React from 'react';

interface NavbarProps {
  user: any;          // Ideally type this properly
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  return (
    <nav className="bg-green-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <a href="/" className="text-2xl font-bold hover:text-green-300">AlloHealth</a>

      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="hidden sm:inline">Hello, {user.name}</span>
            <button
              onClick={onLogout}
              className="bg-green-700 hover:bg-green-800 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <a href="/login" className="bg-green-700 hover:bg-green-800 px-3 py-1 rounded">Login</a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
