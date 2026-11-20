import { GripVertical, MoreHorizontal, X } from 'lucide-react'
export default function Widget({ title, subtitle, children, onHide, dragHandleProps, className='' }) {
 return <section className={`widget ${className}`}><div className="widget-head"><div className="widget-title"><span className="drag-handle" {...dragHandleProps}><GripVertical size={15}/></span><div><h3>{title}</h3>{subtitle&&<p>{subtitle}</p>}</div></div><div className="widget-tools"><button className="tiny-icon" title="Mais opções"><MoreHorizontal size={17}/></button>{onHide&&<button className="tiny-icon" title="Ocultar widget" onClick={onHide}><X size={16}/></button>}</div></div>{children}</section>
}
