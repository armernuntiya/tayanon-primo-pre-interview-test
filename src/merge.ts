// For implementing function with this interface
//     merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []
// That returns sorted array by ascending.
// given
//      collection_1, collection_3 already sorted from min(0) to max
//      collection_2 already sorted from max to min(0)

function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];

  let i = 0;
  let j = collection_2.length - 1;
  let k = 0;

  while (i < collection_1.length || j >= 0 || k < collection_3.length) {
    if (
      i < collection_1.length &&
      (j < 0 || collection_1[i] <= collection_2[j]) &&
      (k >= collection_3.length || collection_1[i] <= collection_3[k])
    ) {
      result.push(collection_1[i]);
      i++;
    } else if (
      j >= 0 &&
      (i >= collection_1.length || collection_2[j] <= collection_1[i]) &&
      (k >= collection_3.length || collection_2[j] <= collection_3[k])
    ) {
      result.push(collection_2[j]);
      j--;
    } else if (
      k < collection_3.length &&
      (i >= collection_1.length || collection_3[k] <= collection_1[i]) &&
      (j < 0 || collection_3[k] <= collection_2[j])
    ) {
      result.push(collection_3[k]);
      k++;
    }
  }

  return result;
}

const collection_1 = [1, 3, 5];
const collection_2 = [6, 4, 2];
const collection_3 = [7, 8, 9];

console.log(merge(collection_1, collection_2, collection_3));

export { merge };
