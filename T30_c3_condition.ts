// type 與 interface 的差異？

//=== Example 1 ===
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
type Example1 = Dog extends Animal ? number : string;
// 如果 Dog extends Animal ，那type Example1 = number，否則 =string
// type Example1 = number

//=== Example 2 ===
interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}
// 一個func要支援不同的參數以及不同的回傳值，必須寫下面這幾行。
// function createLabel(id:number):IdLabel;
// function createLabel(name:string):NameLabel;
// function createLabel(nameOrId:string | number):IdLabel |NameLabel;
// function createLabel(nameOrId:string | number):IdLabel |NameLabel{
//   throw 'unimplemented'
// };
// 可用條件類型＋泛型來替代以上四行寫法
type NumberOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
function createLabel<T extends number | string>(numberOrId: T): NumberOrId<T> {
  throw "unimplemented";
}
// extends 關鍵字的功能包含：泛型約束、繼承以及繼承檢查

//=== Example 3 ===
type Flatten<T> = T extends any[] ? T[number] : T;
// or
// type Flatten<T>= T extends Array<infer Item>? Item : T
// Array<...> 為 TS 內建陣列泛型
// infer 為 TS 關鍵字，用來作為 extends 待推斷的type變數
// 在此處的意思是，傳入的如果是陣列，陣列中的值是什麼型別就會回傳此型別
type Str = Flatten<string[]>;
// type Str = string
type Num = Flatten<number>;
// type Num = number
