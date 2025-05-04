"use client";

export default function ProfilePage() {
  return (
    <div className="container mx-auto pt-8 px-4 max-w-5xl min-h-screen">
      <div className="glass-effect rounded-2xl p-8 mb-12">
        <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
        <div className="space-y-4">
          <div className="titanium-gradient rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Account Information</h2>
            <div className="space-y-2">
              <p className="text-zinc-400">
                Username: <span className="text-white">username</span>
              </p>
              <p className="text-zinc-400">
                Email: <span className="text-white">user@example.com</span>
              </p>
              <p className="text-zinc-400">
                Plan: <span className="text-white">Premium</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
