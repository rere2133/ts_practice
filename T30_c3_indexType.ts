// 索引類型
//=== Example 1 ===
type PersonA = {
  name: string;
  age: number;
  married: boolean;
};
type Age = PersonA["age"];
// Age = number
type MyType = PersonA["age" | "married"];
// MyType = number | boolean
type MyType2 = PersonA[keyof PersonA];
// MyType2 = string | number | boolean

//=== Example 2 ===
const list = [
  {
    name: "Leo",
    age: 18,
    married: true,
  },
  {
    name: "RRR",
    age: 18,
    married: true,
  },
];
type Person2 = (typeof list)[number];
// 抓取陣列中的物件型別， 也可以寫成 list[0](以陣列中第一個值為型別)
/*
 Person2 = {
  name: string;
  age: number;
  married: boolean;
}
*/
type MyType3 = Person2[keyof Person2];
// MyType3 = string | number | boolean
