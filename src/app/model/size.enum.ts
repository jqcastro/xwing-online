const Size = {
  Regular: 'regular' as 'regular',
  Large: 'large' as 'large'
}
type Size = (typeof Size)[keyof typeof Size];
export { Size };

export const Sizes: {[key: number]: number} = {
  [Size.Regular]: 40,
  [Size.Large]: 80
};
