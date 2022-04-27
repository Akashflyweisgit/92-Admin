import React from 'react'
import './Style.scss'

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';



const LoginPage = () => {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const navigate = useNavigate()

      


  return (
    <>
        <div className="salse_main_div">
            <div className="logo"></div>
            <div className="input_div">
                <h3> Login</h3>
             <TextField id="standard-basic" label="Email" variant="standard" />
               

                <FormControl  variant="standard" margin='dense'>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        margin='dense'
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                    </FormControl>
                    <div className="btndiv">
                        <button onClick={()=>navigate('/sales-panel')}>Login</button>
                    </div>
                    <p>Forgot Password <Link to='/forgotpassword' > Click here </Link> </p>
                    {/* <p>Don't have an account <Link to='/sales/register' > Click here </Link> </p> */}
            </div>

           
        </div>
    </>
  )
}

export default LoginPage