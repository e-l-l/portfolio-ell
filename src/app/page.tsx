import ChatInput from "@/components/ChatInput";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import ParticleSphereWrapper from "@/components/ParticleSphereWrapper";

export default function Home() {
  return (
    <>
      {/* Background Particle Sphere */}
      <ParticleSphereWrapper />

      <div className="flex flex-col items-center justify-center min-h-screen p-4 relative">
        {/* Greeting Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
            Welcome to Titanium
          </h1>
          <p className="text-zinc-400 mt-2 text-lg">
            The next generation AI assistant platform
          </p>
        </div>

        {/* Chat Input Section */}
        <ChatInput minHeight="120px" />

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl w-full mt-4">
          {[
            { title: "Smart Responses", description: "Powered by advanced AI" },
            { title: "Private", description: "Your data stays secure" },
            { title: "Customizable", description: "Tailor to your needs" },
            { title: "24/7 Available", description: "Always ready to help" },
          ].map((feature, index) => (
            <Card
              key={index}
              className="titanium-gradient border-zinc-800 backdrop-blur-sm bg-black/20"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-white">{feature.title}</CardTitle>
                <CardDescription className="text-zinc-400">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
