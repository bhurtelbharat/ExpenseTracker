import { useState } from 'react'
import './App.css'
import { AppRoutes } from './routes'
import '@mantine/core/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css'
import store from "./store/store";
import { Provider } from "react-redux";
import { MainContainer } from "./hoc/main";
import { NavBarLanding } from './components/modules/landing/partials/NavBarLanding'
function App() {

  return (
    <MainContainer>
      <AppRoutes />
    </MainContainer>
  )
}

export default App
