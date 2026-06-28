"use client";
type StepperProgressProps = {
  step: number;
};

export default function StepperProgress({ step }: StepperProgressProps) {
  return (
    <div className="relative flex w-full items-center justify-between px-2 py-4">
      {[1, 2, 3].map((number, index) => {
        const isActive = step >= number;
        const shouldShow = number !== 3 || step === 3;

        return (
          <div key={index} className="relative flex-1">
            {/* Font */}
            <div
              className={`h-1 w-full rounded-full ${step > number - 1 ? "bg-red-700 dark:bg-softpink-400" : "bg-muted"}`}
            />
            {/* circal */}
            <div
              className={`absolute left-full top-full z-10 flex h-6 w-6 -translate-x-[55%] -translate-y-[55%] items-center justify-center rounded-full text-xs ${
                isActive
                  ? "bg-red-700 text-white dark:bg-softpink-400"
                  : "bg-muted text-muted-foreground"
              } ${shouldShow ? "" : "pointer-events-none opacity-0"}`}
            >
              {number}
            </div>
          </div>
        );
      })}
    </div>
  );
}
