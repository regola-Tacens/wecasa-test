export const formatPrice = (price: number) => {
  const firstTwoDigits = price.toString().substring(0, 2);
  const remainingDigits = price.toString().substring(2, 4);
  return `${firstTwoDigits}.${remainingDigits} €`
}

export const formatMultipliedPrice = (quantity: number | undefined, price: number) => {
  const firstTwoDigits = Number(price.toString().substring(0, 2));
  const remainingDigits = Number(price.toString().substring(2, 4));
  return quantity && ((firstTwoDigits + remainingDigits/100)*quantity).toFixed(2)
}