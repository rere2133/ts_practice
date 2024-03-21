<template>
  <div></div>
</template>

<script setup lang="ts">
// 型別操作符 - typeof : 以typeof後面的值的型別作為前方值的型別宣告
//=== Example 1 ===
let myName = "Reckie";
let a: typeof myName = "Kim";
// a type = string

//=== Example 2 ===
const data = {
  name: "rrr",
  age: 12,
};
type TypeOfData = typeof data;
// TypeOfData type = {
//   name: string;
//   age: number;
// }

//=== Example 3 ===
const sum = (a: number, b: number) => {
  return a + b;
};
const multiple: typeof sum = (a, b) => {
  return a * b;
};

//=== Example 4 ===
const leo = {
  name: "Leo",
  age: 18,
  married: true,
};
const ray: typeof leo = {
  name: "Ray",
  age: 20,
  married: false,
};
</script>

<style scoped></style>
