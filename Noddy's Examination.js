var [n, x] = [7, 6]
arr = [
    4, 3, 7, 6,
    7, 2, 2
]
console.log(Maximum_marks_can_be_scored(arr,n,x))
function Maximum_marks_can_be_scored(arr, n, x) {
    var skip = 0, marks = 0
    for (let i = 0; i < n; i++) {
        if (arr[i] <= x) {
            marks++
        } else if(skip < 1){
            skip++
        }else {
            break;
        }
    }
    return marks
}