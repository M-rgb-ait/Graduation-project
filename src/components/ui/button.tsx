// import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
// import { cva, type VariantProps } from "class-variance-authority";

// import { cn } from "@/lib/utils/cn";
// // import { LoaderCircle } from "lucide-react";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
//         outline:
//           "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
//         secondary:
//           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         ghost:
//           "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-9 px-4 py-2 has-[>svg]:px-3",
//         sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
//         lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
//         icon: "size-9",
//         "icon-sm": "size-8",
//         "icon-lg": "size-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// );

// function Button({
//   className,
//   variant = "default",
//   size = "default",
//   asChild = false,
//   ...props
// }: React.ComponentProps<"button"> &
//   VariantProps<typeof buttonVariants> & {
//     asChild?: boolean;
//   }) {
//   const Comp = asChild ? Slot : "button";

//   return (
//     <Comp
//       data-slot="button"
//       data-variant={variant}
//       data-size={size}
//       className={cn(buttonVariants({ variant, size, className }))}
//       {...props}
//     />
//   );
// }
// // function Button({
// //   className,
// //   variant = "default",
// //   size = "default",
// //   asChild = false,
// //   isLoading = false,
// //   disabled,
// //   children,
// //   ...props
// // }: React.ComponentProps<"button"> &
// //   VariantProps<typeof buttonVariants> & {
// //     asChild?: boolean;
// //     isLoading?: boolean;
// //   }) {
// //   const Comp = asChild ? Slot : "button";

// //   return (
// //     <Comp
// //       data-slot="button"
// //       data-variant={variant}
// //       data-size={size}
// //       disabled={disabled || isLoading}
// //       className={cn(buttonVariants({ variant, size }), className)}
// //       {...props}
// //     >
// //       {isLoading && <LoaderCircle className="size-4 animate-spin" />}

// //       <span className={cn(isLoading && "opacity-0")}>{children}</span>
// //     </Comp>
// //   );
// // }

// export { Button, buttonVariants };

import * as React from "react";
import { LoaderCircle } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/src/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none  [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        primary:
          "bg-maroon-600 text-white hover:bg-maroon-700 dark:bg-softpink-300  dark:text-zinc-800 dark:hover:bg-softpink-400 disabled:bg-zinc-300 disabled:text-zinc-500 disabled:dark:bg-zinc-700 disabled:dark:text-zinc-600",
        brand:
          "bg-maroon-50 text-maroon-700 hover:bg-maroon-100 dark:bg-softpink-300  dark:text-zinc-800 dark:hover:bg-softpink-400 disabled:bg-zinc-300 disabled:text-zinc-500 disabled:dark:bg-zinc-700 disabled:dark:text-zinc-600",
        secondary:
          "bg-maroon-50 text-maroon-600 hover:bg-maroon-100 disabled:bg-zinc-300 disabled:text-zinc-800 dark:bg-zinc-700 dark:text-softpink-300 dark:hover:bg-zinc-600 disabled:dark:bg-zinc-700 disabled:dark:text-zinc-600",

        outline:
          "border border-maroon-600 bg-white text-maroon-600 hover:bg-maroon-50 disabled:border-zinc-300 disabled:bg-zinc-100 disabled:text-zinc-400  dark:border-softpink-300 dark:bg-zinc-800 dark:text-softpink-300 dark:hover:bg-zinc-700 disabled:dark:border-zinc-600 disabled:dark:bg-zinc-800 disabled:dark:text-zinc-600",
        subtle:
          "border border-zinc-400 bg-zinc-50 text-zinc-800 hover:bg-zinc-100 disabled:border-zinc-300 disabled:bg-zinc-100 disabled:text-zinc-400 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-500 disabled:dark:border-zinc-600 disabled:dark:bg-zinc-800 disabled:dark:text-zinc-600",
        ghost:
          "text-zinc-800 hover:bg-zinc-100 disabled:bg-zinc-100 disabled:text-zinc-400 dark:text-zinc-50 dark:hover:bg-zinc-700 disabled:dark:bg-zinc-700 disabled:dark:text-zinc-600",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 disabled:bg-zinc-300 disabled:text-zinc-500 dark:bg-red-500 dark:hover:bg-red-600 disabled:dark:bg-zinc-700 disabled:dark:text-zinc-600",
        empty: "",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "rounded-[10px] px-4 py-[10px]",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        empty: "rounded-none p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { icon?: () => React.ReactNode; spinner?: boolean }
>(
  (
    { className, variant, size, icon, spinner, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const content = (
      <>
        {props.children}
        {spinner ? (
          <LoaderCircle className="mr-3 size-5 animate-spin" />
        ) : (
          icon?.()
        )}
      </>
    );

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {asChild ? props.children : content}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
