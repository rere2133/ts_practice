// declare 宣告語句
//當使用declare關鍵字時，你告訴TypeScript編譯器，你正在聲明某個實體的類型，但是該實體的實現不在當前的TypeScript代碼中。這可以是一個JavaScript庫、瀏覽器的全局對象或其他外部依賴。
// 使用declare關鍵字可以讓TypeScript編譯器了解你正在使用外部代碼，並提供相應的類型檢查和自動完成功能。這樣可以提高代碼的可讀性和可維護性，同時確保與外部代碼的正確集成。
// 有些函式庫會寫好宣告檔案， 可用npm下載， 也可自己寫宣告檔案

// 檔名為：xxx.d.ts，文件建議放在types目錄下

// 宣告全域變數
declare const myGlobalVariable: string;
// 宣告全域函數
declare function myGlobalFunction(): void;
// 宣告全域類別
declare class myGlobalClass {
    constructor(name: string);
}
// 宣告全域模組
declare module 'myGlobalModule' {
    export function myGlobalFunction(): void;
}