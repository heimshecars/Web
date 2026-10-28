const gbp = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });

/** Money is stored in pence (integers) to avoid rounding errors. 1250 → "£12.50". */
export function formatMoney(pence: number): string {
  return gbp.format(pence / 100);
}
