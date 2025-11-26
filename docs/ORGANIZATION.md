# Project ORGANIZATION

## Folder Structure
```
src/
├── app/
│ ├── routes/
│ ├── providers/
│ └── store/
│
├── features/
│ ├── auth/
│ │ ├── api/
│ │ ├── components/
│ │ ├── hooks/
│ │ ├── pages/
│ │ ├── store/
│ │ └── types/
│ │
│ └── dashboard/
│ ├── pages/
│ ├── components/
│ ├── api/
│ └── hooks/
│
├── shared/
│ ├── ui/
│ ├── hooks/
│ ├── utils/
│ ├── constants/
│ ├── types/
│ └── theme/
│
├── assets/
│ ├── icons/
│ ├── images/
│ └── styles/
│
├── main.tsx
└── index.css
```

## Folder Descriptions

- **app/** – Global application providers, routing, root store.  
- **features/** – Each feature is a self-contained module following MVVM:  
  - `api/` → Models, API services  
  - `hooks/` → ViewModel logic  
  - `pages/` → Views (UI only)  
  - `components/` → Feature-specific UI  
  - `store/` → Zustand state for the feature  
  - `types/` → TypeScript interfaces  
- **shared/** – Reusable UI, utilities, hooks, constants.  
- **assets/** – Static assets (icons, images, CSS).  
- **main.tsx** – App entry point.  
- **index.css** – Global styles.

## Coding Conventions

- **Components** – PascalCase  
- **Hooks** – camelCase with *use* prefix  
- **Files** – kebab-case  
- **Types** – PascalCase  
- **Zustand stores** – camelCase  
- **Strict TypeScript** enabled  
- Views (**pages/components**) contain **no business logic**

## State Management

- **Local State** – `useState`, `useReducer`  
- **Global State** – Zustand  
- **Server State** – React Query  

## Development Environment (VS Code)

Recommended Extensions:

- Prettier  
- ESLint  
- React/TypeScript Snippets  
- Tailwind IntelliSense (if used)  
- GitLens  
- Error Lens  

Optional Tools:

- Postman / Thunder Client  
- VS Code Terminal  
- Chrome DevTools  
