import { useState } from "react";

export default function Registration() {
  const [showVerify, setShowVerify] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowVerify(true);
  }
  return (
    <div className="flex items-center justify-center w-full h-screen font-BG">
      <div className="w-1/2 flex-1 h-full flex items-center justify-center bg-white">
        <div className="flex items-center justify-center flex-col w-full h-full p-10">
          <div className="flex items-center gap-2 text-2xl">
            <img src="/Logo.svg" alt="Icon" className="h-20 w-20" />
            <span className="font-bold">Lumos.ai</span>
          </div>
          <div className="text-center mb-10">
            <h1 className="text-4xl mt-4">One Chat,</h1>
            <p className="text-gray-500 text-4xl">Infinite Intelligence.</p>
          </div>
          {
            showVerify ? (
              <div className="flex items-center justify-center flex-col w-full max-w-[450px]">
                <h3 className="text-3xl mt-6">Sign in with email</h3>
                <p className="text-gray-500 text-xl mt-2 text-center">We have sent you a verification link to your email. Please check your inbox and click on the link to verify your email address.</p>
                <div className="mt-5">
                  <input
                    type="text"
                    maxLength={4}
                    pattern="\d{4}"
                    className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-1 mt-4 text-center text-2xl tracking-widest shadow-md hover:shadow-lg transition duration-200"
                    placeholder="____"
                    inputMode="numeric"
                    autoFocus
                  />
                </div>
                <div className="flex items-center justify-center flex-col w-full mt-4">
                  <button className="w-fit flex items-center justify-center text-center gap-2 bg-mainColor text-white border border-gray-300 rounded-full px-6 py-2 mt-1 text-xl shadow-md hover:shadow-lg transition duration-200">Sign in!</button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center flex-col w-full max-w-[450px]">
                  <h3 className="text-3xl mt-6">Sign in or register</h3>
                  <div className="w-full flex items-center flex-col text-2xl gap-2 mt-4">
                    <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-3 mt-2 shadow-md hover:shadow-lg transition duration-200">
                      <img src="/images/Auth/google.svg" alt="Google" className="h-5 w-5" />
                      Sign in with Google
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-[#1877F2] text-white border border-gray-300 rounded-full px-4 py-3 mt-1 shadow-md hover:shadow-lg transition duration-200">
                      <img src="/images/Auth/fb.svg" alt="Fb" className="h-5 w-5" />
                      Sign in with Facebook
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 bg-[#272727] text-white border border-gray-300 rounded-full px-4 py-3 mt-1 shadow-md hover:shadow-lg transition duration-200">
                      <img src="/images/Auth/apple.svg" alt="Apple" className="h-5 w-5" />
                      Sign in with Apple
                    </button>
                  </div>
                </div>
                <div className="mt-6 w-full max-w-[450px]">
                  <form className="flex items-start justify-center flex-col w-full text-2xl">
                    <label htmlFor="">Sign in with email:</label>
                    <input type="text" className="w-full mt-2 flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-full px-6 py-2 shadow-md hover:shadow-lg transition duration-200" placeholder="you@ðomain.com" />
                    <div className="flex items-center justify-center flex-col w-full mt-2">
                      <button onClick={handleSubmit} className="w-fit flex items-center justify-center text-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-1 text-xl mt-2 shadow-md hover:shadow-lg transition duration-200">Continue with email</button>
                    </div>
                  </form>
                </div>
              </>
            )
          }
        </div>
      </div>
      <div className="w-1/2 flex items-center h-full justify-center">
        <img src="/images/Auth/bg-auth.png" alt="BG Auth" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}
