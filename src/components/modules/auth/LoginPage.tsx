import LoginImage from "../../../assets/LoginPage.svg"
import logo from "../../../assets/Logo.svg"
import { TextInput, PasswordInput, Button, Grid } from '@mantine/core';
import { useForm } from '@mantine/form';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateAdminUser } from "../../../store/auth/actions";
import { useNavigation } from "react-router-dom";
import { useSelector } from 'react-redux';


export const LoginPage = () => {
    const form = useForm({
        initialValues: {
            username: '',
            password: ''
        },
    });

    //const isAuthenticated = useSelector((state:any)=>state.isAuthenticated);
    const dispatch:any = useDispatch()
    //const navigate:any = useNavigation();    

    const authenticateUser =async ()=>{
      try{
        await dispatch(authenticateAdminUser(form.values))
        //navigate("dashboard");
      }catch(e:any){
        console.log(e);
      }
    }
    
    return <>
        <nav className="flex items-center justify-between px-[150px] h-[80px] fixed w-full">
            <div className="Logo"><img src={logo} alt="Expense Tracker Logo" /></div>
        </nav>
        <section>
            <div className="flex w-screen h-screen">
                <div className="w-8/12 flex items-center">
                    <img src={LoginImage} alt="Expense Tracker" />
                </div>
                <div className="w-4/12 h-full flex items-center justify-center">
                    <form className="w-full" onSubmit={form.onSubmit(()=>authenticateUser())}>
                        <div className="w-2/3">
                            <Grid>
                                <Grid.Col span={12}>
                                    <div className="text-md font-bold">Admin Panel</div>
                                </Grid.Col>
                                <Grid.Col span={12}>
                                    <TextInput className="text-slate-500" label={"Email"} withAsterisk variant="filled" placeholder="Enter your email" {...form.getInputProps('username')} required />
                                </Grid.Col>
                                <Grid.Col>
                                    <PasswordInput label={"Password"} className="text-slate-500" variant="filled" placeholder="Password" {...form.getInputProps('password')} required />
                                </Grid.Col>
                                <Grid.Col className="flex items-end">
                                    <NavLink to="" className="text-sm font-semibold" >Forgot password?</NavLink>
                                </Grid.Col>
                                <Grid.Col>
                                    <Button variant="filled" color="orange" fullWidth type="submit">Login</Button>
                                </Grid.Col>
                            </Grid>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
}