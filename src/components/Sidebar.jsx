import { LayoutDashboard, Package, Warehouse, ShoppingCart, MessagesSquare, Plug, Settings2, ChevronDown, PanelLeftClose } from 'lucide-react'
const items = [
  ['dashboard','Visão geral',LayoutDashboard],['products','Produtos',Package],['inventory','Estoque',Warehouse],
  ['orders','Pedidos',ShoppingCart],['support','Atendimento',MessagesSquare],['integrations','Integrações',Plug]
]
export default function Sidebar({ page, setPage, company, setCompany, collapsed, setCollapsed, companies }) {
  return <aside className={`sidebar ${collapsed?'collapsed':''}`}>
    <div className="brand-row"><img src="/logo-elos-dark.svg" alt="Logotipo enviado para o projeto" onClick={collapsed?()=>setCollapsed(false):undefined} onKeyDown={collapsed?e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setCollapsed(false)}}:undefined} role={collapsed?'button':undefined} tabIndex={collapsed?0:undefined} title={collapsed?'Expandir menu':undefined}/><div className="brand-name"><b>Commerce</b><span>OPERATIONS</span></div>
      {!collapsed&&<button className="icon-button collapse-btn" onClick={()=>setCollapsed(true)} title="Recolher menu"><PanelLeftClose size={17}/></button>}
    </div>
    <div className="company-select"><span className="company-avatar">{company.name[0]}</span><div className="company-copy"><b>{company.name}</b><small>Ambiente empresarial</small></div><select aria-label="Selecionar empresa" value={company.id} onChange={e=>setCompany(companies.find(c=>c.id===e.target.value))}>{companies.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</select><ChevronDown size={15}/></div>
    <div className="nav-label">WORKSPACE</div>
    <nav>{items.map(([id,label,Icon])=><button key={id} className={`nav-item ${page===id?'active':''}`} onClick={()=>setPage(id)} title={label}><Icon size={18}/><span>{label}</span></button>)}</nav>
    <div className="sidebar-bottom"><button className={`nav-item ${page==='settings'?'active':''}`} onClick={()=>setPage('settings')}><Settings2 size={18}/><span>Configurações</span></button><div className="profile"><div className="avatar">WP</div><div className="profile-copy"><b>Weslley Pereira</b><small>Administrador</small></div><span className="online-dot"/></div></div>
  </aside>
}
