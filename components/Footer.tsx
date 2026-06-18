"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-preto-premium py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-amarelo-marca mb-4">Mania Lanches</h3>
            <p className="text-gray-400">Marmitas caseiras, almoço no local e delivery.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <p className="text-gray-400 mb-2">WhatsApp: (11) 99999-9999</p>
            <p className="text-gray-400">E-mail: contato@manialanches.com.br</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Horário</h4>
            <p className="text-gray-400 mb-2">Seg - Sex: 11:00 - 15:00</p>
            <p className="text-gray-400 mb-2">Seg - Sex: 18:00 - 22:00</p>
            <p className="text-gray-400">Sáb - Dom: 11:00 - 22:00</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">© 2026 Mania Lanches. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
