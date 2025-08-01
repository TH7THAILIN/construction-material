'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function SignInPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome, {session.user?.name}!</h1>
        <p className="mb-4">You are signed in as {session.user?.email}</p>
        <button
          onClick={() => signOut()}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-6">Sign In to Construction Material Shop</h1>
      <button
        onClick={() => signIn('google')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Sign in with Google
      </button>
    </div>
  );
}
