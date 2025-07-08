"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const newsletterSchema = z.object({
  nome: z.string().min(2, { message: "Nome deve ter no mínimo 2 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
});

export function NewsletterForm() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const form = useForm({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { nome: "", email: "" },
  });

  const onSubmit = async (data) => {
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/sipa-documentacao/v1/site/publico/relacionamentos/newsletter`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || res.statusText || `Erro ${res.status}`);
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err.message || "Erro ao enviar");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="text-center md:text-left text-green-400">
        Inscrição feita com sucesso! 🎉
      </p>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Seu nome completo"
                  className="border-coal-300 placeholder:text-coal-200 text-coal-100"
                  {...field}
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
                  placeholder="Seu melhor e-mail"
                  type="email"
                  className="border-coal-300 placeholder:text-coal-200 text-coal-100"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {status === "error" && (
          <p className="text-xs text-red-400">{errorMsg}</p>
        )}
        <Button
          type="submit"
          className="w-full"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Inscreva-se"}
        </Button>
      </form>
    </Form>
  );
}
