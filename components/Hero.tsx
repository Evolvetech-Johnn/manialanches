"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-verde-escuro via-verde-marmita to-preto-premium opacity-95"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[110%] mb-6">
              Marmitas caseiras, <span className="text-amarelo-marca">saborosas</span> e saudáveis
            </h1>
            <p className="text-lg md:text-xl leading-[170%] mb-8 text-gray-200">
              Almoço no local ou delivery rápido. Comida caseira como a da vovó!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(255,209,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-amarelo-marca text-preto-premium px-8 py-4 rounded-24 font-semibold text-lg transition-all"
              >
                Pedir via WhatsApp
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(46,125,50,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-verde-marmita text-white px-8 py-4 rounded-24 font-semibold text-lg transition-all"
              >
                Ver Cardápio
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-amarelo-marca rounded-full blur-3xl opacity-30"></div>
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
                alt="Marmita caseira com legumes e carne"
                width={600}
                height={600}
                className="relative rounded-24 shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
