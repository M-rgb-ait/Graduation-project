import ResetPasswordFlowSteps from "../_components/reset-password-flow-steps";
import ResetPasswordFlowProvider from "../_providers/reset-password-flow.provider";

export default function page() {
  return (
    <ResetPasswordFlowProvider>
      <ResetPasswordFlowSteps />
    </ResetPasswordFlowProvider>
  );
}
