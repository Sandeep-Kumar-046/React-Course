import InputComponent from './components/InputComponent';
import ButtonComponent from './components/ButtonComponent';

import './App.css'

function App()
        {
            return(
                <>   
                    <p>Hello, welcome to my website</p>
                    <InputComponent/>
                    <ButtonComponent text="Login"/>
                    <ButtonComponent text="Sign up"/>
                </>
            );
        }

export default App
