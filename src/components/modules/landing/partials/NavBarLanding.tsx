 import { Button } from "@mantine/core"
import logo from "../../../../assets/Logo.svg"
 import { NavLink } from 'react-router-dom'
export const NavBarLanding = () => {
    return <nav className="flex items-center justify-between px-[150px] h-[80px] fixed w-full z-40">
        <div className="Logo"><img src={logo} alt="Expense Tracker Logo" /></div>
        <div className="nav-items flex items-center">
            <NavLink to={'/'} className="nav-item px-md">Home</NavLink>
            <NavLink to={'/features'} className="nav-item px-md">Features</NavLink>
            <NavLink to={'/contact'} className="nav-item px-md">Contact</NavLink>
            <div className="nav-item">
                <div className="nav-buttons flex">
                    <Button variant="filled" color="rgba(0, 0, 0, 1)">Sign In</Button>
                    <Button className="ml-xs" variant="outline" color="rgba(0, 0, 0, 1)">Sign Up</Button>
                </div>
            </div>

        </div>
    </nav>
}