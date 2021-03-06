import React from "react"
import { getLocalLocale, getLocalTheme } from "./app-locals"
import { DEFAULT_LOCALE, DEFAULT_THEME } from "./constants"

interface ContextProps {
  theme: string
  locale: string
}

const currentTheme: string = getLocalTheme() || DEFAULT_THEME.value
const currentLocale: string = getLocalLocale() || DEFAULT_LOCALE.value

export const AppContext = React.createContext<ContextProps>({
  theme: currentTheme,
  locale: currentLocale,
})
