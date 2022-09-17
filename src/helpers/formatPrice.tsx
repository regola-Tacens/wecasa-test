export const formatPrice = (price: number) => {
  const firstTwoDigits = price.toString().substring(0, 2);
  const remainingDigits = price.toString().substring(2, 4);

  return `${firstTwoDigits},${remainingDigits} €`
}