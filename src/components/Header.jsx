import { AppBar , Toolbar } from '@mui/material';
import logo from '../asserts/invoice_logo_resized_120px.png'

const Header = () => {
    
    return (
      <AppBar color='secondary' position='static'>
        <Toolbar >
            <img src={logo} alt="Logo"  style={{ width: '70px', height:'auto' }}/>
        </Toolbar>
      </AppBar>

      
    
    )
}

export default Header;