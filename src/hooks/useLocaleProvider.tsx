'use client';

import { createContext, useContext } from 'react';

import { FALLBACK_LOCALE, Locales } from '../i18n/settings';

const LocalContext = createContext<Locales>(FALLBACK_LOCALE);

const { Provider } = LocalContext;

export function LocaleProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Locales;
}) {
  return <Provider value={value}>{children}</Provider>;
}

export function useLocale() {
  const context = useContext(LocalContext)
  if (context === undefined) {
    throw new Error("Context does not exist")
  }
  return context
}
