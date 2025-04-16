# React Movie Search

A modern React application that allows users to search for movies, view popular titles, and save their favorites. Built with React and Vite, this project utilizes The Movie Database (TMDB) API to fetch movie data.

## Features

- **Movie Search**: Search for movies using The Movie Database API
- **Popular Movies**: Browse currently popular movies
- **Favorites**: Save your favorite movies with persistent local storage
- **Responsive Design**: Optimized for both desktop and mobile viewing

## Technologies Used

- React 18
- React Router v7
- Vite
- Context API for state management
- Local Storage for data persistence
- The Movie Database (TMDB) API

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```
   cd frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn
   ```
4. Create a `.env` file in the frontend directory with your TMDB API key:
   ```
   VITE_API_KEY=your_tmdb_api_key_here
   ```
5. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```
6. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
  ├── assets/       # Static assets like images
  ├── components/   # Reusable UI components
  ├── contexts/     # React contexts for state management
  ├── css/          # Stylesheets
  ├── pages/        # Application pages/routes
  ├── services/     # API and service functions
  ├── App.jsx       # Main application component
  └── main.jsx      # Application entry point
```

## Environment Variables

The project uses environment variables for sensitive information like API keys:

- `VITE_API_KEY`: Your TMDB API key

Create a `.env` file in the root directory and add these values. The file is ignored by git for security reasons.

## Build for Production

To build the application for production:

```
npm run build
```
or
```
yarn build
```

The build output will be in the `dist` directory.

## License

This project is open source and available under the [MIT License](LICENSE).

---

*This project uses the TMDB API but is not endorsed or certified by TMDB.*
