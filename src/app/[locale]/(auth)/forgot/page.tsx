import ResetPasswordFlowSteps from "../_components/reset-password-flow-steps";
import ResetPasswordFlowProvider from "../_providers/reset-password-flow.provider";

export default function Page() {
  return (
    <ResetPasswordFlowProvider>
      <ResetPasswordFlowSteps />
    </ResetPasswordFlowProvider>
  );
}
