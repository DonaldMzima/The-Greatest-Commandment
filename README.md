# CRG Assessment Project

## Introduction

This project is a single-page React application that displays content retrieved from a JSON API. It uses various modern web development technologies and follows best practices in design and functionality.

## UI

![Preview Image](/public/LandingPage.png)
![Preview Image](/public/Audio.png)
![Preview Image](/public/Contact.png)

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **React Query**: Data fetching library for React, which simplifies data fetching, caching, and synchronization.

## Project Structure

```bash
├── components
└── Buttons
│ └── ScrollToTopButton.tsx
└── UI
│ └── About.tsx
│ └── ContactDetails.tsx
│ └── Footer.tsx
│ └── Hero.tsx
│ └── Navbar.tsx
└── LoadingSinner.tsx
└── TimeLineItem.tsx
├── pages
│ └── _app.tsx
│ └── _document_.tsx
│ └── index.tsx
└── api
├── public
│ └── UI.png
├── styles
│ └── globals.css
├── utils
│ └── https.tsx
│ └── types.tsx
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.mjs.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
```

## Data Fetching

- **The application fetches JSON content from the following API endpoint**: https://arthurfrost.qflo.co.za/php/getTimeline.php

## Assets

- **Images and Icons: The images and icons used in the project are located at**: https://arthurfrost.qflo.co.za/Images/

- **Audio Files: The audio files used in the project are located at**: https://arthurfrost.qflo.co.za/MP3/

## Customization

Feel free to customize the look and feel of the application using Tailwind CSS. You can modify the tailwind.config.js file and the styles in the /styles directory to suit your preferences.

## Conclusion

This project showcases the ability to build a modern, single-page React application with a focus on clean code, performance, and user experience. If you have any questions or need further assistance, please feel free to reach out.

**Author**: Donald Mzima
**Date**: Jun 2024
