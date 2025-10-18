
"use client";

import { useCurrency, Currency } from "@/context/currency-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { currencies } from "@/context/currency-context";

export function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <Select value={currency.code} onValueChange={(value) => setCurrency(value as Currency['code'])}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a currency" />
      </SelectTrigger>
      <SelectContent>
        {Object.values(currencies).map((c) => (
          <SelectItem key={c.code} value={c.code}>
            {c.name} ({c.symbol})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
