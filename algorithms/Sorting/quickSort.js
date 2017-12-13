const quickSort = (arr, low, high)=>{
    if(low<high){
        pi = partition(arr, low, high)
        quickSort(arr, low, pi-1)
        quickSort(arr, pi+1, high)   
    }
}


const partition = (arr, low, high)=>{
    let i = low-1;
    let pivot = arr[high];
    for(var j=low; j<high;j++){
        if(arr[j] <= pivot){
            i++;
            // swaps
            [ arr[i],arr[j] ]= [ arr[j],arr[i] ];
        }
    }
    [ arr[i+1],arr[high] ] = [ arr[high], arr[i+1] ];
    let temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;
}

let arr = [10, 30, 80, 90, 40, 50, 70];
quickSort(arr, 0, arr.length-1);
console.log(arr);
