const Unit = {
  Pixel: 'px' as 'px',
  Percentage: '%' as '%'
}
type Unit = (typeof Unit)[keyof typeof Unit];
export { Unit };
