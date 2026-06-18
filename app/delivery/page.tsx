"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Delivery() {
  return (
    <>
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-verde-escuro via-verde-marmita to-preto-premium opacity-95"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Delivery <span className="text-amarelo-marca">Rápido e Seguro</span>
              </h1>
              <p className="text-lg leading-[170%] mb-8 text-gray-200">
                Receba suas marmitas quentes e saborosas na sua casa, em até 40 minutos! Pedido rápido, fácil e seguro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,209,0,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-amarelo-marca text-preto-premium px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
                >
                  Pedir via WhatsApp
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(46,125,50,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-verde-marmita text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
                >
                  Ver Cardápio
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-amarelo-marca rounded-full blur-3xl opacity-20"></div>
                <Image
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600"
                  alt="Delivery de marmitas"
                  width={600}
                  height={450}
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-preto-premium">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como <span className="text-amarelo-marca">Funciona</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Pedir a sua marmita favorita nunca foi tão fácil!
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Escolha",
                description: "Navegue pelo nosso cardápio e escolha as suas marmitas favoritas."
              },
              {
                number: "02",
                title: "Peça",
                description: "Entre em contato via WhatsApp e faça o seu pedido de forma rápida e segura."
              },
              {
                number: "03",
                title: "Receba",
                description: "Aguarde o nosso entregador e receba seu pedido quentinho na sua porta!"
              }
            ].map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ translateY: -4, scale: 1.02 }}
                className="bg-gray-900 rounded-2xl p-8 text-center"
              >
                <div className="text-amarelo-marca text-5xl font-bold mb-4">{item.number}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-[170%]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
