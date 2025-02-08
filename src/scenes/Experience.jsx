import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="pt-32 pb-16">
    
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
        EXPERIENCE
        </p>
        <LineGradient width="mx-auto w-2/5" />
      
      </motion.div>

      {/* Experience */}
      <div className="md:flex md:justify-between gap-8">
        
        
        <motion.div 
         
           
          className="mx-auto relative bg-blue max-w-[420px] h-[372px] flex flex-col justify-end py-10 px-5 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
            
          initial="hidden"
          whileInView="visible"
          
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 }, 
            visible: { opacity: 1, scale: 1 },
          }}
         
        > 
          <p className="text-deep-blue font-playfair text-2xl">Machine Learning Engineer Intern</p>
          <p className="text-deep-blue font-playfair text-xl">
           <a className="hover:text-sky-900 hover:underline" href="https://edunetfoundation.org"> Edunet Foundation </a>| Dec 2024-Jan 2025
          </p>
          <p className="text-xl">Developed a machine learning model to classify emails as spam or non-spam.
          Preprocessed data using techniques like tokenization and vectorization.Improved skills in machine learning, NLP, and data analysis.</p>
          
        </motion.div>

        <motion.div 
           className="mx-auto relative bg-red max-w-[420px] h-[372px] flex flex-col justify-end py-5 px-5 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 }, 
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-deep-blue font-playfair text-2xl">Intern - Android App Developer</p>
          <p className="text-deep-blue font-playfair text-xl">
          <a className="hover:text-sky-950 hover:underline" href="https://jmkinfosoft.com/">JMK Infosoft Solutions Ltd</a> | Jan 2025-Present
          </p>
          <p className="text-xl">Developing an Android-based attendance application that allows users to scan QR codes to mark attendance.Enables users to scan dynamically generated QR codes for secure and automated attendance marking. </p>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Experience;
