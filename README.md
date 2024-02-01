Certainly! Below is a formatted version that you can use directly in your README.md file:

---

# Currency Conversion App

## Overview

The Currency Conversion App is a web application built with the Vite framework and React. This application allows users to convert currency amounts from one currency to another in real-time using the latest exchange rates.

## Features

### 1. Input Section

- **From Currency Input:**
  - Users can input the amount they want to convert.
  - They can select the currency from which they want to convert.

- **Swap Button:**
  - Allows users to quickly swap the "from" and "to" currencies.

- **To Currency Input:**
  - Displays the converted amount.
  - Users can select the currency to which they want to convert.

### 2. Real-time Conversion

- The application fetches the latest currency exchange rates from a public API (specifically, from the [currency-api](https://github.com/fawazahmed0/currency-api)).

- Conversion is performed in real-time as users input values or change the selected currencies.

### 3. Stylish UI

- The application has a clean and visually appealing user interface.
- Background image enhances the aesthetics of the application.

## Components

### 1. `App` Component

- Manages the state of the input values, selected currencies, and the converted amount.
- Utilizes the `useCurrencyInfo` custom hook to fetch and manage currency exchange rate information.

### 2. `InputBox` Component

- A reusable component for input fields.
- Includes an input field for the amount and a dropdown for currency selection.
- Supports disabling the amount and currency selection fields.

### 3. `useCurrencyInfo` Hook

- A custom hook responsible for fetching and managing currency exchange rate information.
- Utilizes the `fetch` API to retrieve data from the [currency-api](https://github.com/fawazahmed0/currency-api).

## Usage

1. Users input the amount they want to convert and select the currency.
2. The application fetches the latest exchange rates for the selected currency.
3. Users select the target currency.
4. The converted amount is displayed in real-time.
5. Users can swap the currencies with a single click.

## Dependencies

- React: Used for building the user interface and managing state.
- Vite: The build tool for the project.
- [currency-api](https://github.com/fawazahmed0/currency-api): Provides the latest currency exchange rates.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

## Future Enhancements

- Implement error handling for API requests.
- Add support for more advanced features, such as historical exchange rates.

## Conclusion

The Currency Conversion App is a user-friendly and efficient tool for quickly converting currency amounts. It provides a seamless experience with real-time updates and an attractive UI.

##Img
![Screenshot (149)](https://github.com/Divyesh032040/ReactCurrencyConvertor/assets/127118175/c10c3a61-a3b9-4c75-b2ee-7213dff0555b)

