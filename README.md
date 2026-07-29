# TravelTrucks — Camper Rental

TravelTrucks is a web application for renting campers. It lets users browse a catalog of campers, filter them by location, body type, engine, and transmission, view detailed information about each camper, and submit a booking request.

🔗 **Live demo:** https://travel-trucks-coral-three.vercel.app

## Features

- 🏠 Home page with a banner and a call-to-action leading to the catalog
- 🚐 Camper catalog with filtering by location, body type, engine, and transmission
- 📄 "Load More" pagination (loads 4 more cards at a time, respecting active filters)
- 🔍 Camper details page: image gallery (Swiper), full specifications, and user reviews
- ⭐ Reviews displayed with a five-star rating scale
- 📅 Booking form with validation (Formik + Yup) and a success notification

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- [TanStack Query](https://tanstack.com/query) (`useInfiniteQuery`)
- [Swiper](https://swiperjs.com) — image gallery
- [Formik](https://formik.org) + [Yup](https://github.com/jquense/yup) — booking form
- [React Icons](https://react-icons.github.io/react-icons)
- [React Toastify](https://fkhadra.github.io/react-toastify) — notifications
- CSS Modules
- [Axios](https://axios-http.com)

## Getting started

1. Clone the repository:
```bash
   git clone https://github.com/rosticmel-07/TravelTrucks.git
   cd TravelTrucks
```

2. Install dependencies:
```bash
   npm install
```

3. Run the development server:
```bash
   npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API

This project uses the public API: [https://campers-api.goit.study](https://campers-api.goit.study)

## Author

Rostik Melnychuk
[GitHub](https://github.com/rosticmel-07)
