"use client";

import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "../api/chat.api";

export function useSendMessage() {
  return useMutation({
    mutationFn: sendMessage,
  });
}
