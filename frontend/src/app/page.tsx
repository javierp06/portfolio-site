import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <section className="flex flex-col items-center justify-center text-center py-20 md:py-32">

        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Javier Puerto
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Cybersecurity & Software Development
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Welcome to my digital space. Here I document my journey, projects, and findings in the world of technology and security.
        </p>

        <Link 
          href="/projects"
          className="mt-8 inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Explore My Projects
        </Link>

      </section>
    </div>
  );
}