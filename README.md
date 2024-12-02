This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# App Screenshots for Reference

This document provides reference screenshots for the main screens of the app. Below are the details of each screen with a description of its functionality.

---

## Login Screen

The **Login Screen** allows users to log in to the app by entering their email and password. It also provides an option to navigate to the **Sign-Up** screen for new users.

![Login Screen](app/assets/screenshots/login_screen.png)

---

## Sign-Up Screen

The **Sign-Up Screen** enables new users to create an account by entering their email, password, and confirming their password. It also allows users to navigate to the **Login** screen if they already have an account.

![Sign-Up Screen](app/assets/screenshots/signup_screen.png)

---

## Home Screen (Show List of Expenses)

The **Home Screen** displays a list of the user’s expenses, providing an overview of the amounts and descriptions of the expenses. Users can add new expenses or view existing ones.

![Home Screen](app/assets/screenshots/home_screen.png)
![Home Screen](app/assets/screenshots/home_screen_2.png)
![Home Screen](app/assets/screenshots/home_screen_3.png)

---

## Preferences Screen

The **Preferences Screen** allows users to set their spending limits for weekly and monthly budgets. It dynamically updates the monthly limit based on changes made to the weekly limit.

![Preferences Screen](app/assets/screenshots/preferences_screen.png)

---

## Add Expense Screen

The **Add Expense Screen** enables users to input new expenses by providing fields for the amount, description, and category of the expense. Once entered, the user can save the expense and return to the **Home Screen**.

![Add Expense Screen](app/assets/screenshots/add_expense_screen.png)

---

## Statistics Screen

The **Statistics Screen** provides a detailed report of the user’s expenses for the last 7 days as well as the entire month. It allows users to see an overview of their spending trends over time.

![Statistics Screen](app/assets/screenshots/statistics_screen.png)


### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
