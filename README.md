# Tasks Management System

A dynamic, modern task management application built with Next.js, featuring a robust sprint board, task lifecycle management, and a seamless developer experience with API mocking.

### 1. Installation

Clone the repository and install dependencies using npm:

```bash
npm install
```

### 2. Connect to API

By default, the application uses **Mock Service Worker (MSW)** to handle API requests locally.
If you want to connect to a real backend, you can set the `NEXT_PUBLIC_BASE_URL` or `BASE_URL` environment variables in a `.env` file:

```env
NEXT_PUBLIC_BASE_URL=https://your-api-url.com
```

### 3. Run Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Library**: React 19
- **State Management**: Zustand
- **UI Architecture**: Shadcn UI + Tailwind CSS
- **Form Handling**: React Hook Form + Zod
- **API Mocking**: MSW (Mock Service Worker)
- **Data Fetching**: Next.js built-in data fetching

---

## ✨ Features

- **Sprint Board**: Visualize tasks across different states (To Do, In Progress, Done, etc.).
- **Task Management**: Create, edit, and archive tasks with ease.
- **Assignees**: Dynamically manage and view task assignees.
- **Form Validation**: Strict client-side and server-side validation.
- **Mocked Backend**: Fully functional API simulation for localized development.
- **Responsive UI**: Optimized for both mobile and desktop views using modern CSS patterns.

---

## 🏗️ Architecture Decisions

- **Layered Service-Action Pattern**: Logic is separated into Services (API calls), Server Actions (Data mutations), and Hooks (UI logic), ensuring maximum reusability and clean code.
- **App Router & Server Actions**: Leveraged Next.js's native features to handle data flow, reducing the need for heavy client-side state when possible.
- **Zustand for Global Store**: Used for lightweight, reactive state management (e.g., managing assignee data).
- **MSW for Decoupled Development**: Integrated MSW to allow frontend development to proceed even without a live backend, ensuring the app is always "runnable" out of the box.
- **Zod for Schema-First Development**: Enforces consistent data structures across the application.

---

## 📂 Project Structure

```bash
src/
├── app/                 # Next.js App Router (Pages, Layouts, Server Actions)
│   └── projects/        # Sprint board and specific project views
├── components/          # Shared UI and Shadcn components
├── hooks/               # Custom React hooks (Logic extraction)
├── services/            # API service layer (Fetch requests)
├── mocks/               # MSW handlers and configuration
├── store/               # Zustand global state stores
├── lib/                 # Utility functions and configuration
└── types/               # TypeScript interfaces and types
```

---
