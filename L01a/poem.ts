

namespace shortPoem {

let sub: String[] = ["John", "Maria", "Ben", "Lenard", "Kyle", "Sarah"];
let prä: String[] = ["träumt", "stirbt", "lacht", "läuft", "singt", "denkt"];
let obj: String[] = ["im Wald", "im Wasser", "im Himmel", "auf dem Boden", "in der Nacht", "am Ende der Welt"];


for (let i: number = 5; i >= 0; i--) {
let min: number = 0;
let max: number = i;
let a: number = Math.floor(Math.random() * (max - min + 1)) + min;
let b: number = Math.floor(Math.random() * (max - min + 1)) + min;
let c: number = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(sub[a], prä[b], obj[c]);
sub.splice(a, 1);
prä.splice(b, 1);
obj.splice(c, 1);
}

}