import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "AI / ML Development",
    desc: "Custom development of machine learning models, neural networks, and computer vision solutions tailored to real-world business problems.",
    score: "96%",
    icon: "🤖",
  },
  {
    title: "Institutional Training",
    desc: "Industry-focused training programs for colleges and institutes, covering modern AI tools and real-world development workflows.",
    score: "92%",
    icon: "🎓",
  },
  {
    title: "Hackathon Solutions",
    desc: "End-to-end hackathon support — from idea validation to rapid prototyping and pitch-ready project development.",
    score: "89%",
    icon: "🚀",
  },
  {
    title: "Intelligent Chatbots",
    desc: "AI-powered conversational chatbots to automate customer support, lead generation, and internal workflows.",
    score: "94%",
    icon: "💬",
  },
  {
    title: "Data Analytics",
    desc: "Transform raw data into meaningful insights using advanced analytics, dashboards, and visualization techniques.",
    score: "91%",
    icon: "📊",
  },
  {
    title: "Idea Incubation",
    desc: "From a rough startup idea to a working prototype — we help you define the roadmap, tech stack, and MVP development.",
    score: "90%",
    icon: "💡",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);        // ✅ animate once
          observer.disconnect();  // ❌ stop observing
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-white py-28 px-6 overflow-hidden"
    >
      {/* Header */}
      <div
        className={`
          max-w-5xl mx-auto text-center mb-20
          transition-all duration-700 ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        <span className="inline-flex items-center gap-2 mb-4 text-xs font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full">
          • Services
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
          Everything you need to build & scale your ideas
        </h2>

        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
          We provide end-to-end technical solutions, training, and startup
          guidance to help students, developers, and founders succeed.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 120}ms` }}
            className={`
              group
              transition-all duration-700 ease-out
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
              bg-gradient-to-br from-blue-600 to-blue-500
              rounded-2xl p-6 text-white
              shadow-lg
              hover:shadow-2xl hover:shadow-blue-500/40
              hover:-translate-y-2 hover:scale-[1.04]
            `}
          >
            {/* Inner UI box */}
            <div
              className="
                mb-5 rounded-xl
                bg-white/15 p-4 backdrop-blur-md
                border border-white/20
                transition-all duration-500
                group-hover:bg-white/20
                group-hover:-translate-y-1
              "
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl">{item.icon}</span>

                <span className="text-xs bg-white/20 px-2 py-1 rounded-full group-hover:scale-110 group-hover:bg-white/30 transition">
                  {item.score}
                </span>
              </div>

              <div className="h-2 w-2/3 bg-white/30 rounded mb-2"></div>
              <div className="h-2 w-1/2 bg-white/20 rounded"></div>
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-blue-100 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
