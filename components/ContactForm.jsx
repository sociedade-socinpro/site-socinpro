"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { withMask } from "use-mask-input";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";

const newsletterSchema = z.object({
  nome: z.string().min(2, { message: "Nome deve ter no mínimo 2 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  celular: z.preprocess(
    (val) => (typeof val === "string" ? val.replace(/\D/g, "") : val),
    z.string().length(11, {
      message: "Telefone obrigatório",
    })
  ),
  cpf: z.preprocess(
    (val) => (typeof val === "string" ? val.replace(/\D/g, "") : val),
    z.string().length(11, { message: "CPF obrigatório" })
  ),
  assunto: z.string().min(1, { message: "Selecione um assunto" }),
  mensagem: z.string().min(1, { message: "Mensagem não pode ser vazia" }),
  receberNewsletter: z.boolean().optional(),
});

export function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const form = useForm({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      nome: "",
      email: "",
      celular: "",
      cpf: "",
      assunto: "",
      mensagem: "",
      receberNewsletter: false,
    },
  });

  const onSubmit = async (data) => {
    setStatus("sending");
    setErrorMsg("");

    try {
      const body = {
        ...data,
        receberNewsletter: data.receberNewsletter ? "S" : "N",
        filialId: "2",
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/sipa-documentacao/v1/site/publico/relacionamentos/entre-em-contato`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (!res.ok) {
        const error = await res.json();
        const errorsMessage = error?.objects?.length
          ? error.objects.map((obj) => obj.userMessage).join(", ")
          : error.userMessage || "Erro ao enviar formulário";
        setErrorMsg(errorsMessage);
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err.message || "Erro ao enviar");
      setStatus("error");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-6">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Insira seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="celular"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl ref={withMask("(99) [9]9999-9999")}>
                  <Input
                    placeholder="Insira seu telefone celular"
                    type="tel"
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
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Insira seu e-mail"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CPF</FormLabel>
                <FormControl ref={withMask("999.999.999-99")}>
                  <Input placeholder="Insira seu CPF" {...field} />
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
                <FormLabel>Assunto</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um assunto" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="DOC_CADASTRO">
                      Documentação e cadastro
                    </SelectItem>
                    <SelectItem value="PAGAMENTO">
                      Informações de pagamento
                    </SelectItem>
                    <SelectItem value="INTERNACIONAL">Internacional</SelectItem>
                    <SelectItem value="DIGITAL">Digital</SelectItem>
                    <SelectItem value="OUTROS">Outros</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mensagem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Input placeholder="Escreva uma mensagem" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="receberNewsletter"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-center gap-2 mt-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-sm font-normal pb-1">
                Eu aceito receber informações adicionais sobre os produtos e
                serviços da <strong>SOCINPRO</strong>.
              </FormLabel>
            </FormItem>
          )}
        />
        <div className="mt-6 flex flex-col items-center gap-4">
          <Button
            type="submit"
            className="w-full md:w-auto mx-auto"
            disabled={status === "sending"}
            size="lg"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          </Button>
          {status === "error" && (
            <p className="text-xs text-red-400">{errorMsg}</p>
          )}
          {status === "success" && (
            <p className="text-center md:text-left text-green-400">
              Mensagem enviada com sucesso! 🎉
            </p>
          )}
        </div>
      </form>
    </Form>
  );
}
