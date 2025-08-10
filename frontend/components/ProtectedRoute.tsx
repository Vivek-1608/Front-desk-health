// /components/ProtectedRoute.tsx
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { JSX, useEffect } from 'react';

interface Props {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: Props) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login'); // redirect if not logged in
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div>Loading...</div>; // or a spinner
  }

  return children;
}
