import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Navbar from '../components/Navbar';
import { getDashboardStats } from '../services/api';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const [stats, setStats] = useState({
    doctorsCount: 0,
    appointmentsCount: 0,
    queueCount: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoading(true);
        const data = await getDashboardStats();
        setStats(data);
        setError(null);
      } catch (err) {
        setError('Failed to load dashboard stats');
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar user={user} onLogout={logout} />

      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {loading && <p>Loading stats...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded shadow p-6">
              <h2 className="text-xl font-semibold mb-2">Doctors</h2>
              <p className="text-4xl font-bold">{stats.doctorsCount}</p>
            </div>

            <div className="bg-white rounded shadow p-6">
              <h2 className="text-xl font-semibold mb-2">Appointments</h2>
              <p className="text-4xl font-bold">{stats.appointmentsCount}</p>
            </div>

            <div className="bg-white rounded shadow p-6">
              <h2 className="text-xl font-semibold mb-2">Queue</h2>
              <p className="text-4xl font-bold">{stats.queueCount}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
