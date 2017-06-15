const Difficulty = {
  Green: 'green' as 'green',
  White: 'white' as 'white',
  Red: 'red' as 'red'
}
type Difficulty = (typeof Difficulty)[keyof typeof Difficulty];
export { Difficulty };
