// NEED TO FIX BUGS
/* MergeSort(arr[], l,  r) l-left, r-right
If r > l
     1. Find the middle point to divide the array into two halves: 
             middle m = l+ (r-l)/2
     2. Call mergeSort for first half:  
             Call mergeSort(arr, l, m)
     3. Call mergeSort for second half:
             Call mergeSort(arr, m+1, r)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, l, m, r)

             */

function mergeSort(arrayToSort) {
  let midElemIndex = Math.floor(arrayToSort.length / 2);
  let leftPart = arrayToSort.slice(0, midElemIndex);
  let rightPart = arrayToSort.slice(midElemIndex);

  if (arrayToSort.length === 1 || arrayToSort === 0) {
    return arrayToSort;
  }
  return merge(mergeSort(leftPart), mergeSort(rightPart));
}

function merge(leftPart, rightPart) {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftPart.length && rightIndex < rightIndex.length) {
    if (leftPart[leftIndex] < right[rightIndex]) {
      sortedArray.push(leftPart[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(rightPart[rightIndex]);
      rightIndex++;
    }
  }

  return [...sortedArray, ...leftPart, ...rightPart]
}

console.log(mergeSort([34, 11, 3, 67, 8, 15, 9, 23, 55]));
