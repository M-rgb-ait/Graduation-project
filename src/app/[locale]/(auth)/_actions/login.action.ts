"use server";

import { loginFields } from "@/src/lib/schemes/auth.schemes";
import { JSON_HEADER } from "../../../../lib/constants/api.constant";
import { handleAccessTokenCookie } from "@/src/lib/utils/token";
export default async function LoginAction(values: loginFields) {
  try {
    const respons = await fetch(`${process.env.API}/auth/signin`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { ...JSON_HEADER },
    });
    const payload: APIResponse<loginRespons> = await respons.json();
    if (!respons.ok || (payload as ErrorResponse).error) {
      throw Error(
        (payload as ErrorResponse).error ||
          "Something went wrong, try again later",
      );
    }
    console.log("login payload", payload);
    if ("token" in payload) {
      await handleAccessTokenCookie(payload.token);
    } else {
      console.error(payload.error);
    }

    return payload;
  } catch (error) {
    throw error;
  }
}

// "use server";

// import { loginFields } from "@/src/lib/schemes/auth.schemes";
// import { JSON_HEADER } from "../../../../lib/constants/api.constant";
// import { handleAccessTokenCookie } from "@/src/lib/utils/token";
// export default async function LoginAction(values: loginFields) {
//   try {
//     const respons = await fetch(
//       `${process.env.API}/auth/login`,
//       // "https://rose-app.elevate-bootcamp.cloud/api/auth/login",
//       {
//         method: "POST",
//         body: JSON.stringify(values),
//         headers: { ...JSON_HEADER },
//       },
//     );
//     const payload: APIResponse<loginRespons> = await respons.json();
//     if (!respons.ok || (payload as ErrorResponse).error) {
//       throw Error(
//         (payload as ErrorResponse).error ||
//           "Something went wrong, try again later",
//       );
//     }
//     console.log("login payload", payload);
//     const token = payload.payload?.token;

//     if (!token) {
//       throw new Error("Token not found in response");
//     }

//     await handleAccessTokenCookie(token);

//     return payload;
//   } catch (error) {
//     throw error;
//   }
// }
