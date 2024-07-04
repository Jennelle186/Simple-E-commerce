import { ResetPasswordSubmitButton } from "./reset-password-button";


export default function ResetPasswordPage ({
  searchParams,
} : {
  searchParams: {message: string};
}) {
  return (
      <form className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
      <label className="text-md" htmlFor="email">
        Email
      </label>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        name="email"
        placeholder="you@example.com"
        required
      />
      <ResetPasswordSubmitButton
        // formAction={resetPassword}
        className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
        pendingText="Resetting Password..."
      >
        Reset Password
      </ResetPasswordSubmitButton>
      {searchParams?.message && (
        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
          {searchParams.message}
        </p>
      )} 
  </form>
  )
}

