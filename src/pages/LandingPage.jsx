import mockups from "../assets/mockups.png";
import phone from "../assets/phone.png";
import blank from "../assets/blank.png";
import itsonLogo from "../assets/itson.png";
import tecLogo from "../assets/tec.webp";
import ucaLogo from "../assets/UCA.jpg";
import ucsfLogo from "../assets/ucsf.png";

// Importa tus 5 imágenes de demostración aquí
import demo1 from "../assets/demo1.jpg";
import demo2 from "../assets/demo2.jpg";
import demo3 from "../assets/demo3.jpg";
import demo4 from "../assets/demo4.jpg";
import demo5 from "../assets/demo5.jpg";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* nav bar */}
            <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
                <div className="text-2xl font-bold text-slate-900">Collabio</div>
                <div className="hidden md:flex gap-8 items-center">
                    <a href="#" className="text-slate-600 hover:text-slate-900">
                        Inicio
                    </a>
                    <a href="#how-it-works" className="text-slate-400 hover:text-slate-900">
                        Cómo funciona
                    </a>
                    <a href="#" className="text-slate-400">
                        Obtener QR
                    </a>
                    <a href="#" className="text-slate-400">
                        Escuelas
                    </a>
                </div>
                <button className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800">Registrarse</button>
            </nav>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center px-6 py-20 max-w-4xl mx-auto text-center">
                <p className="text-slate-500 mb-6">¡Ahora disponible en Alpha!</p>
                <h1 className="text-6xl md:text-6xl font-serif text-slate-900 leading-tight mb-6">
                    Construye Equipos Ganadores
                    <br />
                    Maximiza Tus Resultados
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl">
                    Deja de Adivinar. Comienza a Triunfar.
                    <br />
                    Forma Equipos de Proyecto que Realmente Ganan.
                </p>
                <button className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 mb-12">Registrarse</button>
            </section>

            {/* Mockups section - full viewport height, centered image */}
            <section className="w-full h-screen flex items-center justify-center bg-white">
                <div className="w-full h-full flex items-center justify-center">
                    <img
                        src={mockups}
                        alt="Maquetas de la app"
                        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                    />
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="px-6 py-20 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Cómo funciona</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Tres pasos rápidos para formar equipos balanceados y de alto rendimiento.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-2xl mb-4">📝</div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">1. Evaluar</h3>
                            <p className="text-slate-600">Los estudiantes y profesores completan un cuestionario rápido y personalizado que cubre habilidades técnicas, disponibilidad y preferencias de colaboración.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-2xl mb-4">🤖</div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">2. Emparejar</h3>
                            <p className="text-slate-600">El algoritmo de Collabio procesa los datos y genera equipos sugeridos y balanceados, garantizando minimizar fricciones y maximizar eficiencia.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center text-2xl mb-4">✅</div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">3. Colaborar</h3>
                            <p className="text-slate-600">Revisa el equipo sugerido, apruébalo y lanza tu proyecto instantáneamente con la confianza de que estás preparado para el éxito.</p>
                        </div>
                    </div>
                </div>
            </section>

            

            {/* Demo Screenshots Gallery */}
            <section className="px-6 py-20 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Ve Collabio en acción</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Descubre cómo nuestra plataforma simplifica la formación de equipos</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Demo 1 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                            <img 
                                src={demo1} 
                                alt="Demostración 1 - Escanear QR" 
                                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <p className="text-white p-6 font-medium">Escanea el código QR de tu clase</p>
                            </div>
                        </div>

                        {/* Demo 2 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                            <img 
                                src={demo2} 
                                alt="Demostración 2 - Cuestionario" 
                                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <p className="text-white p-6 font-medium">Completa el cuestionario personalizado</p>
                            </div>
                        </div>

                        {/* Demo 3 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                            <img 
                                src={demo3} 
                                alt="Demostración 3 - Algoritmo" 
                                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <p className="text-white p-6 font-medium">El algoritmo crea equipos balanceados</p>
                            </div>
                        </div>

                        {/* Demo 4 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                            <img 
                                src={demo4} 
                                alt="Demostración 4 - Equipos" 
                                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <p className="text-white p-6 font-medium">Conoce a tus compañeros de equipo</p>
                            </div>
                        </div>

                        {/* Demo 5 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1">
                            <img 
                                src={demo5} 
                                alt="Demostración 5 - Colaboración" 
                                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <p className="text-white p-6 font-medium">Comienza a colaborar de inmediato</p>
                            </div>
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
                            <h3 className="text-4xl font-serif text-slate-900 mb-6">Obtén un equipo en 5 minutos</h3>
                            <ol className="space-y-4 text-slate-700">
                                <li className="flex items-center gap-4 bg-white/70 p-4 rounded-lg"> <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center ring-1 ring-slate-200">1</span>Escanea el QR de tu clase</li>
                                <li className="flex items-center gap-4 bg-white/70 p-4 rounded-lg"> <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center ring-1 ring-slate-200">2</span>Llena el cuestionario de emparejamiento</li>
                                <li className="flex items-center gap-4 bg-white/70 p-4 rounded-lg"> <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center ring-1 ring-slate-200">3</span>¡Conoce a tus compañeros de equipo!</li>
                            </ol>
                        </div>

                        <div className="w-1/2 max-w-[560px] bg-black text-white rounded-2xl p-10 text-right">
                            <h4 className="text-3xl font-serif mb-4">Sin costo ahora. Sin costo nunca</h4>
                            <div className="text-6xl font-bold mb-2">GRATIS</div>
                            <div className="text-sm text-slate-300 mb-6">De por vida</div>
                            <button className="bg-white text-slate-900 px-6 py-2 rounded-full inline-block">Obtener mi QR</button>
                        </div>
                    </div>

                    {/* Center phone image floating between the two panels */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-60 z-20 pointer-events-none">
                        <img src={phone} alt="Teléfono" className="w-72 md:w-96 lg:w-[520px] transform -rotate-x-12 drop-shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* Trusted logo grid - trusted by teams from around the world */}
            <div className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <h3 className="font-semibold text-sm text-gray-600 text-center">
                        CONFIADO POR ESCUELAS DE TODO EL MUNDO
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
                    ¿Listo para eliminar la causa #1 de estrés en proyectos?
                </h2>
                <button className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800">Comenzar</button>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 px-6 py-12">
                <div className="max-w-6xl mx-auto flex items-center text-slate-600 text-sm w-full">
                    <div className="flex-1 text-left">
                        <p>© 2025 BLNK. Todos los derechos reservados.</p>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img src={blank} alt="Blank" className="h-8" />
                    </div>

                    <div className="flex-1 flex justify-end gap-6">
                        <a href="#" className="hover:text-slate-900">
                            Privacidad
                        </a>
                        <a href="#" className="hover:text-slate-900">
                            Términos
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}