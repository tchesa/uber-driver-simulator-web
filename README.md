# Uber Driver Simulator Web

A React-based web application that simulates the Uber driver experience with an interactive map interface and trip request popover.

## Overview

This project recreates the core driver-side interface of the Uber app, featuring:

- A full-screen map background
- A toggle button to simulate trip requests
- An animated trip popover that displays trip details including pricing, passenger rating, pickup/dropoff locations, and distances

## Features

- **Interactive Map Interface**: Full-screen map view mimicking the Uber driver app
- **Trip Request Simulation**: Toggle button to show/hide trip requests
- **Dynamic Trip Details**:
  - Randomly generated trip pricing ($5-$40)
  - Passenger star ratings (3.0-5.0)
  - Pickup and dropoff addresses
  - Distance calculations in both minutes and miles
  - Trip category (currently set to "Comfort")
- **Smooth Animations**: CSS animations for popover appearance
- **Responsive Design**: Mobile-friendly layout

## Tech Stack

- **Frontend**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.7
- **Styling**: CSS Modules for component-scoped styles
- **Icons**: React Icons (Boxicons)
- **Random Data**: Chance.js for generating realistic trip data
- **Utilities**: Classnames for conditional CSS classes

## Project Structure

```
src/
├── App.tsx                 # Main application component
├── App.css                 # Global styles and animations
├── main.tsx               # Application entry point
├── index.css              # Base styles and CSS reset
├── assets/
│   └── uber-map.png       # Map background image
└── components/
    ├── button/
    │   ├── index.tsx      # Reusable button component
    │   └── button.module.css
    └── trip-popover/
        ├── index.tsx      # Trip request popover component
        └── trip-popover.module.css
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd uber-driver-simulator-web
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

## Usage

1. **View the Map**: The application loads with a full-screen map background
2. **Toggle Trip Requests**: Click the "Toggle trip found" button in the top-left corner
3. **View Trip Details**: When a trip request appears, you'll see:
   - Trip category and pricing
   - Passenger rating
   - Pickup location and distance
   - Dropoff location and trip duration
   - Accept button
4. **Dismiss Trip**: Click the X button in the top-right corner of the popover to dismiss

## Customization

### Adding New Trip Categories

Modify the `category` prop in `src/components/trip-popover/index.tsx`:

```tsx
<span className={styles.category}>Your Category</span>
```

### Adjusting Price Range

Update the price generation in the TripPopover component:

```tsx
const priceRef = useRef<number>(chance.floating({ min: 5, max: 40 }));
```

### Styling Modifications

- Global styles: `src/App.css` and `src/index.css`
- Component-specific styles: `src/components/*/module.css`

## Development

### Code Quality

The project uses ESLint for code quality checks. Run `npm run lint` to identify and fix issues.

### TypeScript

The project is fully typed with TypeScript. All components include proper type definitions.

### CSS Modules

Component styles are scoped using CSS Modules to prevent style conflicts.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test them
4. Run the linter: `npm run lint`
5. Commit your changes: `git commit -m "Add feature"`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## License

This project is for educational and demonstration purposes. Please ensure you have the necessary permissions if using Uber's branding or assets in a commercial context.

## Future Enhancements

- Real-time trip updates
- Multiple trip categories (UberX, UberXL, etc.)
- Driver earnings tracking
- Trip history
- Navigation integration
- Push notifications simulation
