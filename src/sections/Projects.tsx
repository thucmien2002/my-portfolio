import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-black text-white scroll-mt-24">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold mb-12 text-center">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300"
                        >
                            {/* Title */}
                            <h3 className="text-2xl font-semibold mb-3">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 mb-4">
                                {project.desc}
                            </p>

                            {/* Highlights */}
                            <ul className="text-sm text-gray-400 mb-4 space-y-1">
                                {project.highlights.map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>

                            {/* Tech */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1 bg-white/10 rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Note */}
                            <p className="text-xs text-gray-500 italic">
                                {project.note}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

const projects = [
    {
        title: "Production Management System",
        desc: "Built high-performance UI for operational data management, optimizing rendering for datasets up to 10,000 rows.",
        tech: [
            "React + TypeScript",
            "Redux Toolkit (State Management)",
            "Performance Optimization",
            "Virtualized Rendering (react-window)",
            "Memoization (useMemo, useCallback)"
        ],
        highlights: [
            "Handled large datasets (10,000+ rows)",
            "Optimized rendering performance significantly",
            "Reduced unnecessary re-renders"
        ],
        note: "Confidential enterprise project – cannot be publicly shared.",
    },

    {
        title: "Excel-like Data Entry System",
        desc: "Developed advanced spreadsheet-like interface with complex user interactions and validation logic.",
        tech: [
            "React + TypeScript",
            "Material UI / Data Grid",
            "Custom Keyboard Navigation",
            "Clipboard API (Copy/Paste)",
            "Dynamic Form Handling"
        ],
        highlights: [
            "Built Excel-like UX",
            "Implemented keyboard shortcuts & navigation",
            "Handled complex validation logic"
        ],
        note: "Confidential enterprise project – cannot be publicly shared.",
    },

    {
        title: "Warehouse Management System",
        desc: "Developed cross-platform system supporting web and mobile devices for warehouse operations.",
        tech: [
            "React (Web) + React Native (Mobile)",
            "Expo",
            "Redux Toolkit",
            "Offline-first Architecture",
            "API Synchronization Queue"
        ],
        highlights: [
            "Built mobile app for handheld devices",
            "Implemented offline sync mechanism",
            "Managed complex nested data structures"
        ],
        note: "Confidential enterprise project – cannot be publicly shared.",
    },

    {
        title: "Reusable Component Library",
        desc: "Designed scalable UI component system to standardize development across projects.",
        tech: [
            "React + TypeScript",
            "Component Architecture Design",
            "Custom Hooks",
            "Reusable UI System",
            "Styling (MUI / Styled Components)"
        ],
        highlights: [
            "Improved development speed by ~30%",
            "Standardized UI across projects",
            "Enhanced maintainability"
        ],
        note: "Internal project – not publicly available.",
    },
];