import ButtonSosmed from "./button";

function LoginComponent() {
    return (
        <div className="flex flex-col gap-4">
            <img src="src/assets/logo/textLogo.png" alt="TextLogo" width={900} height={334} className=""/>
            <div className="flex flex-col items-center font-ethos w-full px-20 lg:px-60 gap-5">
                <div className="flex flex-col font-black w-full gap-2">
                    <span className="text-sm">Email or Username</span>
                    <div>
                        <input type="text" title="text" className="w-full py-5 rounded-full bg-white focus:outline-none text-black px-3"/>
                    </div>
                </div>
                <div className="flex flex-col font-black w-full gap-2">
                    <span className="text-sm">Password</span>
                    <div className="flex bg-white rounded-full">
                        <input type="text" title="text" className="w-full py-5 rounded-full bg-white focus:outline-none text-black px-3"/>
                        <img src="src/assets/icon/View.svg" alt="" className="mr-5"/>
                    </div>
                    <div className="flex flex-row justify-between text-sm px-4">
                        <div className="flex gap-2">
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe" className="text-sm">Remember Me</label>
                        </div>
                        <a
                            href="#"
                            className="text-sm underline decoration-black"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </div>
                <div className="flex justify-end w-full">
                    <span className="w-full sm:max-w-1/4 ">
                       <button
                            className="bg-white text-black font-bold w-full rounded-full px-8 py-2 flex justify-center items-center cursor-pointer"
                            onClick={() => window.location.href = "/home"}
                        >
                            <span className="text-[23px] font-black tracking-tighter drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)] -mt-1">
                                Login
                            </span>
                        </button>
                    </span>
                </div>
                <div className="w-full">
                    <ButtonSosmed />
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;