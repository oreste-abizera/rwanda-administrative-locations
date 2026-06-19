import SwaggerUIWrapper from "../components/SwaggerUIWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-black py-10 flex flex-col">
      <div className="flex-grow max-w-5xl w-full mx-auto rounded-lg shadow-sm border border-gray-200 overflow-hidden bg-white mb-8">
        <SwaggerUIWrapper />
      </div>

      <footer className="w-full text-center py-6 text-gray-500 text-sm">
        <p>
          Built by{" "}
          <span className="font-semibold text-gray-700">Oreste Abizera</span>.
          Visit{" "}
          <a
            href="https://oreste.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            oreste.dev
          </a>{" "}
          for more.
        </p>
      </footer>
    </main>
  );
}
