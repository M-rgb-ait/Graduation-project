"use server";

export default async function ApiPhoto(formData: FormData) {
  const response = await fetch("https://rose-app.elevate-bootcamp.cloud/api/upload", {
    method: "POST",
    body: formData,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3YzYxMmNkMS01MjI2LTQwMzUtYjI0MS1hMWNjNGQ1MzhhZmQiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTc4NDczODU5MiwiZXhwIjoxNzg1MzQzMzkyfQ.g7qHSEl08164T0g9gZtFOmPzsEXHeGrYeILz2lyeMRY ",
    },
  });

  const payload = await response.json();

  console.log("photo url", payload);

  return payload;
}
