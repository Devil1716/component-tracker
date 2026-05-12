window.COMPONENT_TRACKER_CONFIG = {
    environment: 'production',
    firebase: {
        apiKey: 'YOUR_FIREBASE_WEB_API_KEY',
        authDomain: 'YOUR_PROJECT.firebaseapp.com',
        databaseURL: 'https://YOUR_DATABASE_URL.firebasedatabase.app',
        projectId: 'YOUR_PROJECT_ID',
        storageBucket: 'YOUR_PROJECT.appspot.com',
        messagingSenderId: 'YOUR_SENDER_ID',
        appId: 'YOUR_APP_ID',
        measurementId: 'YOUR_MEASUREMENT_ID'
    },
    auth: {
        username: 'Admin',
        passwordHash: 'SHA_256_PASSWORD_HASH'
    },
    databasePaths: {
        production: 'componentTracker/production/state',
        testing: 'componentTracker/testing/state'
    }
};
