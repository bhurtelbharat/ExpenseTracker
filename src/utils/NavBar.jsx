 import { Button } from "@mantine/core"
import logo from "../assets/Logo.svg"
export const Navbar = () => {
    return <nav className="flex items-center justify-between px-[150px] h-[80px] fixed w-full">
        <div className="Logo"><img src={logo} alt="Expense Tracker Logo" /></div>
        <div className="nav-items flex items-center">
            <div className="nav-item px-md">Home</div>
            <div className="nav-item px-md">Features</div>
            <div className="nav-item px-md">Contact</div>
            <div className="nav-item">
                <div className="nav-buttons flex">
                    <Button variant="filled" color="rgba(0, 0, 0, 1)">Sign In</Button>
                    <Button className="ml-xs" variant="outline" color="rgba(0, 0, 0, 1)">Sign Up</Button>
                </div>
            </div>

        </div>
    </nav>
}