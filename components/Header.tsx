"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-preto-premium/95 backdrop-blur-md border-b border-vermelho-principal/20"
    >
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Logomanialanches.png"
              alt="Mania Lanches Logo"
              width={80}
              height={80}
              className="h-16 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-amarelo-marca transition-colors font-medium"
            >
              Início
            </Link>
            <Link
              href="/cardapio"
              className="text-white hover:text-amarelo-marca transition-colors font-medium"
            >
              Cardápio
            </Link>
            <Link
              href="/sobre"
              className="text-white hover:text-amarelo-marca transition-colors font-medium"
            >
              Sobre
            </Link>
            <Link
              href="/delivery"
              className="text-white hover:text-amarelo-marca transition-colors font-medium"
            >
              Delivery
            </Link>
            <Link
              href="/contato"
              className="text-white hover:text-amarelo-marca transition-colors font-medium"
            >
              Contato
            </Link>
          </nav>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,209,0,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-amarelo-marca text-preto-premium px-6 py-3 rounded-2xl font-semibold text-sm md:text-base"
          >
            Pedir via WhatsApp
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
