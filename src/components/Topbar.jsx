import { Search, Bell, Sun, Moon, Command, Plus } from 'lucide-react'
export default function Topbar({ dark, setDark, onNew, onNotifications }) {
 return <header className="topbar"><div className="breadcrumb"><span>Workspace</span><b>/</b><strong>Commerce Operations</strong></div>
 <div className="top-actions"><button className="search-box" onClick={()=>document.getElementById('global-search')?.focus()}><Search size={16}/><span>Buscar em tudo...</span><kbd><Command size={11}/> K</kbd></button><button className="icon-button" onClick={()=>setDark(!dark)} title="Alternar tema">{dark?<Sun size={18}/>:<Moon size={18}/>}</button><button className="icon-button notification-button" onClick={onNotifications} title="Notificações"><Bell size={18}/><i/></button><button className="primary-button compact" onClick={onNew}><Plus size={16}/> Novo</button></div>
 </header>
}
