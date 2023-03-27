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




// This code does not execute properly. Try to figure out why.


function multiply(a, b){
  product = a * b
  return product}






  // This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

  function simpleMultiplication(n) {
    if(n % 2 === 0 ){
       return n * 8
      }
      else{
      return n * 9;
      }    
  }







//   Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// // The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

const DNAtoRNA = dna => dna.replace(/T/g, 'U');