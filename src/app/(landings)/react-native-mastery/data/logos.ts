// 36 company logos used in the infinite carousel
export const logoImages = Array.from({ length: 36 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return `/images/react-native-mastery/logos/${num}.avif`;
});
