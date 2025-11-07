import mockups from "../assets/mockups.png";
import phone from "../assets/phone.png";
import blank from "../assets/blank.png";
import itsonLogo from "../assets/itson.png";
import tecLogo from "../assets/tec.webp";
import ucaLogo from "../assets/UCA.jpg";
import ucsfLogo from "../assets/ucsf.png";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* nav bar */}
            <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
                <div className="text-2xl font-bold text-slate-900">Collabio</div>
                <div className="hidden md:flex gap-8 items-center">
                    <a href="#" className="text-slate-600 hover:text-slate-900">
                        Home
                    </a>
                    <a href="#how-it-works" className="text-slate-400 hover:text-slate-900">
                        How it works
                    </a>
                    <a href="#" className="text-slate-400">
                        Get QR
                    </a>
                    <a href="#" className="text-slate-400">
                        Schools
                    </a>
                </div>
                <button className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800">Sign up</button>
            </nav>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center px-6 py-20 max-w-4xl mx-auto text-center">
                <p className="text-slate-500 mb-6">Now live in Alpha!</p>
                <h1 className="text-6xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
                    Build Winning Teams
                    <br />
                    Maximize Your Results
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl">
                    Stop Guessing. Start Acing.
                    <br />
                    Form Project Teams That Actually Win.
                </p>
                <button className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 mb-12">Sign up</button>
            </section>

            {/* Mockups section - full viewport height, centered image */}
            <section className="w-full h-screen flex items-center justify-center bg-white">
                <div className="w-full h-full flex items-center justify-center">
                    <img
                        src={mockups}
                        alt="App mockups"
                        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                    />
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="px-6 py-20 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">How it works</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Three quick steps to form balanced, high-performing teams.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-2xl mb-4">📝</div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">1. Assess</h3>
                            <p className="text-slate-600">Students and teachers complete a quick, custom quiz covering technical skills, availability, and collaboration preferences.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-2xl mb-4">🤖</div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">2. Match</h3>
                            <p className="text-slate-600">Collabio's algorithm processes the data and generates suggested, balanced teams guaranteed to minimize friction and maximize efficiency.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center text-2xl mb-4">✅</div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">3. Collaborate</h3>
                            <p className="text-slate-600">Review the suggested team, approve it, and launch your project instantly with the confidence that you're set up for success.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* New feature/price section - panels separated with centered floating phone */}
            <section className="px-6 py-20 bg-transparent">
                <div className="max-w-6xl mx-auto relative">
                    {/* two panels side-by-side with gap; hidden on small screens */}
                    <div className="hidden md:flex items-center justify-center gap-12">
                        <div className="w-1/2 max-w-[560px] bg-sky-100 rounded-2xl p-10">
                            <h3 className="text-4xl font-serif text-slate-900 mb-6">Get a team in 5 minutes</h3>
                            <ol className="space-y-4 text-slate-700">
                                <li className="flex items-center gap-4 bg-white/70 p-4 rounded-lg"> <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center ring-1 ring-slate-200">1</span>Scan your class QR</li>
                                <li className="flex items-center gap-4 bg-white/70 p-4 rounded-lg"> <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center ring-1 ring-slate-200">2</span>Fill up the matching quiz</li>
                                <li className="flex items-center gap-4 bg-white/70 p-4 rounded-lg"> <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center ring-1 ring-slate-200">3</span>Meet your teamates!</li>
                            </ol>
                        </div>

                        <div className="w-1/2 max-w-[560px] bg-black text-white rounded-2xl p-10 text-right">
                            <h4 className="text-3xl font-serif mb-4">No cost now. No cost never</h4>
                            <div className="text-6xl font-bold mb-2">FREE</div>
                            <div className="text-sm text-slate-300 mb-6">Lifetime</div>
                            <button className="bg-white text-slate-900 px-6 py-2 rounded-full inline-block">Get my QR</button>
                        </div>
                    </div>

                    {/* Center phone image floating between the two panels */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-60 z-20 pointer-events-none">
                        <img src={phone} alt="Phone" className="w-72 md:w-96 lg:w-[520px] transform -rotate-x-12 drop-shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* Trusted logo grid - trusted by teams from around the world */}
            <div className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <h3 className="font-semibold text-sm text-gray-600 text-center">
                        TRUSTED BY SCHOOLS FROM AROUND THE WORLD
                    </h3>
                    <div className="mt-6">
                        <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                            <li>
                                <img src={itsonLogo} alt="ITSON" className="w-28 h-auto object-contain" />
                            </li>
                            <li>
                                <img src={tecLogo} alt="Tec" className="w-28 h-auto object-contain" />
                            </li>
                            <li>
                                <img src={ucaLogo} alt="UCA" className="w-28 h-auto object-contain" />
                            </li>
                            <li>
                                <img src={ucsfLogo} alt="UCSF" className="w-28 h-auto object-contain" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="px-6 py-20 max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
                    Ready to eliminate the #1 cause of project stress?
                </h2>
                <button className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800">Get started</button>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 px-6 py-12">
                <div className="max-w-6xl mx-auto flex items-center text-slate-600 text-sm w-full">
                    <div className="flex-1 text-left">
                        <p>© 2025 BLNK. All rights reserved.</p>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img src={blank} alt="Blank" className="h-8" />
                    </div>

                    <div className="flex-1 flex justify-end gap-6">
                        <a href="#" className="hover:text-slate-900">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-slate-900">
                            Terms
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
