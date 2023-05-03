// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false



function isIsogram(str){
    //convert the string to lowercase
      let arr = str.toLowerCase().split('')
      //sort the array
      arr.sort()
    
      //write a loop to go through each word
    
      for(let i = 0; i < arr.length - 1; i++){
        if (arr[i] === arr[i+1]){
          return false
        }


        
      }
      return true
    }