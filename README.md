# 🐾 Veterinary Patients Tracker

A patient management app for a veterinary clinic. Register patients with their details, edit their information, and remove them once discharged — all with form validation, toast notifications, and data that persists across page reloads.

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Zustand-state-000000" alt="Zustand" />
  <img src="https://img.shields.io/badge/React_Hook_Form-validation-EC5990?logo=reacthookform&logoColor=white" alt="React Hook Form" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

**🔗 Live demo:** [veterinary-patients-ten.vercel.app](https://veterinary-patients-ten.vercel.app/)

![Veterinary Patients Tracker screenshot](public/img/Veterinary%20Main.png)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Deployment](#deployment)
- [License](#license)

## Features

- 📝 **Full CRUD** — add, edit, and delete patient records.
- ✅ **Validated forms** — required fields and email validation powered by React Hook Form, with inline error messages.
- 🔔 **Toast notifications** — instant feedback on create, update, and delete actions via React Toastify.
- 💾 **Persistent data** — patients are saved to `localStorage`, so your list survives page reloads.
- 🆔 **Unique IDs** — each patient gets a UUID.
- 🎨 **Responsive UI** built with Tailwind CSS.

Each patient record includes: **name**, **caretaker (owner)**, **email**, **admission date**, and **symptoms**.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite](https://vitejs.dev/) (React SWC plugin) |
| State management | [Zustand](https://zustand-demo.pmnd.rs/) (with `persist` + `devtools` middleware) |
| Forms & validation | [React Hook Form](https://react-hook-form.com/) |
| Notifications | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| IDs | [uuid](https://github.com/uuidjs/uuid) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) (this project ships a `pnpm-lock.yaml`)

### Installation

```bash
# Clone the repository
git clone https://github.com/luchosr/veterinary-patients.git
cd veterinary-patients

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

Vite will print a local URL (by default `http://localhost:5173`) where the app is served.

## Available Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Start the development server with hot reload. |
| `pnpm build` | Type-check (`tsc -b`) and build the production bundle. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm lint` | Run ESLint over the project. |

## Project Structure

```
veterinary-patients/
├── public/
│   └── img/                    # App image / screenshot
└── src/
    ├── components/
    │   ├── PatientForm.tsx      # Add / edit form (React Hook Form)
    │   ├── PatientsList.tsx     # Renders all patients
    │   ├── PatientDetails.tsx   # Single patient card with edit/delete
    │   ├── PatientDetailItem.tsx# A labeled field row
    │   └── Error.tsx            # Inline validation message
    ├── store/
    │   └── store.ts            # Zustand store (CRUD + persist middleware)
    ├── types/
    │   └── index.ts            # Patient & DraftPatient types
    ├── App.tsx                 # Layout: form + list
    └── main.tsx                # App entry point
```

## How It Works

All application state lives in a single **Zustand store** (`store.ts`), wrapped in the `persist` and `devtools` middleware:

- **`addPatient`** creates a record (assigning a UUID) and appends it to the list.
- **`getPatientById`** sets the `activeId`, which puts the form into "edit" mode and pre-fills it.
- **`updatePatient`** replaces the record matching `activeId`, then clears it.
- **`deletePatient`** filters the record out of the list.

Because the store uses `persist` with the key `patient-storage`, the patient list is automatically written to `localStorage` and restored on reload. `PatientForm` handles validation with React Hook Form and surfaces errors through the `Error` component, while React Toastify shows a confirmation toast after each action.

## Deployment

The app is deployed on **Vercel**: [veterinary-patients-ten.vercel.app](https://veterinary-patients-ten.vercel.app/)

To deploy your own copy, build with `pnpm build` and serve the generated `dist/` folder on any static host (Vercel, Netlify, GitHub Pages, etc.).
