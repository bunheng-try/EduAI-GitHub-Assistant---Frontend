# Architecture Overview
Date: November 17, 2025

## 1. Frontend Framework

The frontend is built using React, Vite, and TypeScript, which provides:
- Fast development with Vite’s HMR
- Strong TypeScript support
- Flexible and scalable folder architecture
- Clear separation of Model, ViewModel, and View
- Lightweight and high performance
- Architecture Style
- Feature-Based MVVM Architecture
- Each feature functions as a self-contained module
- Views contain no business logic
- ViewModels (hooks) manage logic & state
- Models store types, schemas, and API calls

## 2. Tech Stack
- **Framework**: React
- **Build Tool**: Vite
- **Language**: TypeScript
- **Routing**: React Router v6
- **Global State**: Zustand
- **Server State**: React Query
- **Package Manager**: pnpm

## 3. Core Frontend Modules
All feature modules live under:
`src/features/`
### 3.1 Authentication Module ( `auth/` )
- Login page + components
- ViewModel logic ( `useLoginViewModel` )
- Zustand auth state
- API services for login
- Type definitions

### 3.2 Dashboard Module ( `dashboard/` )
- Dashboard pages
- Dashboard components
- API services
- ViewModel hooks for data fetching & UI logic

### 3.3 Shared UI Module ( `shared/ui/` )
- Reusable UI components:
- Button
- Input
- Card
- Modal
- Spinner
- Layout container

### 3.4 Shared Utilities ( `shared/utils` , `shared/hooks` )
- Utility hooks
- Reusable helpers
- Global types
- App-wide constants

### 3.5 Application Routing ( `app/routes/` )
- Modular routing per feature
- Public & protected routes
- Organized route structure

### 3.6 Global Providers ( `app/providers/` )
- React Query provider
- Zustand provider
- Theme provider

## 4. MVVM Layer Interactions

### Model Layer ( `api/` ,  `types/` )
- Contains:
    - API services
    - Schema definitions
    - TypeScript interfaces
    - Domain models

### ViewModel Layer ( `hooks/` )
- Responsible for:
    - Business logic
    - UI logic
    - Calling APIs
    - Managing server state via React Query
    - Handling form interactions
    - Data transformation

### View Layer ( `pages/` ,  `components/` )
- Responsibilities:
    - UI rendering only
    - No logic
    - No data fetching
    - No transformations

## 5. Frontend Data Flow Example

```
User enters login →
LoginPage (View)
    ↓
useLoginViewModel (ViewModel)
    ↓
authApi.login() (Model)
    ↓
React Query processes the request
    ↓
Zustand updates the user session
    ↓
UI rerenders with authenticated state
```

## 6. State Management

- **Local State**  `useState`, `useReducer`
- **Global State** (Zustand)
    - Authentication session
    - Theme
    - App-wide flags

- **Server State** (React Query)
    - Data fetching
    - Cache
    - Background refreshing
    - Retry logic
    - Error handling

## 7. Error Handling
### UI Errors
- Managed inside ViewModel hooks
- Shown through the View layer
### Network Errors (React Query)
- onError callbacks
- Automatic retries
- Error boundaries
### Validation Errors
- Controlled in ViewModel
- Typed schemas prevent invalid input

## 8. Summary of Frontend Architecture
- Layer	Description
- View	Pages & components, UI-only
- ViewModel	Business + UI logic (hooks)
- Model	API, types, schemas
- Shared UI	Reusable UI toolkit
- Routing	Modular routing per feature
- State	Local, global, and server state layers