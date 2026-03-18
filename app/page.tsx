export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <span className="font-serif text-xl font-medium text-stone-800">
              Restaurant Academy
            </span>
          </div>
          <p className="text-sm text-stone-500">
            Plataforma de formação profissional
          </p>
        </div>

        {/* Card de login */}
        <div className="bg-white border border-stone-200 rounded-2xl p-8">
          <h1 className="text-lg font-medium text-stone-800 mb-1">
            Bem-vindo de volta
          </h1>
          <p className="text-sm text-stone-500 mb-6">
            Entra na tua conta para continuar
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-medium text-stone-600 mb-1 block">
                Email
              </label>
              <input
                type="email"
                placeholder="o-teu@email.com"
                className="w-full h-10 px-3 rounded-lg border border-stone-200 text-sm text-stone-800 outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-stone-600 mb-1 block">
                Palavra-passe
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-10 px-3 rounded-lg border border-stone-200 text-sm text-stone-800 outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            <button className="w-full h-10 bg-amber-500 hover:bg-amber-400 text-white text-sm font-medium rounded-lg transition-colors mt-2">
              Entrar
            </button>
          </div>

          <p className="text-xs text-stone-400 text-center mt-6">
            Problemas a entrar?{" "}
            <span className="text-amber-600 cursor-pointer hover:underline">
              Contacta o teu gestor
            </span>
          </p>
        </div>

        <p className="text-xs text-stone-400 text-center mt-4">
          © 2025 Restaurant Academy
        </p>

      </div>
    </div>
  );
}