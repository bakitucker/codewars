// Write a function "greet" that returns "hello world!"


function greet(){
    const helloWorld = "hello world!"
    return helloWorld
  }

  



  // write a function that takes an array of words

// concatenate words from the array
// put them into a sentence and return the sentence

// add spaces between each word
// no space at the beginning or the end of the sentence
function smash (words) {
  let sentence = ''
  if(words.length === 0)return ''
    
  if(words.length === 1) return words[0]
  
  for(let i = 0; i< words.length; i++){
    sentence = sentence + words[i] + ' '
  }
  
   return sentence.trim()
};




