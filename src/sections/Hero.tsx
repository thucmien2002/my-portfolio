export default function Hero() {
    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center text-center px-6 relative
             bg-black text-white"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-blue-600/20 blur-3xl -z-10"></div>            <div className="relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Hi, I'm Miên 👋
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Frontend Engineer with 2+ years of experience building scalable data-driven applications and optimizing high-performance UI.
                </p>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => {
                            const el = document.getElementById("contact");
                            el?.scrollIntoView({ behavior: "smooth" });

                            setTimeout(() => {
                                el?.classList.add("ring-2", "ring-white");
                            }, 400);
                        }}
                        className="px-6 py-3 bg-black text-white rounded-xl font-semibold hover:scale-105 transition"
                    >
                        Contact Me
                    </button>

                    <button
                        onClick={() => {
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
                    >
                        View Projects
                    </button>
                </div>
            </div>
        </section>
    );
}