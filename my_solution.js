function shiftedBinarySearch(array, target) {
  let low = 0
	let high = array.length - 1
	
	while(low <= high){
		const mid = Math.floor( (low + high) / 2 )
		if(array[mid] === target) return mid
		
		// check if left is sorted
		if(array[low] <= array[mid]){
			// check if target is in this area
			if(target < array[mid] && target >= array[low]){
				// if it is, change the look window to be on the left
				high = mid - 1
			} else { // otherwise its on the right
				low = mid + 1
			}
		}
		
		// right must be sorted
		else {
			// double check that right side is sorted and target is on right
			if ( target > array[mid] && target <= array[high] ){
				low = mid + 1
			} else {
				high = mid - 1
			}
		}
	}
	
	return -1
}
