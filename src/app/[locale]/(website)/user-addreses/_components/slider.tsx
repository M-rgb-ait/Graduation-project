// "use client";
type StepperProgressProps = {
  step: 1 | 2 | 3;
  completed: boolean;
};
export default function StepperProgress({
  step,
  completed,
}: StepperProgressProps) {
  return (
    <div className="flex items-center">
      {/* Left */}
      <div
        className={`h-1 flex-1 rounded-full ${
          step >= 1 ? "bg-red-700 dark:bg-softpink-400" : "bg-muted"
        }`}
      />

      {/* Step 1 */}
      <div className="mx-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-700 text-white dark:bg-softpink-400">
        1
      </div>

      {/* Middle */}
      <div
        className={`h-1 flex-1 rounded-full ${
          step >= 2 ? "bg-red-700 dark:bg-softpink-400" : "bg-muted"
        }`}
      />

      {/* Step 2 */}
      <div
        className={`mx-2 flex h-8 w-8 items-center justify-center rounded-full ${
          completed
            ? "bg-red-700 text-white dark:bg-softpink-400"
            : "bg-muted text-muted-foreground"
        }`}
      >
        2
      </div>

      {/* Right */}
      <div
        className={`h-1 flex-1 rounded-full ${
          step >= 3 ? "bg-red-700 dark:bg-softpink-400" : "bg-muted"
        }`}
      />
    </div>
  );
}
// // import { Check } from "lucide-react";
// import React from "react";

// type StepperProgressProps = {
//   step: 1 | 2;
// };

// export default function StepperProgress({ step }: StepperProgressProps) {
//   // const steps = [1, 2];

//   return (
//     <div className="flex items-center w-full">
//       {/* Left Line */}
//       <div className="h-1 flex-1 rounded-full bg-muted" />

//       {[1, 2].map((number, index) => (
//         <React.Fragment key={number}>
//           {/* Circle */}
//           <div
//             className={`mx-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
//               step >= number
//                 ? "bg-red-700 text-white dark:bg-softpink-400"
//                 : "bg-muted text-muted-foreground"
//             }`}
//           >
//             {number}
//           </div>

//           {/* Middle Line */}
//           {index === 0 && (
//             <div
//               className={`h-1 flex-1 rounded-full ${
//                 step > 1 ? "bg-red-700 dark:bg-softpink-400" : "bg-muted"
//               }`}
//             />
//           )}
//         </React.Fragment>
//       ))}

//       {/* Right Line */}
//       <div className="h-1 flex-1 rounded-full bg-muted" />
//     </div>
//   );
// }
// import { Check } from "lucide-react";

// type StepperProgressProps = {
//   step: number;
// };

// export default function StepperProgress({ step }: StepperProgressProps) {
//   const steps = [1, 2, 3];

//   return (
//     <div className="flex items-center w-full">
//       {steps.map((number, index) => {
//         const completed = step > number;
//         const current = step === number;

//         return (
//           <div key={number} className="flex items-center flex-1">
//             {/* Circle */}
//             <div
//               className={`
//                 flex h-10 w-10 shrink-0 items-center justify-center rounded-full
//                 transition-all duration-300
//                 ${
//                   completed
//                     ? "bg-red-700 text-white dark:bg-softpink-400"
//                     : current
//                       ? "border-4 border-red-200 bg-red-700 text-white dark:border-softpink-900 dark:bg-softpink-400"
//                       : "border-2 border-muted bg-background text-muted-foreground"
//                 }
//               `}
//             >
//               {completed ? (
//                 <Check className="h-5 w-5" />
//               ) : (
//                 <span className="font-semibold">{number}</span>
//               )}
//             </div>

//             {/* Line */}
//             {index < steps.length - 1 && (
//               <div
//                 className={`mx-3 h-1 flex-1 rounded-full transition-all duration-300 ${
//                   step > number ? "bg-red-700 dark:bg-softpink-400" : "bg-muted"
//                 }`}
//               />
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// "use client";
// type StepperProgressProps = {
//   step: number;
// };

// export default function StepperProgress({ step }: StepperProgressProps) {
//   return (
//     <div className="relative flex w-full items-center justify-between px-2 py-4">
//       {[1, 2, 3].map((number, index) => {
//         const isActive = step >= number;
//         const shouldShow = number !== 3 || step === 3;

//         return (
//           <div key={index} className="relative flex-1">
//             {/* Font */}
//             <div
//               className={`h-1 w-full rounded-full ${step > number - 1 ? "bg-red-700 dark:bg-softpink-400" : "bg-muted"}`}
//             />
//             {/* circal */}
//             <div
//               className={`absolute left-full top-full z-10 flex h-6 w-6 -translate-x-[55%] -translate-y-[55%] items-center justify-center rounded-full text-xs ${
//                 isActive
//                   ? "bg-red-700 text-white dark:bg-softpink-400"
//                   : "bg-muted text-muted-foreground"
//               } ${shouldShow ? "" : "pointer-events-none opacity-0"}`}
//             >
//               {number}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
