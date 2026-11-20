# Commerce Operations — conceito demonstrativo

Projeto conceitual de uma plataforma independente de gestão de operações comerciais multicanais, criada para o desafio seletivo da Areco.

> **Importante:** este repositório é uma prova de conceito exclusivamente Front-end. Todos os dados são fictícios. Não existem integrações reais com marketplaces, API, autenticação ou backend.

## Stack
- React 18 + Vite
- Tailwind CSS v4 (plugin Vite) e CSS próprio para o design system
- Lucide React
- Recharts
- dnd-kit para reorganização de widgets
- localStorage para preferências locais

## Executar localmente

Requisitos: Node.js 20.19+ ou 22.12+ e npm.

```bash
npm install
npm run dev
```

Abra a URL informada pelo Vite (normalmente http://localhost:5173).

## Gerar build

```bash
npm run build
npm run preview
```

## Funcionalidades demonstrativas
- Navegação entre sete módulos.
- Alternância entre três empresas fictícias.
- Dashboard com widgets reordenáveis por drag-and-drop.
- Ocultar/restaurar widgets e persistir preferências.
- Tema claro/escuro persistido no navegador.
- Tabelas com busca textual.
- Radar operacional com ação demonstrativa de resolução.
- Modais de cadastro e ações simuladas.
- Layout responsivo para desktop, tablet e mobile.

## Estrutura

```text
src/
  assets/       logotipo SVG fornecido pelo usuário
  components/   sidebar, topbar e widget
  data/         dados fictícios
  App.jsx       módulos e fluxos demonstrativos
  styles.css    tokens e estilos da interface
```

## Publicar na Vercel
1. Crie um repositório GitHub e envie o conteúdo desta pasta.
2. Entre na Vercel e importe o repositório.
3. Framework Preset: Vite.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Não há variáveis de ambiente necessárias.

## Figma — handoff
O pacote inclui `docs/figma-handoff.md` com a estrutura de páginas, frames, componentes, tokens e jornadas para reproduzir o protótipo no Figma. O link compartilhável precisa ser criado na conta Figma do candidato.

## Escopo e transparência
A aplicação não deve ser apresentada como integração real ou produto oficial da Areco. É uma proposta independente e conceitual, desenvolvida para o desafio. O logotipo fornecido foi incluído sem alterações como ativo de referência, sem afirmar que este arquivo seja um manual ou uma validação oficial de marca.
