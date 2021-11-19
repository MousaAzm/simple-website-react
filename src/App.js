import { Navigation } from "./components/Navbar/Navigation"
import { Routes } from "./routes/Routes" 
import { GlobalStyles } from "./shared/global/GlobalStyles"

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Routes> 
        <Navigation />
      </Routes> 
    </div>
  )
}
