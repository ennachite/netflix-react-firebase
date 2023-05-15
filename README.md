# Netflix Clone

This is a Netflix clone built using React, Tailwind, Vite, and Firebase. The app fetches movie and TV show data from [The Movie Database (TMDb)](https://www.themoviedb.org/) API and displays them in a Netflix-like UI. Users can sign up and log in using their email and password with Firebase Authentication and save their favorite movies and TV shows to their watchlist in Firebase Firestore.

## Getting Started

To get started, follow the instructions below:

1. Clone the repository:

```bash
git clone https://github.com/ennachite/netflix-react-firebase.git
```


2. Navigate to the project directory:

```bash
cd netflix-react-firebase
```

3. Install the dependencies:

```bash
npm install
```

4. Get your API key:

To fetch movie and TV show data, you'll need to get an API key from TMDb. Follow the instructions on [TMDb API documentation](https://developers.themoviedb.org/3/getting-started/introduction) to create a new account and get your API key.

5. Add TMDb API key to the app:

Go to `src/Requests.js` and put your API key


6. Get your Firebase credentials:

To connect the app with Firebase, you'll need to create a Firebase project and get the necessary credentials. Follow the instructions on [Firebase documentation](https://firebase.google.com/docs/web/setup) to create a new Firebase project and get your credentials.

7. Add Firebase credentials to the app:

Reformat the name of file src/config/firebase.example.js to src/config/firebase.js, and change those variables to yours.
```js
const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_STORAGE_BUCKET",
messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
appId: "YOUR_APP_ID"
};
```

8. Start the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`.

## Firebase Authentication

The app uses Firebase Authentication to sign up and log in users. Users can sign up and log in with their email and password. The authentication flow is implemented using the Firebase SDK. To add new authentication providers or customize the authentication flow, refer to the [Firebase Authentication documentation](https://firebase.google.com/docs/auth).

## Firestore

The app uses Firestore to store and retrieve user data, including their watchlist. Firestore is a NoSQL document-based database that allows you to store and sync data in real-time. To learn more about Firestore, refer to the [Firestore documentation](https://firebase.google.com/docs/firestore).

The app uses Firestore real-time listeners to sync the user's watchlist in real-time. Whenever a new movie or TV show is added to the watchlist, the app updates the UI with the new item.

## Production Build

To create a production build of the app, run the following command:

bash
npm run build


This will create a production-ready build of the app in the `dist` directory.

## Conclusion

This is a Netflix clone built using React, Tailwind, Vite, and Firebase. The app demonstrates how to fetch data from an API, use Firebase Authentication and Firestore to implement user