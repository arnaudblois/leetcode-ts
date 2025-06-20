# leetcode-ts

My collection of Leetcode problems solved in TypeScript.

## Initial set-up

```bash
npm init -y
npm install -D typescript vitest
npx tsc --init
```

Then tweak `tsconfig.json` to include:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "strict": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "types": ["vitest"]
  }
}
```

then add a test script to `package.json`:

```json
"scripts": {
  "test": "vitest"
}
```

## Testing

Using Vitest which is fast and have a dev-friendly syntax.

```bash
npm run test
```
