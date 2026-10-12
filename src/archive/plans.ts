// Language-neutral plan numbers. Cards and spec table both read from here.
export type PlanId = "payg" | "lite" | "core" | "pro";

export interface Plan {
  id: PlanId;
  price: number; // euros
  unit: "hour" | "month";
  hours: number | null; // hours included per month, null for pay-as-you-go
  featured?: boolean;
}

export const plans: Plan[] = [
  { id: "payg", price: 45, unit: "hour", hours: null },
  { id: "lite", price: 590, unit: "month", hours: 12 },
  { id: "core", price: 1190, unit: "month", hours: 24, featured: true },
  { id: "pro", price: 1990, unit: "month", hours: 40 },
];

/** Effective hourly rate, rounded to whole euros. */
export const hourlyRate = (p: Plan): number =>
  p.hours ? Math.round(p.price / p.hours) : p.price;
