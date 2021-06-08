import React from 'react'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button, Typography } from '@material-ui/core';


function Reg_Form() {
    return (
        <>
            <section className="reg_form  bg-white">
                <div className="container">
                    <div className="reg_form_div" style={
                        {
                            maxWidth : "540px",
                            margin: "0 auto"
                        }
                    }>
                        <h1 className="py-5" style={{
                            fontWeight: "300",
                            textAlign: "center",
                        }}>Register</h1>
                        <TextField id="filled-basic" label="Username " variant="filled" className="w-100" required/>

                        <TextField id="filled-basic" label="Your name (shown to the public)" variant="filled" className="w-100 my-3" required />

                        <TextField id="filled-basic" label="Your email" variant="filled" type="email" className="w-100" required/>

                        <TextField id="filled-basic" label="Confirm email" variant="filled" type="email" className="w-100 my-3" required/>

                        <TextField id="filled-basic" label="Password" variant="filled" type="Password" className="w-100 mb-3" required/>
                        
                        <p style={{
                            fontSize: "12px",
                            fontWeight: "300"

                        }}>Password must be at least 8 characters and contain 1 special character or number.</p>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox  style={{
                                transform: "scale(.7)",
                                paddingRight: "1px"
                            }} color="primary" />}
                            label={<Typography style={{fontSize: "12px", color: "#707070"}}>Stay updated with Chain Gallery.</Typography>}
                            labelPlacement="end"
                        />
                        <Button
                                variant="contained"
                                className="font-weight-light mt-2 mb-4"
                                style={{
                                    backgroundColor: "#4737FF",
                                    color: "#fff",
                                    border: "1px solid #red",
                                    padding: "15px 60px",
                                    borderRadius: 0,
                                    letterSpacing: "2px",
                                    width: "100%",
                                    boxShadow: " 0 0 1px 5px #A3B9FF",
                                    webkitBoxShadow: " 0 0 1px 5px #A3B9FF",
                                }}
                            >
                                SIGN UP
                            </Button>
                            <p>By signing up, you agree to our <a href="#" style={{
                        color: "#4032E5"
                    }}>Terms of Use</a> and <a href="#" style={{
                        color: "#4032E5"
                    }}>Privacy Policy .</a>
                    </p>

                    <h4 style={{
                                    color: '#707070',
                                    textAlign: 'center'
                                }}>OR</h4>
                                <div className="CW_img w-100 mt-4">
                                
                                <Button variant="outlined" style={{
                                    width: "100%",
                                    height: "50px",
                                    backgroundColor: "#1C77F2",
                                    color: "#fff",
                                    borderRadius: "0",
                                    position: "relative",
                                    border: "none",
                                    textTransform: "unset", fontSize: "18px"
                                }}>&nbsp; Continue with Facebook <img style={{
                                    position: "absolute",
                                    left: "13px"
                                }} src="/img/facebook_logo.png" alt="" /> </Button>
                    
                                
                    </div>
                    <div className="CW_img  w-100 mt-3 mb-4">
                    <Button variant="outlined" style={{
                                    width: "100%",
                                    height: "50px",
                                    backgroundColor: "#fff",
                                    color: "#808080",
                                    borderRadius: "0",
                                    position: "relative",
                                    textTransform: "unset",
                                    fontSize: "18px"
                            }}>Continue with google<img style={{
                                position: "absolute",
                                left: "13px"
                            }} src="/img/google_logo.png" alt="" /> </Button>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reg_Form
