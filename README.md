# BUNDLE-BUILDER

A React + TypeScript implementation of the **Frontend Take-Home Bundle Builder** challenge.

The objective of this project was to recreate the provided Figma design as a production-quality frontend application with a strong focus on **pixel-perfect UI implementation**, **responsive design**, **clean architecture**, and **maintainable code**.

---

## Challenge Checklist

- ✅ Pixel-perfect implementation based on the provided Figma
- ✅ Responsive layout for desktop, tablet, and mobile
- ✅ Multi-step accordion workflow
- ✅ Variant selection
- ✅ Independent quantity tracking for each variant
- ✅ Quantity synchronization between Product Cards and Review Panel
- ✅ Live pricing calculations
- ✅ Dynamic review panel updates
- ✅ Data-driven UI using JSON
- ✅ Local persistence using localStorage
- ✅ Component-based architecture
- ✅ TypeScript implementation

---

## Design Reference

**Figma**

https://www.figma.com/design/JYf61etQVqeseX7oY5alGz/Frontend-Test-Figma

---

# Features

## Multi-Step Bundle Builder

The left side of the application guides users through building their security system using a four-step accordion.

Features include:

- Expand / Collapse accordion behavior
- Active step indicator
- Selected products counter
- Step navigation
- Dynamic state updates

---

## Product Cards

Each product card supports:

- Product image
- Optional discount badge
- Product description
- Learn More link
- Variant selection
- Quantity stepper
- Compare-at pricing
- Active selection state

Every product is rendered dynamically from JSON data without hardcoded markup.

---

## Variant Selection

Products with variants support independent quantities for each option.

For example:

- White ×2
- Black ×1

Each variant is tracked separately while sharing the same product card.

The quantity stepper always controls the currently selected variant.

---

## Live Review Panel

The Review Panel updates automatically as the configuration changes.

It displays:

- Cameras
- Sensors
- Accessories
- Selected plan
- Shipping information
- Satisfaction guarantee
- Financing information
- Original pricing
- Discounted pricing
- Savings calculation
- Checkout section

---

## Quantity Synchronization

Changing quantities from either:

- Product Cards
- Review Panel

immediately updates:

- Builder
- Review Panel
- Totals
- Savings
- Selected counters

---

## Dynamic Pricing

Pricing is calculated in real time.

Including:

- Product totals
- Compare-at pricing
- Shipping
- Savings
- Final bundle price

---

## Responsive Design

The desktop implementation closely follows the supplied Figma design while maintaining usability across smaller screen sizes.

Optimized for:

- Desktop
- Tablet
- Mobile

---

# Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Context API

---

# Project Structure

```text
src
│
├── assets/
├── components/
│   ├── accordion/
│   ├── builder/
│   ├── product-card/
│   ├── quantity-stepper/
│   ├── review-panel/
│   └── variant-selector/
│
├── context/
├── data/
├── hooks/
├── pages/
├── types/
├── utils/
│
└── App.tsx
```

---

# Architecture

The project follows a component-based architecture designed for scalability and maintainability.

Key architectural decisions include:

- Data-driven rendering
- Reusable UI components
- Separation of UI and business logic
- Centralized state management using React Context
- Type-safe development with TypeScript

---

# Data Source

All products are rendered from a local JSON data source.

Each product defines:

- Images
- Variants
- Pricing
- Compare-at pricing
- Discount badges
- Product descriptions

This approach makes adding or modifying products straightforward without changing UI components.

---

# Persistence

The **"Save my system for later"** feature stores the current bundle configuration using **localStorage**.

Returning to the application restores the saved configuration automatically.

---

# Getting Started

Clone the repository

```bash
git clone https://github.com/HatemMaher/bundle-builder.git
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview the production build

```bash
npm run preview
```

---

# Available Scripts

```bash
npm run dev
npm run build
npm run preview
```

---

# Development Decisions

During development I focused on balancing **pixel-perfect UI implementation** with **clean and maintainable architecture**.

Key decisions include:

- Building reusable UI components instead of duplicating markup.
- Separating business logic from presentation.
- Managing application state using React Context.
- Rendering all UI from structured JSON data.
- Keeping quantities synchronized across the Builder and Review Panel.
- Preserving the desktop fidelity of the Figma while ensuring responsive behavior.

---

# Trade-offs

The primary goal was to accurately reproduce the supplied Figma design while maintaining clean, readable, and reusable code.

Where appropriate, responsive adaptations were introduced for smaller screens without compromising the desktop experience.

---

# Future Improvements

Potential future enhancements include:

- Unit testing with Vitest
- End-to-end testing with Playwright
- Backend API integration
- Improved accessibility (ARIA support)
- Additional animations and micro-interactions
- Shopping cart persistence using a backend service

---

# License

This project was developed as part of a frontend take-home assessment and is intended for demonstration purposes.