# 💰 Finance GO

![Finance GO Banner](https://img.shields.io/badge/Finance-GO-6366f1?style=for-the-badge&logo=react&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

> **Sistema web moderno para controle financeiro pessoal** - Gerencie suas receitas, despesas e visualize seu progresso financeiro de forma simples e intuitiva.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Demonstração](#-demonstração)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Roadmap](#-roadmap)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 🎯 Sobre o Projeto

**Finance GO** é uma aplicação web desenvolvida para ajudar usuários a organizar suas finanças pessoais de forma visual e prática. Com um dashboard moderno e gráficos interativos, você pode acompanhar suas receitas, despesas e lucro em tempo real.

### Por que Finance GO?

- ✅ **Interface Minimalista** - Design limpo e focado na experiência do usuário
- ✅ **Gráficos Modernos** - Visualize seus dados financeiros de forma clara
- ✅ **Categorização Inteligente** - Organize suas transações por categorias predefinidas
- ✅ **100% Frontend** - Não requer backend para começar a usar
- ✅ **Responsivo** - Funciona perfeitamente em desktop e mobile

---

## ⚡ Funcionalidades

### ✨ Principais Recursos

- 🔐 **Sistema de Login** - Autenticação simples (demo: admin/admin123)
- 📊 **Dashboard Completo** - Visualização em tempo real de:
  - Total de receitas
  - Total de despesas
  - Lucro/prejuízo
- ➕ **Adicionar Transações** - Crie novas receitas ou despesas
- ✏️ **Editar Transações** - Modifique transações existentes
- 🗑️ **Excluir Transações** - Remova transações com confirmação
- 📈 **Gráficos Interativos**:
  - Gráfico de linha: Receitas vs Despesas ao longo do tempo
  - Gráfico de pizza: Distribuição de despesas por categoria
- 📋 **Tabela de Transações** - Histórico completo e organizado
- 🎨 **Sidebar Responsiva** - Menu lateral com navegação fluida

### 🏷️ Categorias Predefinidas

**Receitas:**
- Salário
- Freelance
- Investimentos
- Vendas
- Outros

**Despesas:**
- Alimentação
- Transporte
- Estudos
- Lazer
- Saúde
- Moradia
- Outros

---

## 🎬 Demonstração

### Landing Page
![Landing Page](https://via.placeholder.com/800x400/6366f1/ffffff?text=Landing+Page)

### Dashboard
![Dashboard](https://via.placeholder.com/800x400/6366f1/ffffff?text=Dashboard)

### Gráficos
![Gráficos](https://via.placeholder.com/800x400/6366f1/ffffff?text=Gráficos)

---

## 🛠️ Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

| Tecnologia | Descrição |
|------------|-----------|
| [React](https://reactjs.org/) | Biblioteca JavaScript para construção de interfaces |
| [Vite](https://vitejs.dev/) | Build tool rápida para projetos modernos |
| [Tailwind CSS](https://tailwindcss.com/) | Framework CSS utilitário |
| [Recharts](https://recharts.org/) | Biblioteca de gráficos para React |
| [Lucide React](https://lucide.dev/) | Ícones modernos e leves |

---

## 🚀 Instalação

### Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passo a Passo

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/finance-go.git
cd finance-go
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
# ou
yarn dev
```

4. **Acesse a aplicação**

Abra seu navegador e acesse: `http://localhost:5173`

### 🔑 Credenciais de Acesso (Demo)

- **Usuário:** `admin`
- **Senha:** `admin123`

---

## 📖 Como Usar

### 1. Fazer Login
- Acesse a página inicial
- Clique em "Entrar"
- Use as credenciais: `admin` / `admin123`

### 2. Adicionar Transação
- No dashboard, clique em "Nova Receita" ou "Nova Despesa"
- Preencha os campos:
  - Descrição (ex: Supermercado)
  - Valor (ex: 150.00)
  - Categoria (selecione uma opção)
  - Data
- Clique em "Adicionar"

### 3. Editar Transação
- Na tabela de transações, clique no ícone de lápis (✏️)
- Modifique os campos desejados
- Clique em "Salvar Alterações"

### 4. Excluir Transação
- Na tabela de transações, clique no ícone de lixeira (🗑️)
- Confirme a exclusão

### 5. Visualizar Gráficos
- Os gráficos são gerados automaticamente com base nas suas transações
- Acompanhe a evolução de receitas vs despesas
- Veja a distribuição de gastos por categoria

---

## 📁 Estrutura do Projeto

```
finance-go/
├── public/
├── src/
│   ├── components/
│   │   ├── Charts.jsx           # Componente de gráficos
│   │   ├── Dashboard.jsx        # Dashboard principal
│   │   ├── LandingPage.jsx      # Página inicial
│   │   ├── Login.jsx            # Página de login
│   │   ├── Sidebar.jsx          # Menu lateral
│   │   └── TransactionModal.jsx # Modal de transações
│   ├── App.jsx                  # Componente raiz
│   ├── App.css                  # Estilos globais
│   └── main.jsx                 # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🗺️ Roadmap

Funcionalidades planejadas para as próximas versões:

- [ ] **Backend Integration**
  - [ ] API REST com Node.js + Express
  - [ ] Banco de dados (MongoDB ou PostgreSQL)
  - [ ] Autenticação JWT
  
- [ ] **Novas Funcionalidades**
  - [ ] Múltiplos usuários
  - [ ] Metas financeiras
  - [ ] Alertas e notificações
  - [ ] Exportação de relatórios (PDF/Excel)
  - [ ] Filtros avançados (por data, categoria, etc)
  - [ ] Modo escuro (Dark mode)
  - [ ] Suporte a múltiplas moedas
  
- [ ] **Melhorias**
  - [ ] Persistência de dados (LocalStorage)
  - [ ] Testes unitários
  - [ ] PWA (Progressive Web App)
  - [ ] Internacionalização (i18n)

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Siga os passos abaixo:

1. Faça um **fork** do projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Faça **commit** das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça **push** para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um **Pull Request**

### 📝 Padrões de Commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração de código
- `test:` Testes
- `chore:` Tarefas gerais

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido com ❤️ por **[Seu Nome]**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:seu-email@exemplo.com)

---

## 🙏 Agradecimentos

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)

---

## 💡 Suporte

Se você gostou do projeto, considere dar uma ⭐️!

Para reportar bugs ou sugerir melhorias, abra uma [issue](https://github.com/seu-usuario/finance-go/issues).

---

<div align="center">
  
**Feito com 💙 usando React + Vite**

</div>
