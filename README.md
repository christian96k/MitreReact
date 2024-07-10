# DeasDemo
An application that organizes and displays the tactics, techniques, and subtechniques of the Mitre ATT&amp;CK framework, including usage relationships with various malicious actors (e.g., APT28). This application allows filtering and visualization of data based on specific threat actor groups, making threat analysis easier.


## Demo References
(https://attack.mitre.org/)
(https://attack.mitre.org/groups/)
(https://mitre-attack.github.io/attack-navigator//#layerURL=https%3A%2F%2Fattack.mitre.org%2Fgroups%2FG0007%2FG0007-enterprise-layer.json)


## JSON data
https://github.com/mitre/cti/blob/master/enterprise-attack/enterprise-attack.json

## Figma Output
https://www.figma.com/proto/526imlMQDt7KkcfgAeKcd5/DEAS---AI-SOC-FW?page-id=0%3A1&node-id=977-49407&viewport=-9649%2C-10203%2C0.3&t=l5l2apWZhioSA6RT-1&scaling=scale-down&starting-point-node-id=722%3A60720


# React + TypeScript + Vite

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
