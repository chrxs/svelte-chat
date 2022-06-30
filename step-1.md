# Svelte Chat App

## 1 - INIT
```
npm init vite my-app -- --template svelte
cd my-app
npm install
npm run dev
```

also will we use following packages:
```
npm install --save date-fns uniqid
npm install --save-dev eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-svelte3 prettier prettier-plugin-svelte
```

Delete `src/assets` and `src/lib` directories.

`.eslintrc.json` file:
```
{
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended"
  ],
  "overrides": [
    {
      "files": ["**/*.svelte"],
      "processor": "svelte3/svelte3"
    }
  ],
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "plugins": [
    "import",
    "svelte3"
  ],
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ]
  }
}

```

Replace `App.svelte` with:
```
<script>
</script>

<main>
</main>

<style>
</style>

```
