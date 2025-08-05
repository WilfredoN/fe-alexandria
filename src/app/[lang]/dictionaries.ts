import "server-only"

export type languages = "en" | "uk"

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  uk: () => import("./dictionaries/uk.json").then((module) => module.default),
}

export const getDictionary = async (locale: languages) => {
  const dictFn = dictionaries[locale] ?? dictionaries["en"]
  return dictFn()
}
