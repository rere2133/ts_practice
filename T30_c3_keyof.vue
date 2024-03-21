<template>
  <div></div>
</template>

<script setup lang="ts">
// 型別操作符 - keyof
//=== Example 1 ===
type Person = {
  name: string;
  age: number;
  married: boolean;
};
type PersonProperty = keyof Person;
// PersonProperty = 'name'|'age'|'married' ，PersonProperty只能等於這些值

//=== Example 2 ===
type List = string[];
type KeyOfList = keyof List;
// KeyOfList = number，陣列的索引都是number

//=== Example 3 ===
type Arrayish = { [n: number]: unknown };
type KeyOfArrayish = keyof Arrayish;
// KeyOfArrayish = number

//=== Example 4 特例 ===
type MyObject = { [k: string]: string };
type KeyOfMyObject = keyof MyObject;
// MyObject = string | number，js會把obj[0]與obj["0"]視為相同的！
const keyOfMyObject: KeyOfMyObject = 0;
const object: MyObject = {
  0: "Hello",
};
console.log(object[keyOfMyObject]);
</script>

<style scoped></style>
