"use client";

import { motion } from "framer-motion";

export default function Contato() {
  return (
    <section className="py-12 md:py-20 bg-preto-premium">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Entre em <span className="text-amarelo-marca">Contato</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tem alguma dúvida ou sugestão? Entre em contato conosco!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Nome completo</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white focus:border-amarelo-marca focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white focus:border-amarelo-marca focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Mensagem</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white focus:border-amarelo-marca focus:outline-none transition-colors resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,209,0,0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-amarelo-marca text-preto-premium py-4 rounded-xl font-semibold text-lg transition-all"
              >
                Enviar mensagem
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Informações</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amarelo-marca flex items-center justify-center flex-shrink-0">
                    <span className="text-preto-premium font-bold">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                    <p className="text-gray-400">Rua dos Hambúrgueres, 123 - Centro</p>
                    <p className="text-gray-400">Cidade - Estado</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amarelo-marca flex items-center justify-center flex-shrink-0">
                    <span className="text-preto-premium font-bold">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <p className="text-gray-400">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amarelo-marca flex items-center justify-center flex-shrink-0">
                    <span className="text-preto-premium font-bold">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">E-mail</h3>
                    <p className="text-gray-400">contato@manialanches.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amarelo-marca flex items-center justify-center flex-shrink-0">
                    <span className="text-preto-premium font-bold">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Horário de funcionamento</h3>
                    <p className="text-gray-400">Seg - Sex: 18:00 - 00:00</p>
                    <p className="text-gray-400">Sáb - Dom: 16:00 - 00:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden h-64">
              <div className="w-full h-full bg-gradient-to-br from-bordô to-vermelho-escuro flex items-center justify-center">
                <p className="text-gray-300 text-lg">Mapa da localização</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
