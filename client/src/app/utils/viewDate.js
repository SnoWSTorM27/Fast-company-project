export function viewDate(data) {
  const date = new Date(data);
  const dateNow = new Date();
  const yearDiff = dateNow.getFullYear() - date.getFullYear();
  if (yearDiff === 0) {
    const monthsDiff = dateNow.getMonth() - date.getMonth();
    if (monthsDiff === 0) {
      const hoursDiff = dateNow.getHours() - date.getHours();
      if (hoursDiff === 0) {
        const minutesDiff = dateNow.getMinutes() - date.getMinutes();
        if (minutesDiff >= 0 && minutesDiff < 5) return "1 минуту назад";
        if (minutesDiff >= 5 && minutesDiff < 10) return "5 минут назад";
        if (minutesDiff >= 10 && minutesDiff < 30) {
          return "10 минут назад";
        }
        return "30 минут назад";
      }
      return `${date.getHours()}.${date.getMinutes()}`;
    }
    return date.toLocaleString("default", { month: "long", day: "numeric" });
  }
  return (date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear());
}
