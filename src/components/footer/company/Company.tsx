import './Company.scss'

interface CompanyProps {
    icon: any,
    name: string
}

export const Company =({icon, name}: CompanyProps)=> {
    return (
        <div className="company">
            <div className="icon">{icon}</div>
            <div className="name">{name}</div>
        </div>
    )
}
