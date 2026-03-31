export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-black text-white scroll-mt-24">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">
                        About Me
                    </h2>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                        I’m a Frontend Engineer with 2+ years of experience building data-driven web applications and admin dashboards using React, TypeScript, and Redux Toolkit.
                    </p>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                        I specialize in handling complex data workflows, optimizing performance for large datasets (up to 10,000 rows), and building reusable component systems.
                    </p>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                        I have experience developing Excel-like interfaces, warehouse management systems, and high-performance UI for operational platforms.
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold mb-3">
                            What I do best
                        </h3>

                        <ul className="space-y-2 text-gray-400">
                            <li>• Build complex data-driven UI</li>
                            <li>• Optimize performance for large datasets</li>
                            <li>• Develop Excel-like interactive systems</li>
                            <li>• Design reusable component architectures</li>
                        </ul>
                    </div>
                </div>

                {/* Right - Skills */}
                <div className="grid grid-cols-2 gap-4">
                    {[
                        "React.js",
                        "TypeScript",
                        "Redux Toolkit",
                        "React Native",
                        "Expo",
                        "Material UI",
                        "REST API",
                        "Git",
                    ].map((skill, index) => (
                        <div
                            key={index}
                            className="p-4 border border-white/10 rounded-xl bg-white/5 text-center hover:bg-white/10 transition"
                        >
                            {skill}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}