"use client";

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
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  nome: z.string().min(2, {
    message: "Nome deve ter no mínimo 2 caracteres",
  }),
  email: z.string().email({ message: "E-mail inválido" }),
  assunto: z.string().min(1, {
    message: "Assunto é obrigatório",
  }),
  mensagem: z.string().min(1, {
    message: "Mensagem é obrigatória",
  }),
});

export function SignupForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
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
                <Input placeholder="Nome Completo" {...field} />
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
                <Input placeholder="E-mail" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="assunto"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Assunto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mensagem"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Mensagem" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full">
          Enviar Mensagem
        </Button>
      </form>
    </Form>
  );
}
