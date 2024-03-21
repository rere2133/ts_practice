
// 樣板文字類型
// type的樣板文字裏面只能放type，不能放js變數
//=== Example 1 ===
type World = "world";
type Greeting = `hello ${World}`;

//=== Example 2 ===
type SomeWords = "email" | "tel";
type OtherWords = "name" | "age";
type AllWords = `hi_${SomeWords | OtherWords}`;
// type AllWords = "hi_email"|"hi_tel"|"hi_name"|"hi_age"
