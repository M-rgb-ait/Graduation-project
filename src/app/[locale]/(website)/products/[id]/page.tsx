"use client";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams();
  return (
    <section>
      <div>atta {id}</div>
    </section>
  );
}
