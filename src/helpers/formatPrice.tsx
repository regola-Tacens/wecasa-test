export const formatPrice = (price: number) => {
  const firstTwoDigits = Number(price.toString().substring(0, 2))
  const remainingDigits = Number(price.toString().substring(2, 4))
  return parseFloat((firstTwoDigits + (remainingDigits/100)).toFixed(2))
}

export const formatMultipliedPrice = (quantity: number | undefined, price: number) => {
  return (quantity && formatPrice(price)*quantity)?.toFixed(2)
}
