import { Input } from 'antd';
import { CustomButton } from '../utils/Custom';
import { useState } from 'react';

export default function Login() {
    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = () => {
        if (input.email && input.password) {
            console.log('Login submitted');
        }

    };

    const handleEmailChange = (e: any) => {
        setInput({ ...input, email: e.target.value });
    }

    const handlePasswordChange = (e: any) => {
        setInput({ ...input, password: e.target.value });
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div className=" bg-bg-grey w-[100vw] h-[100vh] text-slate-950">
                    <div className="flex flex-col items-center justify-center h-[100vh] w-[100vw]">
                        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                            <div className="text-center mb-[10vh]">
                                <h1 className="text-4xl font-semibold">Pay Back Pal 😡</h1>
                            </div>
                            <div className="text-center flex flex-col items-center justify-center gap-2 w-[400px]">
                                <h2 className="text-2xl font-semibold">Login to your account</h2>
                                <p className=" text-base font-light">Enter your email and password</p>
                                <div className='w-[100%] mt-4 flex flex-col gap-4'>
                                    <Input placeholder="pal@domain.com" type='email' onChange={handleEmailChange}
                                        className='h-[40px] w-[100%] text-xl' value={input.email} />
                                    <Input placeholder="********" type='password' onChange={handlePasswordChange}
                                        className='h-[40px] w-[100%] text-xl' value={input.password} />
                                    <CustomButton title="Log in" divStyling="bg-nav-base text-white" onClickFunction={handleSubmit} disable={!input.email || !input.password}
                                        buttonStyling="h-[40px] w-[100%] hover:opacity-90 bg-nav-base hover:bg-nav-base" />

                                </div>
                            </div>
                            <div className='h-[20vh]'></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}