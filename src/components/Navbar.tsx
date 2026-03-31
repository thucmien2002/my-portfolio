export default function Navbar({ dark, setDark }: NavbarProps) {
    return (
        <div
            className="
fixed top-0 left-0 w-full z-50 backdrop-blur-md
bg-black/30
border-b border-white/10
"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

                {/* Logo */}
                <button
                    onClick={() => {
                        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-xl font-bold hover:opacity-70 transition cursor-pointer"
                >
                    Mien.dev
                </button>

                {/* Menu */}
                <div className="hidden md:flex gap-8 text-gray-300">
                    <a href="#about" className="hover:text-white transition">About</a>
                    <a href="#projects" className="hover:text-white transition">Projects</a>
                    <a href="#contact" className="hover:text-white transition">Contact</a>
                </div>

                {/* Button */}
                <div className="flex items-center gap-4">
                    <a
                        href="/TranVoThucMien_Frontend_Developer_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
                    >
                        Resume
                    </a>

                    <button
                        onClick={() => setDark(!dark)}
                        className="p-2 border border-white rounded-lg hover:bg-white hover:text-black transition transform hover:scale-110"
                    >
                        {dark ? "🌙" : "☀️"}
                    </button>
                </div>
            </div>
        </div>
    );
};

type NavbarProps = {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
};