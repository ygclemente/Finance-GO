import { useState } from 'react';
import { DollarSign } from 'lucide-react';

export default function Login({ onLogin, onBack }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      onLogin();
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <DollarSign className="w-12 h-12 text-indigo-600" />
          <span className="text-3xl font-bold text-gray-800 ml-2">Finance GO</span>
        </div>

        <h2 className="text-2xl font-semibold text-center mb-8">Entre na sua conta</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Usuário</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="admin"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Entrar
          </button>
        </div>

        <button
          onClick={onBack}
          className="w-full mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
        >
          Voltar para início
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Demo: usuário <span className="font-mono font-semibold">admin</span> senha <span className="font-mono font-semibold">admin123</span>
        </p>
      </div>
    </div>
  );
}