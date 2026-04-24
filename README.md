# KEYVO Car Rental Platform
logo.png

**Live Demo:** [Add Vercel link here](https://your-vercel-link.vercel.app)

KEYVO is a modern car rental platform built with React, TypeScript, Redux Toolkit, and Tailwind CSS. The project focuses on a polished browsing experience, a full booking flow, and a simple account area for authentication and booking management.

## Overview

This project includes:

- A landing page with featured cars, brand highlights, and call-to-action sections
- A car catalog with filters and search
- A detailed vehicle page with specs, features, gallery, and location map
- A booking flow with date selection, pricing summary, payment, and confirmation
- Authentication pages for login and signup
- A profile page for viewing and managing bookings

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router
- Formik + Yup
- Leaflet / React Leaflet
- Lucide React

## Main Pages

- `/` - Home
- `/cars` - Cars listing
- `/car/:id` - Car details
- `/booking/:id` - Booking
- `/payment/:id` - Payment
- `/confirmation` - Booking confirmation
- `/login` - Login
- `/signup` - Signup
- `/profile` - User profile
- `/about` - About

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates the production build
- `npm run preview` previews the production build locally
- `npm run lint` runs TypeScript type-checking

## Project Structure

```text
src/
  components/
    booking/
    car/
    cardetails/
    cars/
    common/
    home/
    layout/
    ui/
  data/
  pages/
  store/
    features/
  utils/
```

## Highlights

- Reusable UI components for buttons, inputs, badges, and modals
- Global state management for vehicles, bookings, and authentication
- Filterable inventory experience with search support
- Booking flow with date validation and total price calculation
- Route-based navigation with scroll-to-top behavior
- Responsive layout across desktop and mobile screens

## Deployment

This project is ready to be deployed on Vercel.

Suggested production steps:

1. Push the repository to GitHub
2. Import the repository into Vercel
3. Set the framework preset to `Vite` if needed
4. Deploy and replace the live demo placeholder above with the final URL

## Future Improvements

- Connect authentication to a real backend
- Persist bookings in a database
- Add availability checks for reserved dates
- Add unit and integration tests
- Improve code splitting for smaller production bundles

## Screenshots

Add screenshots for each page below once they are ready.

### Home

screenshots/home.png

### Cars

screenshots/cars.png

### Car Details

screenshots/car-details.png

### Checkout

screenshots/checkout.png`

### Payment

screenshots/payment.png


### Login

screenshots/login.png

### Signup

screenshots/signup.png

### Dashboard

screenshots/dashboard.png

### About

screenshots/about-page.png
