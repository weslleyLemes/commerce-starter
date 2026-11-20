export const companies = [
  { id: 'alpha', name: 'Alpha Comércio', cnpj: '12.345.678/0001-90', status: 'Ativa' },
  { id: 'beta', name: 'Beta Distribuição', cnpj: '45.678.901/0001-23', status: 'Ativa' },
  { id: 'gamma', name: 'Gamma Home', cnpj: '98.765.432/0001-10', status: 'Ativa' },
]

export const channels = [
  { id: 'meli', name: 'Mercado Livre', short: 'ML', color: '#F5C542', connected: true },
  { id: 'shopee', name: 'Shopee', short: 'SH', color: '#EE6B4D', connected: true },
  { id: 'amazon', name: 'Amazon', short: 'AM', color: '#657B8C', connected: true },
  { id: 'magalu', name: 'Magalu', short: 'MG', color: '#4778C8', connected: false },
]

export const products = [
  { id: 'PRD-1042', name: 'Cadeira Oslo em madeira', sku: 'OSL-CHA-02', brand: 'Casa Norte', stock: 18, price: 489.9, channel: 'Mercado Livre', status: 'Publicado', company: 'alpha' },
  { id: 'PRD-1043', name: 'Luminária Arco', sku: 'LUM-ARC-01', brand: 'Casa Norte', stock: 6, price: 219.9, channel: 'Shopee', status: 'Atenção', company: 'alpha' },
  { id: 'PRD-1044', name: 'Organizador modular', sku: 'ORG-MOD-04', brand: 'Forma Viva', stock: 42, price: 89.9, channel: 'Amazon', status: 'Publicado', company: 'beta' },
  { id: 'PRD-1045', name: 'Mesa lateral Nilo', sku: 'MES-NIL-01', brand: 'Casa Norte', stock: 0, price: 329.9, channel: 'Mercado Livre', status: 'Sem estoque', company: 'alpha' },
  { id: 'PRD-1046', name: 'Jogo de vasos Terra', sku: 'VAS-TER-03', brand: 'Forma Viva', stock: 27, price: 159.9, channel: 'Shopee', status: 'Publicado', company: 'beta' },
]

export const orders = [
  { id: '#VC-82941', customer: 'Mariana Costa', item: 'Cadeira Oslo em madeira', channel: 'Mercado Livre', total: 489.9, status: 'A preparar', date: 'Hoje, 10:42', company: 'alpha' },
  { id: '#VC-82940', customer: 'Rafael Mendes', item: 'Luminária Arco', channel: 'Shopee', total: 219.9, status: 'Aguardando envio', date: 'Hoje, 10:18', company: 'alpha' },
  { id: '#VC-82939', customer: 'Camila Rocha', item: 'Organizador modular', channel: 'Amazon', total: 89.9, status: 'Enviado', date: 'Hoje, 09:56', company: 'beta' },
  { id: '#VC-82938', customer: 'Pedro Almeida', item: 'Jogo de vasos Terra', channel: 'Shopee', total: 159.9, status: 'Concluído', date: 'Hoje, 09:31', company: 'beta' },
  { id: '#VC-82937', customer: 'Ana Luiza', item: 'Mesa lateral Nilo', channel: 'Mercado Livre', total: 329.9, status: 'Atenção', date: 'Hoje, 09:04', company: 'alpha' },
]

export const conversations = [
  { id: 1, customer: 'Beatriz Oliveira', channel: 'Mercado Livre', subject: 'Dúvida sobre prazo de entrega', preview: 'Olá! Gostaria de saber se chega até sexta...', time: '2 min', unread: true, order: '#VC-82941' },
  { id: 2, customer: 'Lucas Ferreira', channel: 'Shopee', subject: 'Solicitação de troca', preview: 'Recebi o produto, mas gostaria de trocar...', time: '18 min', unread: true, order: '#VC-82940' },
  { id: 3, customer: 'Fernanda Alves', channel: 'Amazon', subject: 'Informação do produto', preview: 'A luminária acompanha lâmpada?', time: '1 h', unread: false, order: '—' },
]

export const initialAlerts = [
  { id: 1, level: 'critical', title: 'Divergência de estoque', detail: 'Mesa lateral Nilo · Mercado Livre', time: 'Há 4 min', action: 'Revisar estoque' },
  { id: 2, level: 'warning', title: 'Sincronização pendente', detail: 'Shopee · Alpha Comércio', time: 'Há 18 min', action: 'Ver integração' },
  { id: 3, level: 'info', title: 'Mensagens aguardando resposta', detail: '8 compradores em 2 canais', time: 'Agora', action: 'Abrir atendimento' },
  { id: 4, level: 'warning', title: 'Anúncio com informação incompleta', detail: 'Luminária Arco · Shopee', time: 'Há 32 min', action: 'Editar produto' },
]

export const sales = [
  { day: 'Seg', value: 4200 }, { day: 'Ter', value: 5100 }, { day: 'Qua', value: 4700 },
  { day: 'Qui', value: 6800 }, { day: 'Sex', value: 5900 }, { day: 'Sáb', value: 8100 }, { day: 'Dom', value: 7420 },
]
