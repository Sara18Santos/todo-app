
// utils/date.ts

/** Convert input[type="date"] value (yyyy-MM-dd) -> ISO string */
export const inputDateToIso = (input?: string) => {
  if (!input) return undefined;
  const d = new Date(input); // input is yyyy-MM-dd
  if (isNaN(d.getTime())) return undefined;
  return d.toISOString();
};

/** Format an ISO date string as dd-mm-yyyy */
export const formatDDMMYYYY = (iso?: string) => {
  if (!iso) return "—";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "—";
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
};

/** Convert ISO -> input[type="date"] (yyyy-MM-dd) */
export const isoToInputDate = (iso?: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};
