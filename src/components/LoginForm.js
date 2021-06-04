import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

function LoginForm() {
    return (
        <>
              <section className="Log_in_form mt-sm-5">
                <div className="container px-sm-5 pt-5">
                    <h1 className=" mb-4" style={{
                        fontWeight:"300"
                        
                    }}>Login</h1>
                    
                    <TextField id="filled-basic" label="Your email" variant="filled" className="w-100 " />
                    <TextField id="filled-basic" label="Your password" variant="filled" type="password" className="w-100 my-3 " />
                    <div className="row p-0 text-center">
                        <div className="col-md-4">
                            <p>Forgot password?</p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-7">
                            <p className="">Don’t have an account? 
                            <a href="#" style={{
                        color: "#4032E5"
                    }}> Sign up</a></p>
                        </div>
                    </div>
                    <Button
                                variant="contained"
                                className="font-weight-light  mb-4"
                                style={{
                                    backgroundColor: "#4737FF",
                                    color: "#fff",
                                    border: "1px solid #red",
                                    padding: "12px 60px",
                                    borderRadius: 0,
                                    letterSpacing: "2px",
                                    width: "100%",                               
                                }}
                            >
                                Continue
                            </Button>

                                <h4 style={{
                                    color: '#707070',
                                    textAlign: 'center'
                                }}>OR</h4>
                    <div className="CW_img w-100 mt-4">
                       <a href="#"> <img src="/img/CWF.png" alt="" className="w-100" /></a>

                    </div>
                    <div className="CW_img  w-100 mt-3 mb-4">
                        <a href="#"><img src="/img/CWG.png" alt="" className="w-100 "  /></a>
                    </div>
                    <p>By logging in, you agree to our <a href="#" style={{
                        color: "#4032E5"
                    }}>Terms of Use</a> and <a href="#" style={{
                        color: "#4032E5"
                    }}>Privacy Policy .</a>
                    </p>
                </div>
            </section>
        </>
    )
}

export default LoginForm
