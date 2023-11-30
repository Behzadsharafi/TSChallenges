export function countSmileys(arr: string[]): number {
  return arr.filter((x) => x.match(/[:;][-~]?[)D]/)).length;
}

console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
