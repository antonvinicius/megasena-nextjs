export default function GenerateNumbers(min, max, quantity) {
  let numbers = [];

  for (let i = 0; i < quantity; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    if (!numbers.find(item => item == randomNumber)){
        numbers.push(randomNumber);
    }else{
        i--;
    }
  }

  return numbers.sort((a,b) => a - b);
}
