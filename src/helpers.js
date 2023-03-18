export const formatPrice = (number) => {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "EUR",
  }).format(number / 100);
};
