import { useState } from "react"
import { AppContext } from "../../utils/app-context"
import {
  setLocalTheme,
  getLocalTheme,
  getLocalLocale,
  setLocalLocale,
} from "../../utils/app-locals"
import {
  DEFAULT_LOCALE,
  LOCALES_LIST,
  DEFAULT_THEME,
  THEMES_LIST,
} from "../../utils/constants"
import CompanyTable from "../company-table/CompanyTable"
import Select from "../select/Select"

import "./App.scss"

function App() {
  const currentTheme: string = getLocalTheme() || DEFAULT_THEME.value
  const currentLocale: string = getLocalLocale() || DEFAULT_LOCALE.value

  const [theme, setTheme] = useState<string>(currentTheme)
  const [locale, setLocale] = useState<string>(currentLocale)

  const handleThemeChange = (value: string): void => {
    setLocalTheme(value)
    setTheme(value)
  }

  const handleLocaleChange = (value: string): void => {
    setLocalLocale(value)
    setLocale(value)
  }

  return (
    <AppContext.Provider value={{ theme, locale }}>
      <div className={`App App--${theme}`}>
        <header role="banner" className="App__header">
          <h1>Ivaylo interview task</h1>
        </header>
        <nav role="navigation" className="App__table-navigation">
          <Select
            label="Theme:"
            ariaLabel="Change application theme"
            options={THEMES_LIST}
            selected={theme}
            changeHandler={handleThemeChange}
          />
          <br />
          <Select
            label="Locale:"
            ariaLabel="Change application locale"
            options={LOCALES_LIST}
            selected={locale}
            changeHandler={handleLocaleChange}
          />
        </nav>
        <CompanyTable />
      </div>
    </AppContext.Provider>
  )
}

export default App
