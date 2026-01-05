const Home = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-screen
        flex items-center justify-center
        bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500
        px-6
        overflow-hidden
      "
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_65%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Build Any Project <br className="hidden sm:block" />
          With Confidence & Clarity
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-blue-100 max-w-3xl mx-auto">
          From websites and mobile apps to college projects and internship
          support — Buildora helps you learn, build, and grow with real-world
          guidance.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#contact"
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold shadow-lg transition hover:scale-105"
          >
            Get Started →
          </a>

          <a
            href="#services"
            className="bg-blue-500/30 border border-white/30 text-white px-10 py-4 rounded-xl font-semibold backdrop-blur-md transition hover:scale-105"
          >
            Explore Services
          </a>
        </div>

        <div className="mt-16 mx-auto max-w-4xl rounded-2xl bg-white/15 backdrop-blur-lg px-6 py-5">
          <p className="text-xs sm:text-sm text-blue-100">
            Trusted by students, developers, and startups for projects,
            internships, and technical guidance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
