
import { ColorModeContext,useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import {Routes, Route} from "react-router-dom"
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/doshboard';
import Contacts from "./scenes/global/contacs"
// import Sidebar from './scenes/global/Sidebar';
// import Form from "./scenes/form";

function App() {
   const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <div className='app'>
        <Sidebar/>
        <main className='content'>
          <Topbar/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
           <Route path='/contacts' element={<Contacts/>}/>
            {/* <Route path='/form' element={<Form/>}/> */} 
          </Routes> 
        </main>
      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
