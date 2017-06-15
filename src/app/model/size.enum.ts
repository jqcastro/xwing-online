const Size = {
  Regular: 'regular' as 'regular',
  Large: 'large' as 'large'
}
type Size = (typeof Size)[keyof typeof Size];
export { Size };

type SizeIndex = { [size in Size]?: number };
export const Sizes: SizeIndex = {
  [Size.Regular]: 40,
  [Size.Large]: 80
};
