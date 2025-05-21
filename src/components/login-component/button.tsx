function ButtonSosmed() {
    return (
        <div className="flex flex-col items-center justify-center w-full space-y-3">
            <button type="button" className="flex items-center w-full max-w-xl rounded-full bg-white py-4 px-6 shadow-md transition hover:scale-105 cursor-pointer">
                <img src="src/assets/icon/Google.svg" alt="" className="text-2xl text-[#DB4437]" />
                <span className="flex-grow text-center font-black text-black text-lg drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)]">
                    Login with Google
                </span>
            </button>

            <button type="button" className="flex items-center w-full max-w-xl rounded-full bg-white py-4 px-6 shadow-md transition hover:scale-105 cursor-pointer">
                <img src="src/assets/icon/pacebokk.svg" alt="" className="text-2xl text-[#1877F2]" />
                <span className="flex-grow text-center font-black text-black text-lg drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)]">
                    Login with Facebook
                </span>
            </button>

            <button type="button" className="flex items-center w-full max-w-xl rounded-full bg-white py-4 px-6 shadow-md transition hover:scale-105 cursor-pointer">
                <img src="src/assets/icon/discort.svg" alt="" className="text-2xl text-[#7289da]" />
                <span className="flex-grow text-center font-black text-black text-lg drop-shadow-[2px_2px_2px_rgba(0,0,0,0.7)]">
                    Login with Discord
                </span>
            </button>

            <p className="text-white font-semibold text-right w-full max-w-xl pr-4">
                <span>Dont have an account?</span>
            </p>
        </div>
    )
}

export default ButtonSosmed