# Fit Grocer React App

Welcome to Fit Grocer, a responsive React application for a food ordering platform.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction
Fit Grocer is a food ordering app designed to provide a seamless experience for users to explore and order a variety of food items. This project is built using React and follows responsive design principles for optimal viewing across different devices.

## Features
- Responsive design for mobile, tablet, and desktop views.
- Implementation of a creative desktop version based on the provided Figma design.
- Categories and items designed for an engaging user experience.
- Favorites, Orders, Insights, and Profile tabs for quick navigation.
- Quick access cart buttton at the bottom right of the screen.
- Redux Toolkit with redux-persist for state management and caching.

## Getting Started
### Prerequisites
Make sure you have the following tools installed:
- Node.js: [Download Node.js](https://nodejs.org/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ArifSanaullah/monk-labs-assessment

2. Change the directory
    ```bash
    cd monk-labs-assessment

3. Install node_modules
    ```bash
    npm install

## Usage


4. Start the NextJS server
    ```bash
    npm run dev

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
The project structure is organized to maintain a clean and scalable codebase. Here are the key directories:
- `monk-labs-assessment/`: Contains the source code.
  - `components`: Reusable React components.
  - `pages`: Top-level components representing different pages.
  - `app`: All the pages of the application along with the layout, basic styles, icons & site manifest etc.
  - `assets`: Contains assets like images/logos etc.
  - `lib`: Contains RTK provider, hooks and utility functions
  - `public`: All the public assets that should be used in deployment
  - `types`: Contains TypeScript types for the project

## Deployment
The app is deployed on Vercel. Access it at [Vercel Deployment Link](https://arif-sanaullah-monke-labs.vercel.app/).

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the [MIT License](LICENSE).
