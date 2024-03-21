// 映射類型 Type Mapping: 透過 keyof 關鍵字，可以將一個介面的所有屬性映射到另一個介面上
//=== Example 1 : 轉換屬性類型 ===
type OptionsFlags<Type> ={
  [Property in keyof Type]: boolean
}
// 傳去來的Type物件裡的每個屬性值，都會變成boolean的type
type Features = {
  darkMode: ()=> void;
  newUserProfile: ()=>void;
}
type FeatureOptions = OptionsFlags<Features>
/* 
type FeatureOptions = {
  darkMode: boolean;
  newUserProfile: boolean;
}
*/

//=== Example 2 : 拿掉型別中的前綴 ===
type CreateMutable<T>={
  -readonly [Property in keyof T]: T[Property]
}
// -readonly == 移除readonly
type LockedAccount={
  readonly id: number;
  readonly name: string;
}
type UnlockedAccount = CreateMutable<LockedAccount>
/*
type UnlockedAccount = {
    id: number;
    name: string;
}
*/

//=== Example 3 : 拿掉型別中的optional ===
type Concrete<T>={
  [Property in keyof T]-? : T[Property]
}
// -? == 移除?
type MaybeUser={
  id: number;
  name?: string;
  age?: number;
}
type User = Concrete<MaybeUser>
/*
type User = {
    id: number;
    name: string;
    age: number;
}
*/

//=== Example 4 : 重新命名與組合成新類別 ===
type Getters<T>={
  [Property in keyof T as `get${Capitalize<string & Property>}`]: ()=> T[Property]
}
// 將傳進去的類別屬性重新命名成 get+屬性首字大寫，並且值為函式回傳原本屬性值的類別
// 告訴TS我的Property 一定是string 類型的就要加上 string & ，不然會報錯
type PersonC = {
  name: string;
  age: number;
  location: string;
}
type LazyPerson = Getters<PersonC>
/*
type LazyPerson = {
    getName: () => string;
    getAge: () => number;
    getLocation: () => string;
}
*/