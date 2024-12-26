# Midterm Food App

## Screenshots

<table>
    <tr>
        <td><img src="/screenshots/1.light.png" alt="Screenshot 1"></td>
        <td><img src="/screenshots/2.dark.png" alt="Screenshot 2"></td>
    </tr>
    <tr>
        <td><img src="/screenshots/3.light.png" alt="Screenshot 3"></td>
        <td><img src="/screenshots/4.dark.png" alt="Screenshot 4"></td>
    </tr>
</table>

## Overview

The Midterm Food App is a restaurant application developed by Jamiul Islam. This app has been thoroughly refactored and redesigned for scalability, maintainability, and production-grade quality. It features a clean and professional folder architecture, modularized components, and context-driven theming.

## Key Features

1. **Clean Architecture**: Implemented a clean and professional folder structure for future scaling.
2. **Modular Components**: Replaced poorly structured code with modularized components and contexts.
3. **Theming**: Integrated a `ThemeProvider` to support light and dark themes using `react-native-reanimated`.
4. **Navigation**: Enhanced navigation by utilizing React Navigation's stack navigator.
5. **Dynamic Header Styles**: Added context-driven dynamic header styles based on theme selection.
6. **Reusable Components**: Encapsulated reusable components like `ThemeToggle` for better code reuse.
7. **Consistent UI**: Added styles for consistent UI across components.

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: For development and build tools.
- **React Navigation**: For navigation within the app.
- **React Native Reanimated**: For animations and theming.
- **Context API**: For state management and theming.

## Installation

1. Clone the repository

   ```sh
   git clone https://github.com/yourusername/midterm-food-app.git
   ```

2. Navigate to the project directory

   ```sh
   cd midterm-food-app
   ```

3. Install dependencies

   ```sh
   npm install
   ```

4. Start the application

   ```sh
   npm start
   ```

## Folder Structure

```sh
assets/
src/
  assets/
    images/
  components/
    MenuItem.js
    RestaurantCard.js
    ThemeToggle.js
  context/
    ThemeContext.js
  data/
    menuData.js
    restaurantData.js
  screens/
    HomeScreen.js
    MenuScreen.js
  theme/
    theme.js
App.js
app.json
babel.config.js
index.js
package.json
readme.md
screenshots/
```

## License

This project is licensed under the MIT License.

Feel free to adjust the repository URL and any other details as necessary.
