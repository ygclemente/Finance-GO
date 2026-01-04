import { DollarSign, BarChart3, PieChart, TrendingUp } from 'lucide-react';

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-8 h-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-800">Finance GO</span>
          </div>
          <button
            onClick={() => onNavigate('login')}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Entrar
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Controle suas finanças de forma simples
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Organize receitas, despesas e visualize seu progresso financeiro
          </p>
          <button
            onClick={() => onNavigate('login')}
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
          >
            Começar Agora
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <BarChart3 className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dashboard Intuitivo</h3>
            <p className="text-gray-600">Visualize seus dados financeiros com gráficos modernos</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <PieChart className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Categorias Personalizadas</h3>
            <p className="text-gray-600">Organize suas transações por categorias inteligentes</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Acompanhe seu Lucro</h3>
            <p className="text-gray-600">Veja o quanto você está economizando mensalmente</p>
          </div>
        </div>
      </main>
    </div>
  );
}