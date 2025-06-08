# Skip Selection Page

A React Web page for selecting skip sizes, built with [Vite](https://vitejs.dev/) for lightning-fast development and optimized builds.

## Live Demo

You can view and test the live version of this application here:

**https://tl9scx-5173.csb.app/**  

## My Approach and Key Decisions

In developing this application, I focused on creating a robust, user-friendly, and maintainable solution. Here are the key aspects of my approach:

### Core Technologies

- **React:** Used as the project requirement, providing a component-based architecture for a modular and scalable UI.
- **Vite:** Utilized for a superior development experience with rapid cold starts, instant Hot Module Replacement (HMR), and optimized production builds.
- **Plain CSS:** Employed for styling, leveraging CSS variables for consistent theming and easy adjustments.

### Data Management

- **Real-time Data Fetching:** Implemented `useEffect` hooks to fetch skip data asynchronously from the provided API endpoint (`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`) upon component mount.
- **State Management:** Used React's `useState` for managing application states such as `skipData`, `selectedSkipId`, loading status, and error handling.
- **Data Transformation:** The raw API response data is transformed to match the application's internal data model, including:
  - Calculating the final price by incorporating `price_before_vat` and `vat`.
  - Mapping API field names (e.g., `hire_period_days`, `allowed_on_road`) to more intuitive prop names (`hirePeriod`, `isAllowedOnRoad`).
  - Assigning dynamic `imageUrls` using a local mapping based on skip size, with a placeholder fallback.

### Component Architecture

- The UI is broken down into highly reusable and focused components (`ProgressBar`, `PageHeader`, `SkipGrid`, `SkipCard`, `PageFooter`) to enhance modularity, readability, and maintainability.
- Props are used effectively to pass data and callbacks between parent and child components, ensuring a clear data flow.

### User Experience (UX) Enhancements

- **Interactive Selection:** Users can select and deselect skip cards, with clear visual feedback (border, shadow, badge color changes).
- **Smooth UI Transitions:** The sticky footer smoothly fades in/out and slides up/down when a skip is selected or deselected. Badge color changes on `SkipCard` selection are animated using CSS transitions for a more fluid feel.
- **Detailed Sticky Footer:** A responsive and sticky footer displays live details of the `selectedSkip` (size, price, hire period), ensuring key information is always visible.
- **Multi-step Progress Bar:** A clear and intuitive multi-step progress bar visually guides the user through the process, indicating completed, active, and upcoming steps.
- **Disclaimer Text:** A concise, sticky disclaimer is integrated just above the main footer, conforming to legal/informational requirements, styled with a small font and contrasting background.

### Code Quality

- **ESLint** is integrated to enforce code style and best practices, contributing to a clean and maintainable codebase.

## Project Structure

```
├── public/
│   └── images/skips/         # Skip images
├── src/
│   ├── components/           # React components
│   ├── assets/               # Static assets
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── index.html
├── package.json
└── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/skip-app.git
cd skip-app
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

### Linting

Check code quality using ESLint:

```sh
npm run lint
```

### Building for Production

Create an optimized production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [CSS Modules](https://github.com/css-modules/css-modules) (for styling)

## License

This project is licensed under the MIT License.

---

Made with ❤️ for skip hire selection.