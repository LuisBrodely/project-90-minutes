"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import logo from "@/assets/icons/logo.svg";
import bannerRegister from "@/assets/img/banner-register.png";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Esquema de validación
const formSchema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email("Correo inválido").min(2).max(20),
  password: z.string().min(8).max(20),
  confirmPassword: z.string().min(8,).max(20),
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"], // path of error
});

export default function RegisterPage() {
  // Definir el formulario
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // Manejador de envío de formulario
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Realizar alguna acción con los valores del formulario
    console.log(values);
  }

  return (
    <div className="flex h-screen">
      <div className="hidden lg:block w-1/2">
        <Image
          src={bannerRegister}
          alt={"Register"}
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
            <span className="text-xl">Ingresa tus datos para crear una cuenta.</span>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-flow-row gap-9"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="name"
                        placeholder="Ingresa tu nombre"
                        {...field}
                        className="h-12 text-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Ingresa tu correo"
                        {...field}
                        className="h-12 text-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        {...field}
                        className="h-12 text-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirma tu contraseña"
                        {...field}
                        className="h-12 text-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="h-12 text-lg">
                Registrarse
              </Button>
              <FormDescription className="text-black text-md pt-10
               text-center">
                ¿Ya tienes una cuenta?{" "}
                <a href="/login" className="text-center font-bold">
                  Entra aquí
                </a>
              </FormDescription>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}