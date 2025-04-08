import { RevealOnScroll } from "../RevealOnScroll"
export const Projects = () => {
     return <section id="projects" className="min-h-screen flex items-center justify-center py-20"
            >
               <RevealOnScroll>
                    <div className="max-w-5xl max-auto px-4">
                         <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent text-center"
                         >
                              Featured Projects
                         </h2>
                         <div className="gird grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                   <h3 className="text-xl font-bold mb-2 ">Jobify Android App</h3>
                                   <p className="text-grey-400 mb-4">Jobify is a job search app that allows users to search for jobs based on their skills . It provides a user-friendly interface.
                                   </p>
                                   <div className="flex flex-wrap gap-2 mb-4">
                                        {["Kotlin", "Firebase Storage", "Firebase Realtime Database"].map((tech, key)=>(
                                             <span key={key} className="bg-amber-500/20 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 
                                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                             ">
                                                  {tech}
                                             </span>
                                        ))}
                                   </div>

                                   <div className="flex justify-between items-center">
                                        <a href="https://github.com/rayynaldgitau/Mobile-app-.git" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                                   </div>
                              </div>

                              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                   <h3 className="text-xl font-bold mb-2 ">Art Space</h3>
                                   <p className="text-grey-400 mb-4">Art Space is a web application that allows users to create and share their art. It provides a platform for artists to showcase their work and connect with other artists.
                                   </p>
                                   <div className="flex flex-wrap gap-2 mb-4">
                                        {["Kotlin"].map((tech, key)=>(
                                             <span key={key} className="bg-amber-500/20 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 
                                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                             ">
                                                  {tech}
                                             </span>
                                        ))}
                                   </div>

                                   <div className="flex justify-between items-center">
                                        <a href="https://github.com/rayynaldgitau/ArtSpace.git" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                                   </div>
                              </div>

                              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                   <h3 className="text-xl font-bold mb-2 ">Simple Modern Calculator</h3>
                                   <p className="text-grey-400 mb-4">Simple Modern Calculator is a web application that allows users to perform basic arithmetic operations. It provides a simple and modern interface for users to perform calculations.
                                   </p>
                                   <div className="flex flex-wrap gap-2 mb-4">
                                        {["JavaScript"].map((tech, key)=>(
                                             <span key={key} className="bg-amber-500/20 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 
                                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                             ">
                                                  {tech}
                                             </span>
                                        ))}
                                   </div>

                                   <div className="flex justify-between items-center">
                                        <a href="https://github.com/rayynaldgitau/Simple-mordern-calculator.git" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </RevealOnScroll>
            </section>
}