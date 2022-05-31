import React from 'react'
import { useState } from 'react';

export default function SignIn() {
    const [typePassword, setTypePassword] = useState(false);
  return (
    <div className="flex">
        <div className="bg-background w-[583px] h-[622px] flex flex-col items-center justify-evenly text-white rounded-l-2xl">
            <div className="flex items-center flex-col">
                <h2 className="text-4xl">Selamat Datang!</h2>
                <p className="text-base py-2 px-16 text-center">Masukkan email dan kata sandi yang sudah terdaftar di Bapenda Jawa Barat.</p>
            </div>
            <div>
                <img className="width-[270px]" src="/image/login-image.png" alt="login-image" />
            </div>
        </div>
        <div className="bg-white w-[583px] h-[622px] text-black rounded-r-2xl">
            <div className="mt-5 mx-8 flex justify-end">
                <img className="w-20" src="/image/logo.svg" alt="" />
            </div>
            <div className="px-14">
                <div className="border-b border-grey-1 py-8">
                <div className="">
                    <div className="text-black mb-2">
                    Email <span className="text-red-400">*</span>
                    </div>
                    <input
                    name="Email"
                    placeholder="Masukkan Email" 
                    type="email" 
                    className="w-full rounded border border-background bg-white-2 py-3 px-6 text-black placeholder:text-base"
                    />
                </div>
                <div className="mt-7">
                    <div className="text-black mb-2">
                    Password <span className="text-red-400">*</span>
                    </div>
                    <input
                    name="Password"
                    placeholder="Masukan Password" 
                    type={typePassword ? 'text' : 'password'}
                    className="w-full rounded border border-background bg-white-2 py-3 px-6 text-black placeholder:text-base"
                    />
                </div>
                </div>  
                <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="focus:outline-none" />
                    <div className="font-light">Ingatkan saya</div>
                </div>
                <div
                    // onClick={() => setActivePage('INPUT EMAIL')}
                    className="cursor-pointer text-[#038575]"
                >
                    Lupa Kata Sandi?
                </div>
                </div>
                <button
                // disabled={
                //   values === initialValues || errors.email || errors.password
                // }
                // onClick={handleSubmit}
                className="w-full rounded-md bg-background p-4 text-white mt-9"
                >Masuk</button>
            </div>
            <div className="mt-10 flex justify-center items-center text-grey-1 text-base">
                ©2020 Provincial Government of West Java
            </div>
        </div>
    </div>
  )
}
