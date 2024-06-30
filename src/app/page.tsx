"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <main>
      <h1>Hola</h1>

      <Button
        onClick={() => {
          signOut({
            callbackUrl: "/login",
          });
        }}
      >
        Cerrar sesión
      </Button>
    </main>
  );
}
