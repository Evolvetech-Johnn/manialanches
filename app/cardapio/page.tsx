"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const menuItems = [
  {
    id: 1,
    name: "X-Mania",
    description: "Hambúrguer artesanal, queijo cheddar, bacon crocante, alface, tomate e molho especial",
    price: "R$ 34,90",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400",
    category: "Hambúrgueres"
  },
  {
    id: 2,
    name: "Duplo Burguer",
    description: "Dois hambúrgueres, queijo prato, cebola caramelizada e molho barbecue",
    price: "R$ 39,90",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=400",
    category: "Hambúrgueres"
  },
  {
    id: 3,
    name: "Veggie Delight",
    description: "Hambúrguer de quinoa, abacate, espinafre e molho de iogurte",
    price: "R$ 29,90",
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&q=80&w=400",
    category: "Hambúrgueres"
  },
  {
    id: 4,
    name: "X-Bacon",
    description: "Hambúrguer, bacon, queijo cheddar, cebola e molho especial",
    price: "R$ 32,90",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400",
    category: "Hambúrgueres"
  },
  {
    id: 5,
    name: "Batata Frita Crocante",
    description: "Porção de batatas fritas crocantes, temperadas e com cheddar",
    price: "R$ 14,90",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400",
    category: "Porções"
  },
  {
    id: 6,
    name: "Onion Rings",
    description: "Anéis de cebola crocantes, servidos com molho barbecue",
    price: "R$ 16,90",
    image: "https://images.unsplash.com/photo-1639025966081-b14148a680f4?auto=format&fit=crop&q=80&w=400",
    category: "Porções"
  },
  {
    id: 7,
    name: "Milk Shake de Chocolate",
    description: "Milk shake cremoso de chocolate com chantilly",
    price: "R$ 12,90",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400",
    category: "Bebidas e Sobremesas"
  },
  {
    id: 8,
    name: "Refrigerante",
    description: "Lata de refrigerante de diversos sabores",
    price: "R$ 5,90",
    image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?auto=format&fit=crop&q=80&w=400",
    category: "Bebidas e Sobremesas"
  }
];

const categories = ["Todos", "Hambúrgueres", "Porções", "Bebidas e Sobremesas"];

export default function Cardapio() {
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
            Nosso <span className="text-amarelo-marca">Cardápio</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Escolha o que mais te deixa com fome. Todos preparados com ingredientes frescos!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                index === 0
                  ? "bg-amarelo-marca text-preto-premium"
                  : "bg-gray-800 text-white hover:bg-vermelho-principal"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ translateY: -4, scale: 1.02 }}
              className="bg-gray-900 rounded-2xl overflow-hidden"
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
                <span className="text-amarelo-marca text-sm font-medium mb-2 inline-block">
                  {item.category}
                </span>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-semibold">{item.name}</h3>
                  <span className="text-amarelo-marca font-bold text-xl">{item.price}</span>
                </div>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(255,209,0,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-amarelo-marca text-preto-premium py-3 rounded-xl font-semibold transition-all"
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
