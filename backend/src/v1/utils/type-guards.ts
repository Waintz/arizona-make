export const ensureString = (val: any): string => {
  if (Array.isArray(val)) return String(val[0]);
  return String(val);
};