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
    <form className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{dict.auth.login.heading}</h1>
      <input
        type="email"
        placeholder={dict.auth.login.input.login}
        className="input"
      />
      <input
        type="password"
        placeholder={dict.auth.login.input.password}
        className="input"
      />
      <button type="submit" className="btn">
        Login
      </button>
    </form>
  )
}
