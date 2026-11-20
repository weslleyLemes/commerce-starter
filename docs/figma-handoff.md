# Figma handoff — Commerce Operations

Este documento orienta a criação do arquivo Figma. O pacote não cria nem publica um arquivo na conta Figma.

## Páginas recomendadas
1. `00 — Cover`: nome do produto, conceito, autor e versão.
2. `01 — Foundations`: cores, tipografia, espaçamento, grid, radius, elevation.
3. `02 — Components`: botões, inputs, selects, badges, tabelas, cards, sidebar, topbar, modais.
4. `03 — Desktop`: frames principais em 1440 × 1000.
5. `04 — Responsive`: frames tablet 1024 × 768 e mobile 390 × 844.
6. `05 — Prototype`: conexões das jornadas.

## Frames desktop
- Dashboard / Overview
- Products / Catalog
- Inventory / Stock by channel
- Orders / Order list and details
- Support / Conversations
- Integrations / Channel connections
- Settings / Preferences and access

## Componentes e variantes
- Button: primary, secondary, ghost; default, hover, disabled, loading.
- Badge: success, warning, danger, neutral, info.
- Input: default, focus, error, disabled.
- Navigation item: default, hover, active, collapsed.
- Widget: default, editing, hidden.
- Table: default, filtered, empty, loading.
- Alert: critical, warning, info, resolved.

## Tokens iniciais
Tokens conceituais e provisórios, não manual oficial de marca Areco:
- Canvas: `#F6F7F8`
- Surface: `#FFFFFF`
- Text: `#202B36`
- Muted: `#778391`
- Border: `#E6E9ED`
- Accent: `#344D62`
- Success: `#16845B`
- Warning: `#B67A1C`
- Danger: `#C84E4E`
- Spacing: 4, 8, 12, 16, 24, 32
- Radius: 6, 9, 12

## Jornadas para prototipar
1. Alternar empresa pelo seletor do menu lateral.
2. Personalizar dashboard: abrir edição, ocultar widget, reorganizar, restaurar.
3. Produtos: abrir catálogo, pesquisar, abrir novo cadastro, preencher campos e salvar estado demonstrativo.
4. Estoque: identificar divergência e abrir contexto do produto.
5. Pedidos: pesquisar pedido, abrir detalhes e simular atualização de status.
6. Atendimento: selecionar conversa e responder com mensagem demonstrativa.
7. Integrações: abrir canal e visualizar estado de conexão.

## Observações
- O dashboard React já demonstra reorganização de widgets por drag-and-drop, ocultação/restauração, tema e alternância de empresa.
- Ao reproduzir no Figma, usar Auto Layout, componentes com variantes e estilos/tokens nomeados.
- O logo SVG incluído é o arquivo fornecido pelo usuário. Confirmar adequação institucional com a empresa antes de tratar como ativo oficial.
