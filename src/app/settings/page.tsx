"use client";

export default function SettingsPage() {
  return (
    <div className="container mx-auto pt-8 px-4 max-w-5xl min-h-screen">
      <div className="glass-effect rounded-2xl p-8 mb-12">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-medium">Theme</h2>
            <div className="flex items-center space-x-4">
              <button className="p-4 rounded-xl titanium-gradient border-2 border-white">
                Dark Titanium
              </button>
              <button className="p-4 rounded-xl bg-zinc-800 border border-zinc-700">
                Light
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-medium">Notifications</h2>
            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-500"></div>
                <span className="ml-3 text-zinc-300">Enable notifications</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
