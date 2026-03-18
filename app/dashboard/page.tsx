"use client";

import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Dashboard() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email || "");
      } else {
        window.location.href = "/";
      }
    });
    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    await signOut(auth);
    window.location.href = "/";
  }

  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* Nav */}
      <div className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          <span className="font-serif text-lg font-medium text-stone-800">
            Restaurant Academy
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-stone-500">{email}</span>
          <button
            onClick={handleLogout}
            className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
          >
            Sair
          </button>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="font-serif text-2xl font-medium text-stone-800 mb-2">
          Bem-vindo de volta
        </h1>
        <p className="text-sm text-stone-500 mb-8">
          Escolhe um módulo para continuar a tua formação.
        </p>

        {/* Módulos */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          
          <div className="bg-white border border-stone-200 rounded-2xl p-6 cursor-pointer hover:border-amber-400 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-xl mb-4">
              🍽️
            </div>
            <div className="text-sm font-medium text-stone-800 mb-1">
              Serviço de mesa
            </div>
            <div className="text-xs text-stone-500 mb-3">
              20 lições · Protocolo e etiqueta
            </div>
            <div className="w-full h-1 bg-stone-100 rounded-full">
              <div className="h-1 bg-amber-400 rounded-full" style={{width: "0%"}}></div>
            </div>
            <div className="text-xs text-stone-400 mt-1">0% concluído</div>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-6 cursor-pointer hover:border-amber-400 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl mb-4">
              🍹
            </div>
            <div className="text-sm font-medium text-stone-800 mb-1">
              Barman
            </div>
            <div className="text-xs text-stone-500 mb-3">
              20 lições · Cocktails e gestão de bar
            </div>
            <div className="w-full h-1 bg-stone-100 rounded-full">
              <div className="h-1 bg-amber-400 rounded-full" style={{width: "0%"}}></div>
            </div>
            <div className="text-xs text-stone-400 mt-1">0% concluído</div>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-6 cursor-pointer hover:border-amber-400 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-xl mb-4">
              🍳
            </div>
            <div className="text-sm font-medium text-stone-800 mb-1">
              Cozinha
            </div>
            <div className="text-xs text-stone-500 mb-3">
              20 lições · Fundamentos e aproveitamento
            </div>
            <div className="w-full h-1 bg-stone-100 rounded-full">
              <div className="h-1 bg-amber-400 rounded-full" style={{width: "0%"}}></div>
            </div>
            <div className="text-xs text-stone-400 mt-1">0% concluído</div>
          </div>

        </div>
      </div>

    </div>
  );
}