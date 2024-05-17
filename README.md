# React + TypeScript + Vite

![Screenshot 2024-05-17 163404](https://github.com/asif-gamer/Gamers.project/assets/167057043/8c58fdb9-95d9-4426-90c0-789c4f9f0a78)
![Screenshot 2024-05-17 163423](https://github.com/asif-gamer/Gamers.project/assets/167057043/598f2556-db79-424b-97af-2af9f3b14a68)

![Screenshot 2024-05-17 011748](https://github.com/asif-gamer/Gamers.project/assets/167057043/5c2bfc3d-a541-4a6a-a656-bd4ab89940cc)
![Screenshot 2024-05-17 011716](https://github.com/asif-gamer/Gamers.project/assets/167057043/163b5f0d-3d04-4289-a00d-f3bc025b17f2)
![Screenshot 2024-05-17 004020](https://github.com/asif-gamer/Gamers.project/assets/167057043/96a0cdf5-6bd5-4218-861a-3272349d3e00)


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
