import { LoremIpsum } from "lorem-ipsum";

export const formatPrice = (number) => {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "EUR",
  }).format(number / 100);
};

export const generateLorem = (count) => {
  const lorem = new LoremIpsum({});
  return lorem.generateWords(count);
};
