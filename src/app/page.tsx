import SwaggerUIWrapper from '../components/SwaggerUIWrapper';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black py-10">
      <div className="max-w-5xl mx-auto rounded-lg shadow-sm border border-gray-100 overflow-hidden bg-white">
        <SwaggerUIWrapper />
      </div>
    </main>
  );
}
