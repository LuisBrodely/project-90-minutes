"use client";

import logo from "@/assets/icons/logo.svg";
import bannerLogin from "@/assets/img/banner-login.png";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState({
    email: "brodely@gmail.com",
    password: "12345678",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginForm.email || !loginForm.password) {
      alert("Por favor, llena todos los campos");
      return;
    }

    try {
      const responseNextAuth = await signIn("credentials", {
        email: loginForm.email,
        password: loginForm.password,
        redirect: true,
        callbackUrl: "/",
      });

      if (responseNextAuth?.error) {
        console.error("Error signing in:", responseNextAuth.error);
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:block w-1/2">
        <Image
          src={bannerLogin}
          alt={"Login"}
          width={500}
          height={500}
          className="object-cover w-full h-full bg-purple-600"
        />
      </div>
      <div className="flex justify-center items-center lg:w-1/2 w-full p-8 lg:p-36 md:p-52 sm:p-20">
        <div className="w-full max-w-2xl">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-medium flex items-center justify-center mb-10">
              <Image src={logo} alt="Logo" className="h-16 w-16" />
              <span className="self-center whitespace-nowrap ml-4 text-purple-600">
                <b>90</b>Minutos
              </span>
            </div>
          </div>
          <div className="text-center pb-11">
            <h1 className="text-6xl font-semibold">Bienvenido de vuelta</h1>
            <span className="text-xl">Ingresa tus datos para entrar.</span>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-flow-row gap-9">
            <Input
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm({ ...loginForm, email: e.target.value })
              }
              type="email"
              placeholder="Ingresa tu correo electrónico"
              className="h-12 text-lg"
            />
            <Input
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm({ ...loginForm, password: e.target.value })
              }
              type="password"
              placeholder="Ingresa tu contraseña"
              className="h-12 text-lg"
            />
            <Button type="submit" className="h-12 text-lg">
              Iniciar Sesión
            </Button>
            <div className="text-black text-md pt-16 text-center">
              ¿No tienes cuenta aún?{" "}
              <a href="/register" className="text-center font-bold">
                Regístrate aquí
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
