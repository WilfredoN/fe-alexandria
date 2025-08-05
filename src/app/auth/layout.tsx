export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)]">
      <div className="w-full max-w-md rounded-2xl bg-[var(--foreground)] p-8 shadow-lg">
        {children}
      </div>
    </div>
  )
}
