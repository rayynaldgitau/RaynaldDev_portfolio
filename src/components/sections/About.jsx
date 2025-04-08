import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {

     const frontendSkills = [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Bootstrap",
          "VueJs",
     ];

     const backendSkills = [
          "Node.js",
          "Express.js",
          "Django",
          "MongoDB",
          "MySQL",
     ];

     return <section id="about" className="min-h-screen flex items-center justify-center py-20"
     >
          <RevealOnScroll>

          <div className="max-w-3xl mx-auto px-4">
               <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent text-center"
               >
                    About Me
               </h2>

               <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 translation-all">
                    <p className="text-grey-300 mb-6">
                         Passionate developer with expertise in building scalable and efficient web applications, software solutions and creating innovative solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                              <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                              <div className="flex flex-wrap gap-2">
                                   {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-amber-500/20 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 
                                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                        ">
                                             {tech}
                                        </span>
                                   ))}
                              </div>
                         </div>

                         <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                              <h3 className="text-xl font-bold mb-4"> Backend </h3>
                              <div className="flex flex-wrap gap-2">
                                   {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-amber-500/20 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 
                                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                        ">
                                             {tech}
                                        </span>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                                   <h3 className="text-xl font-bold mb-4 "> 🏫 Education </h3>
                                   <ul className="list-disc list-inside text-grey-300 space-y-2">
                                        <li>
                                             <strong>Diploma in Software Development</strong> - Institute of Software Technologies (2023-2024)
                                        </li>
                                        <li>
                                             Relevant Coursework: Web Development, Android Development, Database Management, Data Structures.
                                        </li>
                                        <li>
                                             <strong>Certificate in Software Development</strong> - Emobilis Institution (2023)
                                        </li>
                                        <li>
                                             Relevant Coursework: Web Development, Android Development.
                                        </li>
                                   </ul>

                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                                   <h3 className="text-xl font-bold mb-4 "> 💼 Work Experience </h3>
                                   <div className="space-y-4 text-grey-300">
                                        <div>
                                             <h4 className="font-semibold">Home tutor for simple HTML CSS (2022 - Present)</h4>
                                             <p>Helped students learn the basics of HTML and CSS.</p>
                                        </div>
                                        
                                   </div>

                    </div>
               </div>     
          </div>
          </RevealOnScroll> 

     </section>
}