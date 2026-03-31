export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-black text-white border-t border-white/30 scroll-mt-24">
            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-4xl font-bold mb-6">
                    Let's work together 🚀
                </h2>

                <p className="text-gray-400 mb-10">
                    I'm actively looking for Frontend Developer opportunities and open to exciting projects.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center">

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=thucmien2002@gmail.com"
                        target="_blank"
                        className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
                    >
                        Send Email
                    </a>

                    <a
                        href="https://github.com/thucmien2002"
                        target="_blank"
                        className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/thucmien/"
                        target="_blank"
                        className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
                    >
                        LinkedIn
                    </a>

                </div>

            </div>
        </section>
    );
}