# Svelte Chat App

## 8 Synchronise document title
### App Component
`src/App.svelte` add before `<main>:`
```
<svelte:head>
  <title>Chat</title>
</svelte:head>
```

### Chat component
`src/components/Chat/svelte` add before  `<div class="users-container">`:
```
<svelte:head>
  <title>{`Chat (${messages.length})`}</title>
</svelte:head>
```
