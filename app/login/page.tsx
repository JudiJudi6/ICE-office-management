"use client";

import Input from "@/components/ui/Input";
import TextLink from "@/components/ui/TextLink";
import React, { FormEvent, useEffect, useState } from "react";


import PageCanvas from "@/components/features/login/PageCanvas";

export default function LogIn() {
  const [email, setEmail] = useState<string | number>("");
  const [password, setPassword] = useState<string | number>("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(email, password);
  }

  // useEffect(
  //   function () {
  //     console.log(email, password);
  //   },
  //   [email, password]
  // );



  return (
    <div className="min-h-screen w-full h-full">
      <div className="h-screen w-full bg-white p-6 flex justify-center items-center pt-[64px]">
        <div className="flex justify-center items-center  w-full h-full xl:shadow-[0_15px_50px_-12px_rgba(0,0,0,0.4)] xl:w-[1100px] xl:h-[600px] my-auto mx-auto">
          <div className="flex flex-col justify-center items-center  h-full xl:w-1/2 ">
            <div className="flex flex-col justify-center items-center mb-7">
              <h3 className="font-semibold text-4xl">Hello there!</h3>
              <p className="text-lg">Login to your account</p>
            </div>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-4 md400:gap-6 md600:gap-8 xs:w-full xs:px-10 md500:w-[450px]"
            >
              <div>
                <Input
                  id="email"
                  setValue={setEmail}
                  type="email"
                  label="Email"
                />
              </div>
              <div className="mb-6">
                <Input
                  id="password"
                  setValue={setPassword}
                  type="password"
                  label="Password"
                />
              </div>
              <button className="w-full bg-gradient-to-r to-main1 via-main2 from-main1 bg-size-200 bg-pos-0 hover:bg-pos-100 py-2 text-white uppercase tracking-widest font-light rounded-full transition-all duration-300">
                submit
              </button>
            </form>
            <p className="text-sm mt-4">
              Doesn&apos;t have an account yet?
              <br className="xs:hidden" />
              <span className="xs:ml-2">
                <TextLink href="/signup">Sign Up</TextLink>
              </span>
            </p>
          </div>
          <div className="hidden xl:block w-1/2 h-full ">
            <PageCanvas />
          </div>
        </div>
      </div>
    </div>
  );
}
