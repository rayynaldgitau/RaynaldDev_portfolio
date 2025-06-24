import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com'
import { useState } from "react";
export const Contact = () => {
  const[formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",

  });



    const handleSubmit = (e) => {
      e.preventDefault();


      emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({name: "", email: "", message: ""});
      }).catch(() => alert("Oops! Something went wrong. please try again later."));
    };

  return <section id = "contact" className="min-h-screen flex items-center justify-center py-20"
  >
    <RevealOnScroll>
      <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent text-center"
        > Get In Touch 
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input 
            type="text" 
            name="name"
             id="name" 
             required
             value={formData.name} 
             placeholder="Your Name" 
             className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-amber-500 focus:bg-amber-500/5"
             onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            />
          </div>

           <div className="relative">
            <input 
            type="email" 
            name="email"
             id="email" 
             required
             value={formData.email}
             placeholder="example@gmail.com" 
             className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-amber-500 focus:bg-amber-500/5"
             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

           <div className="relative">
            <textarea 
             name="message"
             id="message" 
             required
             value={formData.message}
             rows={6} 
             placeholder="Your Message" 
             className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-amber-500 focus:bg-amber-500/5"
             onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button type="submit" className="w-full bg-amber-500 text-white py-3 px-6 rounded hover:bg-amber-400 transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Send Message</button>
        </form>

      </div>
    </RevealOnScroll>

  </section>
}