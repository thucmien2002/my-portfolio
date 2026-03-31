export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-white text-slate-900 dark:bg-slate-950 dark:text-white border-t border-slate-200 dark:border-white/30 scroll-mt-24 transition-colors">
            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-4xl font-bold mb-6">
                    Let's work together 🚀
                </h2>

                <p className="text-slate-600 dark:text-slate-400 mb-10">
                    I'm actively looking for Frontend Developer opportunities and open to exciting projects.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=thucmien2002@gmail.com"
                        target="_blank"
                        className="px-6 py-3 bg-slate-950 text-white dark:bg-white dark:text-black rounded-xl font-semibold hover:scale-105 transition"
                    >
                        Send Email
                    </a>

                    <a
                        href="https://github.com/thucmien2002"
                        target="_blank"
                        className="px-6 py-3 border border-slate-300 dark:border-white rounded-xl hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/thucmien/"
                        target="_blank"
                        className="px-6 py-3 border border-slate-300 dark:border-white rounded-xl hover:bg-slate-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                    >
                        LinkedIn
                    </a>

                </div>

            </div>
        </section>
    );
}
