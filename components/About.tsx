"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-verde-escuro to-verde-marmita">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-amarelo-marca rounded-full blur-3xl opacity-20"></div>
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600"
                alt="Marmitaria Mania Lanches"
                width={600}
                height={450}
                className="relative rounded-24 shadow-2xl"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sobre a <span className="text-amarelo-marca">Mania Lanches</span>
            </h2>
            <p className="text-lg leading-[170%] mb-6 text-gray-200">
              Há mais de 10 anos preparando marmitas caseiras com ingredientes frescos e muito amor.
            </p>
            <p className="text-lg leading-[170%] mb-8 text-gray-200">
              Nossa missão é fazer você sentir o sabor da comida de casa, com toda a conveniência. Almoce no local ou peça delivery!
            </p>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(255,209,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-amarelo-marca text-preto-premium px-8 py-4 rounded-24 font-semibold text-lg transition-all"
            >
              Ver Localização
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
