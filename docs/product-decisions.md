# Product brief — Commerce Operations

## Posicionamento
Produto independente dentro do ecossistema Areco: central de operações para empresas que vendem por diferentes canais digitais.

## Problema
A operação multicanal pode fragmentar catálogo, estoque, pedidos e atendimento entre diferentes ambientes. O produto propõe uma visão operacional consolidada, com contexto por empresa e canal.

## Público principal
- Gestor comercial: acompanha vendas, indicadores e desempenho.
- Operador: administra produtos, pedidos, estoque e atendimento.
- Administrador: configura empresas, canais, usuários e permissões.

## Proposta de valor
Transformar informação operacional dispersa em contexto acionável: o usuário entende o que está acontecendo, o que exige atenção e onde agir.

## Diferenciais
1. Radar operacional com ocorrências priorizadas por impacto.
2. Dashboard configurável com widgets reordenáveis, ocultáveis e restauráveis.
3. Visão multiempresa sem misturar dados e permissões.
4. Histórico e rastreabilidade como princípio de experiência.
5. Estados de integração explícitos e feedback claro.

## Arquitetura conceitual
Company → Brand → Product → ChannelListing → Inventory / Order / Conversation.

Cada registro operacional pertence a uma empresa. Visões consolidadas agregam dados respeitando o contexto e as permissões.

## Escopo da prova de conceito
Sete módulos: visão geral, produtos, estoque, pedidos, atendimento, integrações e configurações.

## Fora do escopo
- Backend, autenticação real e banco de dados.
- Integrações reais com marketplaces.
- Envio real de mensagens.
- Sincronização ou atualização de estoque real.
- Segurança multi-tenant em produção.

## Riscos e questões para validação com stakeholders
- Como cada marketplace modela variações, anúncios, pedidos e mensagens?
- Qual sistema é a fonte de verdade do estoque?
- Como resolver conflitos de atualização?
- Quais permissões variam por empresa, marca e canal?
- Quais dados e mensagens podem ser sincronizados por cada canal?
- Quais métricas são realmente úteis para cada perfil?

## Princípios de UX
- Priorizar exceções e ações, não apenas indicadores.
- Informar escopo, empresa e canal no contexto.
- Não ocultar falhas de sincronização.
- Permitir reversibilidade quando possível.
- Fornecer feedback após cada ação.
- Manter acessibilidade, responsividade e consistência.
