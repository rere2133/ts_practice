// 泛型 Generics : 不預先指定具體型別，在使用時再指定，靈活、程式碼重用性高
//=== Example 1 ： 物件泛型 ===
type Option<T> = {
  label: string;
  value: T;
};
const optionsWithNumberValue: Option<number>[] = [
  {
    label: "選項一",
    value: 123,
  },
  {
    label: "選項二",
    value: 20,
  },
  {
    label: "選項三",
    value: 555,
  },
];
const option: Option<string> = {
  label: "選項",
  value: "value A",
};

//=== Example 2 ： 函式泛型 ===
function getValueWith(option: Option<string>): string {
  return option.value;
}

//=== Example 3 ： 函式泛型 ===
function getValueWith2<T>(option: Option<T>): T {
  return option.value;
}
getValueWith2(option);
// 也可以是以下的寫法
type MyFn = <T>(option: Option<T>) => T;
const fnA: MyFn = (option) => {
  return option.value;
};
// or在宣告函式時，必須特別指定一個型別給T，此時T就要放函是名稱後面
type MyFn2<T> = (option: Option<T>) => T;
const funB: MyFn2<string> = (option) => {
  return option.value;
};

//=== Example 3 ： 泛型約束 ===
function myFn<T extends { length: number }>(param: T) {
  return param.length;
}
// T雖然是自訂型別，但其中必須包含length的屬性
