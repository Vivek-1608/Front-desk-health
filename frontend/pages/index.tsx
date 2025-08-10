// /pages/index.tsx
import ProtectedRoute from '../components/ProtectedRoute';

export default function Home() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Welcome to the Front Desk Dashboard</h1>
        {/* Your dashboard components here */}
      </div>
    </ProtectedRoute>
  );
}
