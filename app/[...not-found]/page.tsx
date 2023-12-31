import Image from "next/image";
import Link from "next/link";
import React from "react";
import cart from "@/assets/images/logo.png";

const NotFound = () => {
  return (
    <div className="h-screen bg-white flex relative">
      <header className="p-8 absolute top-4 left-4">
        <Link href="/">
          <span className="sr-only">Fit Grocer</span>
          <Image
            width={0}
            height={0}
            sizes="100vh"
            className="w-11 h-12"
            src={cart}
            alt=""
          />
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center lg:justify-start p-12">
        <div className="max-w-lg">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Coming Soon...
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Hold tight. Something awesome is cooking.
          </p>
          <div className="mt-10">
            <Link
              href={"/"}
              className="text-sm font-semibold leading-7 text-primary"
            >
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>
      <div className="hidden lg:block flex-1">
        <Image
          src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
          alt=""
          className="h-full w-full object-cover"
          width={0}
          height={0}
          sizes="100vh"
        />
      </div>
    </div>
  );
};

export default NotFound;
