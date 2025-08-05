import { getDictionary, languages } from "@/app/[lang]/dictionaries"

export default async function LoginPage({
  params,
}: {
  params: Promise<{
    lang: languages
  }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div>
      <form className="flex flex-col items-center gap-4">
        <h1 className="font-sans text-4xl">{dict.auth.login.heading}</h1>
        <input
          type="email"
          autoComplete="email"
          placeholder={dict.auth.login.input.login}
          className="input bg-primary h-12 w-full max-w-72 rounded-4xl p-4 text-white"
        />
        <input
          type="password"
          autoComplete="current-password"
          placeholder={dict.auth.login.input.password}
          className="input bg-primary h-12 w-full max-w-72 rounded-4xl p-4 text-white"
        />
        <button
          type="submit"
          className="bg-secondary rounded-3xl px-6 py-2 text-2xl text-white"
        >
          Login
        </button>
      </form>
      <div className="mt-4">
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <a href="/auth/register" className="text-primary">
            Register
          </a>
        </p>
      </div>
    </div>
  )
}
