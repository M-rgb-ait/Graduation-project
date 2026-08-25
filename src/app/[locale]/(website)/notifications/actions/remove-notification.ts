"use server";

export default async function removeNotificatinId(id: string) {
  try {
    const response = await fetch(
      `https://rose-app.elevate-bootcamp.cloud/api/notifications/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3YzYxMmNkMS01MjI2LTQwMzUtYjI0MS1hMWNjNGQ1MzhhZmQiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc4NzY1NDYxNiwiZXhwIjoxNzg4MjU5NDE2fQ.FHpAq6SfTpnOVV3PR_Ny3HdPaOUOqRsr8X4o0Sz3ajE `,
        },
      },
    );
    const payload = await response.json();
    return payload;
  } catch (error) {
    throw error;
  }
}
