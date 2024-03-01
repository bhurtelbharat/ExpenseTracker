import logo from '../assets/Logo.svg'
import LoginImage from '../assets/LoginPage.svg'
import { Route, Routes } from 'react-router'
import { LoginAuth } from '../pages/auth/Login.auth'

export const AuthenticationLayout =() => {
    return <><nav className="flex items-center justify-between px-[150px] h-[80px] fixed w-full">
        <div className="Logo"><img src={logo} alt="Expense Tracker Logo" /></div>
    </nav>
    <section>
        <div className="flex w-screen h-screen">
            <div className="w-8/12 flex items-center">
                <img src={LoginImage} alt="Expense Tracker" />
            </div>
            <div className="w-4/12 h-full flex items-center justify-center">
                <Routes>
                    <Route path="/" element={<LoginAuth />} />
                    <Route path="/" element={<LoginAuth />} />
                    <Route path="/" element={<LoginAuth />} />
                    <Route path="/" element={<LoginAuth />} />
                    <Route path="/" element={<LoginAuth />} />
                </Routes>
            </div>
        </div>
    </section>
        </>
}