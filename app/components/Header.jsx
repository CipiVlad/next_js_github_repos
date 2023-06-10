import Link from "next/link"


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link href='/'>
                    <h1>Company Name</h1>
                </Link>
            </div>
            <div className="links">
                <Link href='/about'>About</Link>
                <Link href='/about/team'>Our Team</Link>
                <Link href='/code/repos'>Code</Link>

            </div>
        </header>
    )
}

export default Header