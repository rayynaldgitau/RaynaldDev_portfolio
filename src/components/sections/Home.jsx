import { RevealOnScroll } from "../RevealOnScroll"
export const Home =() =>{
     return <section id="home" className="min-h-screen flex items-center justify-center relative"
     >
          <RevealOnScroll>
               <div className="text-centre z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right"
                    >Hi, I'm Raynald Gitau
                    </h1>

                    <p className="text-grey-400 text-lg mb-8 max-w-lg mx-auto">
                         I'm a full-stack developer with a passion for creating dynamic and responsive web applications.
                         I love turning ideas into reality through code, my goal is to build solutions that offer both exceptional performance and a delightful user experience.
                    </p>
                    <div className="flex justify-center space-x-4">
                         <a href="#projects" className="bg-amber-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                              View Projects
                         </a>

                         <a href="#contact" className="border border-blue-500/50 text-amber-500 py-3 px-6 rounded font-medium translation-all duration-200  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                              Contact Me
                         </a>
                    </div>
               </div>
          </RevealOnScroll>
     </section>
}