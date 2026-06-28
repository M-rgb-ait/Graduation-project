"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/src/components/ui/form";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { useForm, useWatch } from "react-hook-form";

import { useSendMessage } from "../hook/use-chat";
import { chatSchema, type ChatSchema } from "@/src/lib/schemes/chat-schema";
import ChatLoading from "./chat-loading";
import { Loader2, SendHorizontal } from "lucide-react";
import { useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};
export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { mutate, isPending } = useSendMessage();

  const form = useForm<ChatSchema>({
    resolver: zodResolver(chatSchema),
    defaultValues: {
      message: "",
    },
  });

  const message = useWatch({
    control: form.control,
    name: "message",
  });

  const onSubmit = (values: ChatSchema) => {
    const message = values.message.trim();

    if (!message) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);

    form.reset();
    form.setFocus("message");

    mutate(message, {
      onSuccess: (data) => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.reply,
          },
        ]);
      },

      onError: (error) => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              error instanceof Error ? error.message : "Something went wrong.",
          },
        ]);
      },
    });
  };

  //   useEffect(() => {
  //     bottomRef.current?.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }, [messages, isPending]);
  return (
    <div className="mx-auto flex h-[calc(100vh-100px)] max-w-4xl p-6">
      <Card className="flex h-full w-full flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b p-6">
          <h2 className="text-xl font-semibold">AI Assistant</h2>
          <p className="text-sm text-muted-foreground">Ask me anything...</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] rounded-3xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}

          {isPending && <ChatLoading />}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="shrink-0 border-t p-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex items-center gap-3"
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        {...field}
                        ref={(element) => {
                          field.ref(element);
                          inputRef.current = element;
                        }}
                        placeholder="Type your message..."
                        disabled={isPending}
                        className="h-12 rounded-full border-0 bg-muted px-5 focus-visible:ring-1"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="icon"
                disabled={isPending || !message?.trim()}
                className="h-12 w-12 rounded-full transition-all duration-200"
              >
                {isPending ? (
                  <Loader2 className="size-5 animate-spin" />
                ) : (
                  <SendHorizontal className="size-5" />
                )}
              </Button>
            </form>
          </Form>
        </div>
      </Card>
    </div>
  );
}
