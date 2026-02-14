"use server";

import { JSON_HEADER } from "../constants/api.constant";
import { NewsLetterFormValues } from "../schemes/newsletter.schema";

export const subscription = async (values: NewsLetterFormValues) => {
  try {
    const res = await fetch(`${process.env.API}/subscriptions/subscribe`, {
      method: "POST",
      headers: JSON_HEADER,
      body: JSON.stringify(values),
    });

    const payload: APIResponse<Subscription> = await res.json();

    if (!res.ok || (payload as ErrorResponse).error) {
      throw new Error(
        (payload as ErrorResponse).error ||
          "Something went wrong, try again later",
      );
    }

    return payload as SuccessfullResponse<Subscription>;
  } catch (err) {
    throw err;
  }
};
