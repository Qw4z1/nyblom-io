const daysBetween = (start: string | Date, end: string | Date) => {
  const startDate = guardDate(start);
  const endDate = guardDate(end);

  const difference = endDate.getTime() - startDate.getTime();
  const daysBetween = Math.floor(difference / (1000 * 3600 * 24));

  console.log("Days between", daysBetween);
  return daysBetween;
};

const guardDate = (date: string | Date): Date => {
  if (date instanceof Date) {
    return date;
  } else {
    return new Date(date);
  }
};

export { daysBetween };
