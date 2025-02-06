//導入了 `globals`全域變數的函式庫模組，該模組提供了一組預先定義的全域變數（如 window、document 等），這些變數通常在不同的環境（如瀏覽器、Node.js）中可用。在 ESLint 配置中，你可以使用這個模組來指定程式碼所執行的環境，從而定義全域變數。
import globals from "globals";

//針對 JavaScript 的 ESLint 配置和規則。保持 JavaScript 程式碼的一致性和品質
import pluginJs from "@eslint/js";

//匯入 `typescript-eslint` 插件（ `typescript-eslint/parser` 和 `typescript-eslint/eslint-plugin`）。提供了對 TypeScript 的支持，包括 TS 的解析器和建議的規則集，用於在 TypeScript 檔案中進行 lint 檢查。
import tseslint from "typescript-eslint";

//導入 `eslint-plugin-vue` 插件，提供了 Vue.js 特有 ESLint 規則。確保 Vue 檔案（`.vue` 檔案）中的程式碼符合 Vue.js 的最佳實務和程式碼風格指南
import pluginVue from "eslint-plugin-vue";
import prettier from "eslint-plugin-prettier";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import vueEslintParser from "vue-eslint-parser";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  //**檔案比對**：`files` 屬性指定了哪些檔案類型（JavaScript、TypeScript、Vue 檔案等）將會套用這些規則
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,mjs,cjs,ts,vue,mts,tsx,jsx}"],
  },
  // plugins: ['vue', '@typescript-eslint', 'prettier'],
  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**", "node_modules"],
  },

  //**全域變數**：`languageOptions` 配置了瀏覽器環境下的全域變數。
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },

  //插件和規則
  //`pluginJs.configs.recommended` 引入了 `@eslint/js` 插件的推薦規則。
  pluginJs.configs.recommended,
  //引入 `typescript-eslint` 插件的推薦規則
  ...tseslint.configs.recommended,
  //引入`eslint-plugin-vue` 外掛程式的基礎規則
  ...pluginVue.configs["flat/essential"],
  skipFormatting,
  {
    name: "app/plugins",
    plugins: {
      vue: pluginVue,
      "@typescript-eslint": typescriptEslint,
      prettier,
    },
  },
  {
    name: "app/parser-config-vue",
    languageOptions: {
      parser: vueEslintParser,
    },
  },
  {
    //針對vue文件配置
    files: ["**/*.vue"],
    //為.vue文件指定了TypeScript解析器
    languageOptions: {
      parser: tseslint,
      parserOptions: {
        ecmaVersion: "latest"
      },
    },
  },
  /*
   * "off" 或 0    ==>  關閉規則
   * "warn" 或 1   ==>  打開規則作為警告（不影響代碼執行）
   * "error" 或 2  ==>  規則作為一個錯誤（代碼不能執行，界面報錯）
   */
  {
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'

      // eslint（https://eslint.bootcss.com/docs/rules/）
      "no-var": "error", // 要求使用 let 或 const 而不是 var
      "no-multiple-empty-lines": ["warn", { max: 1 }], // 不允許多个空行
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      //'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
      //'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      "no-unexpected-multiline": "error", // 禁止空餘的多行
      "no-useless-escape": "off", // 禁止不必要的轉義字符

      // typeScript (https://typescript-eslint.io/rules)
      "@typescript-eslint/no-unused-vars": "error", // 禁止定義未使用的變數
      "@typescript-eslint/prefer-ts-expect-error": "error", // 禁止使用 @ts-ignore
      "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-namespace": "off", // 禁止使用自定義 TypeScript 模組和命名空間。
      "@typescript-eslint/semi": "off",

      // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
      "vue/multi-word-component-names": "off", // 要求組件名稱始終為 “-” 連接的單字
      "vue/script-setup-uses-vars": "error", // 防止<script setup>使用的變數<template>被標記為未使用
      "vue/no-mutating-props": "off", // 不允許組件 prop的改變
      "vue/attribute-hyphenation": "off", // 對模板中的自定義組件強制執行属性命名樣式

      // prettier
      "prettier/prettier": "warn", // 默認為error
    },
  },
];
