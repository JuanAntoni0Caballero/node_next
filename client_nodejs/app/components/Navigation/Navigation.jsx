import Link from "next/link"
import './Navigation.css'

const links = [{
    label: 'Home',
    route: '/'
}, {
    label: 'About',
    route: '/about'
}]


const Navigation = () => {
    return (
        <header>
            <nav>
                <lu>
                    {links.map(({ label, route }) => (
                        <lo key={route}>
                            <Link href={route}>
                                {label}
                            </Link>
                        </lo>
                    ))}
                </lu>
            </nav>
        </header>
    )
}

export default Navigation