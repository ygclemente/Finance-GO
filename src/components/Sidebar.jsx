import { DollarSign, BarChart3, User, Settings, LogOut } from 'lucide-react';

export default function Sidebar({ sidebarOpen, setSidebarOpen, onLogout }) {
  return (
    <div 
      className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 w-64 bg-white shadow-lg transition-transform duration-300 z-30`}
      style={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        flexShrink: 0
      }}
    >
      <div className="p-6 border-b" style={{ flexShrink: 0 }}>
        <div className="flex items-center space-x-2">
          <DollarSign className="w-8 h-8 text-indigo-600" />
          <span className="text-xl font-bold text-gray-800">Finance GO</span>
        </div>
      </div>

      <nav className="p-4 space-y-2" style={{ flex: 1, overflowY: 'auto' }}>
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-indigo-50 text-indigo-600">
          <BarChart3 className="w-5 h-5" />
          <span className="font-medium">Dashboard</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700">
          <User className="w-5 h-5" />
          <span className="font-medium">Minha Conta</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-gray-700">
          <Settings className="w-5 h-5" />
          <span className="font-medium">Configurações</span>
        </button>
      </nav>

      <div className="p-4 border-t" style={{ flexShrink: 0 }}>
        <button
          onClick={onLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-red-50 text-red-600"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </div>
  );
}