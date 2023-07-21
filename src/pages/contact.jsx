import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const ThemeValue=useSelector((state)=>state.darkSlice.ThemeValue)
  return (
    <>
      <section id="contact" className={`${ThemeValue?"darkMode":""}`}>
        <div className="text text-center py-12">
        <h3 className="text-center ">Bizimle elaqe saxlayin</h3>
<p>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Eveniet, et.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, consequuntur?
</p>
        </div>
        <div className="w-4/5 m-auto pb-[10%]">

        <div className="grid gap-x-32 grid-cols-1 lg:grid-cols-2">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12157.17726126992!2d49.81057158715822!3d40.38016920000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6dac25bf3d%3A0x9078c77f64b0ce50!2sCompar%20Academy!5e0!3m2!1str!2saz!4v1689838521717!5m2!1str!2saz"
              width="600"
              height="450"
              style={{border:'0'}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className={`w-full ${ThemeValue?"invert":""}`}
            ></iframe>
          </div>
          <form action="" className="form"
             >
              <input class="inp1" type="text" placeholder="Adınız"/>
                                    <input class="inp2" type="text" placeholder="Elektron Poçtunuz"/>
                                    <input class="inp3" type="text" placeholder="Mövzu"/>
                                    <textarea id="message" cols="30" rows="5" placeholder="Mesajınız"></textarea>
                                    <button>Göndər</button>
             </form>
        </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
