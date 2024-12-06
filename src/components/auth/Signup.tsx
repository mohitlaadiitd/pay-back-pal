import { Input } from 'antd';
import { CustomButton } from '../utils/Custom';

export default function Signup() {
    return (
        <div className="App">
            <div className=" bg-bg-grey w-[100vw] h-[100vh] text-slate-950">
                <div className="flex flex-col items-center justify-center h-[100vh] w-[100vw]">
                    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                        <div className="text-center mb-[10vh]">
                            <h1 className="text-4xl font-semibold">Pay Back Pal 😡</h1>
                        </div>
                        <div className="text-center flex flex-col items-center justify-center gap-2 w-[400px]">
                            <h2 className="text-2xl font-semibold">Create an account</h2>
                            <p className=" text-base font-light">Enter your email to sign up for this app</p>
                            <div className='w-[100%] mt-4 flex flex-col gap-4'>
                                <Input placeholder="pal@domain.com" type='email'
                                    className='h-[40px] w-[100%] text-xl' />
                                <CustomButton title="Sign up with email" divStyling="bg-nav-base"
                                    buttonStyling="h-[40px] w-[100%] text-base hover:opacity-90 bg-nav-base hover:bg-nav-base" />

                            </div>
                        </div>
                        <div className='h-[20vh]'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}