"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const menuItems = [
  {
    id: 1,
    name: "Marmita Tradicional",
    description: "Arroz, feijão, carne moída, legumes e salada",
    price: "R$ 22,90",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "Marmita de Frango",
    description: "Arroz, feijão, frango à passarinho, purê e salada",
    price: "R$ 24,90",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "Marmita Vegetariana",
    description: "Arroz, feijão, legumes salteados, tofu e salada",
    price: "R$ 21,90",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    name: "Marmita Especial",
    description: "Arroz, feijão, picanha fatiada, batata e salada",
    price: "R$ 32,90",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 5,
    name: "Suco Natural",
    description: "Suco de laranja, uva ou maracujá natural",
    price: "R$ 6,90",
    image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 6,
    name: "Pudim de Leite",
    description: "Pudim de leite cremoso, como a da vovó",
    price: "R$ 8,90",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=400",
  },
];

export function Menu() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-preto-premium">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nosso <span className="text-amarelo-marca">Cardápio</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Escolha a marmita que mais combina com você! Todas feitas com ingredientes frescos.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ translateY: -4, scale: 1.02 }}
              className="bg-gray-900 rounded-24 overflow-hidden"
            >
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-semibold">{item.name}</h3>
                  <span className="text-amarelo-marca font-bold text-xl">{item.price}</span>
                </div>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(46,125,50,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-verde-marmita text-white py-3 rounded-20 font-semibold transition-all"
                >
                  Pedir agora
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
