function displayEvenNumbers(){
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 == 0){
            evenNumbers.push(numbers[i]);
        }
           
    }

    return evenNumbers; 
}
; // should return [2,4,6,8]