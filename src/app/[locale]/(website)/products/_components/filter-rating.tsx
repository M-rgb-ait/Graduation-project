"use client";

import { useSearchParams } from "next/navigation";
import { Star } from "lucide-react";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import FilterHeader from "./filter-header";
import { cn } from "@/src/lib/utils/cn";

export default function FilterRating() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // بدل rateAvg[gte]
  const selectedRating = Number(searchParams.get("minRating")) || 0;

  const handleRatingClick = (rating: number) => {
    const params = new URLSearchParams(searchParams);

    if (rating === selectedRating) {
      params.delete("minRating");
    } else {
      params.set("minRating", rating.toString());
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="pt-2.5 pb-5">
      <FilterHeader title="Rating" query={["minRating"]} />

      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            className={cn(
              "size-6 cursor-pointer text-amber-500 transition-colors",
              value <= selectedRating ? "fill-amber-500" : "text-amber-500",
            )}
            onClick={() => handleRatingClick(value)}
          />
        ))}
      </div>
    </div>
  );
}
// import { useSearchParams } from "next/navigation";
// import { Star } from "lucide-react";
// import { usePathname, useRouter } from "@/src/i18n/navigation";
// import FilterHeader from "./filter-header";
// import { cn } from "@/src/lib/utils/cn";

// export default function FilterRating() {
//   // Navigation
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   // Variables
//   const selectedRating = Number(searchParams.get("rateAvg[gte]")) || 0;

//   // Functions
//   const handleRatingClick = (rating: number) => {
//     const params = new URLSearchParams(searchParams);
//     if (rating === selectedRating) {
//       params.delete("rateAvg[gte]");
//     } else {
//       params.set("rateAvg[gte]", rating.toString());
//     }
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   return (
//     <div className="pt-2.5 pb-5">
//       {/* Title & Reset */}
//       <FilterHeader title="Rating" query={["rateAvg[gte]"]} />

//       {/* Rating Stars */}
//       <div className="flex gap-1">
//         {[1, 2, 3, 4, 5].map((value) => (
//           <Star
//             key={value}
//             className={cn(
//               "size-6 cursor-pointer text-amber-500 transition-colors",
//               value <= selectedRating ? "fill-amber-500" : "text-amber-500",
//             )}
//             onClick={() => handleRatingClick(value)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useSearchParams } from "next/navigation";
// import { usePathname, useRouter } from "@/src/i18n/navigation";
// import { useForm } from "react-hook-form";
// import { Star } from "lucide-react";

// import {
//   Form,
//   FormField,
//   FormItem,
//   FormControl,
// } from "@/src/components/ui/form";

// import FilterHeader from "./filter-header";
// import { cn } from "@/src/lib/utils/cn";

// type FormValues = {
//   rateAvg: number;
// };

// export default function FilterRating() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const selectedRating = Number(searchParams.get("rateAvg[gte]")) || 0;

//   const form = useForm<FormValues>({
//     defaultValues: {
//       rateAvg: selectedRating,
//     },
//   });

//   const onSubmit = (values: FormValues) => {
//     const params = new URLSearchParams(searchParams);

//     if (!values.rateAvg) {
//       params.delete("rateAvg[gte]");
//     } else {
//       params.set("rateAvg[gte]", values.rateAvg.toString());
//     }

//     // مهم جدًا علشان ميبقاش في history steps كتير
//     router.replace(`${pathname}?${params.toString()}`);
//   };

//   return (
//     <div className="pt-2.5 pb-5">
//       <FilterHeader title="Rating" query={["rateAvg[gte]"]} />

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-1">
//           <FormField
//             control={form.control}
//             name="rateAvg"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <div className="flex gap-1">
//                     {[1, 2, 3, 4, 5].map((value) => (
//                       <button
//                         key={value}
//                         type="submit"
//                         onClick={() =>
//                           field.onChange(value === field.value ? 0 : value)
//                         }
//                       >
//                         <Star
//                           className={cn(
//                             "size-6 cursor-pointer text-amber-500 transition-colors",
//                             value <= field.value && "fill-amber-500",
//                           )}
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 </FormControl>
//               </FormItem>
//             )}
//           />
//         </form>
//       </Form>
//     </div>
//   );
// }
