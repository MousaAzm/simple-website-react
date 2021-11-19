import { BrowserRouter, Routes as Switch, Route } from "react-router-dom"
import { HomeView } from "../views/home/HomeView"
import { AboutView } from "../views/about/AboutView"
import { ServicesView } from "../views/services/ServicesView"
import { ContactView } from "../views/contact/ContactView"
import RoutingPath from "./RoutingPath"


export const Routes = ({children}) => {
    return (
        <BrowserRouter> 
        {children}
        <Switch>
           <Route path ={RoutingPath.homeView} element={<HomeView/>} />
           <Route path ={RoutingPath.aboutView} element={<AboutView/>} />
           <Route path ={RoutingPath.servicesView} element={<ServicesView/>} />
           <Route path ={RoutingPath.contactView} element={<ContactView/>} />
        </Switch>
        
        </BrowserRouter>
    )
}
