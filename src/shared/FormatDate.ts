export function FormatDate(currentDate: Date): string {
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}${month}${day}`;
}
