
"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

export type Currency = {
  code: 'USD' | 'GBP' | 'PKR' | 'EUR';
  name: string;
  symbol: string;
  rate: number; // Rate relative to USD
};

export const currencies: Record<Currency['code'], Currency> = {
  USD: { code: 'USD', name: 'US Dollar', symbol: '$', rate: 1 },
  GBP: { code: 'GBP', name: 'British Pound', symbol: '£', rate: 0.79 },
  PKR: { code: 'PKR', name: 'Pakistani Rupee', symbol: 'PKR', rate: 278 },
  EUR: { code: 'EUR', name: 'Euro', symbol: '€', rate: 0.92 },
};

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (code: Currency['code']) => void;
  formatPrice: (amount: number, options?: Intl.NumberFormatOptions) => string;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrencyState] = useState<Currency>(currencies.USD);

  const setCurrency = (code: Currency['code']) => {
    setCurrencyState(currencies[code]);
  };

  const formatPrice = (amount: number, options?: Intl.NumberFormatOptions) => {
    const convertedAmount = amount * currency.rate;
    
    if (currency.code === 'PKR') {
        // Special formatting for PKR to avoid decimal places for large numbers
        const roundedAmount = Math.round(convertedAmount);
        return `${currency.symbol} ${roundedAmount.toLocaleString('en-US', options)}`;
    }

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.code,
      ...options,
    }).format(convertedAmount);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
