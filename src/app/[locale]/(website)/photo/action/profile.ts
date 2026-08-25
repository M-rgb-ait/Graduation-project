// actions/update-profile.ts

"use server";

export default async function updateProfile(data: { photo: string }) {
  const response = await fetch("https://rose-app.elevate-bootcamp.cloud/api/users/profile", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3YzYxMmNkMS01MjI2LTQwMzUtYjI0MS1hMWNjNGQ1MzhhZmQiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc4NDczODU5MiwiZXhwIjoxNzg1MzQzMzkyfQ.g7qHSEl08164T0g9gZtFOmPzsEXHeGrYeILz2lyeMRY ",
    },
    body: JSON.stringify(data),
  });

  const payload = await response.json();

  console.log("update profile", payload);

  return payload;
}
