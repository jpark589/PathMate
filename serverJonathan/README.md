##TASK 2 FOR JONATHAN
Set up Firebase project and configure the database for storing user login data.

### 1. Create Firebase Project
1. Go to Firebase: (https://console.firebase.google.com/)
2. Click "Add project"
3. Name it "PathMate" (or any name)
4. Create project


### 2. Set Up Firestore Database
1. In Firebase Console, click "Firestore Database"
2. Click "Create database"
3. Choose **"Start in test mode"** (for learning - allows read/write)
4. Choose a location (any region)
5. Click "Enable"


### 3. Create Collection
1. Click "Start collection"
2. Collection ID: `users`
3. Add first document (just for setup):
   - Document ID: (auto-generate)
   - Field: `phoneNumber` (string) → `"0000000000"`
   - Field: `username` (string) → `"testuser"`
4. Save


### 4. Get Firebase Config
1. Go to Project Settings (gear icon)
2. Scroll to "Your apps"
3. Click the web icon (`</>`)
4. Register app: "PathMate"
5. Copy the `firebaseConfig` object


### 5. Go to ../config/firebaseConfig.ts and fill up the following:
  const firebaseConfig = {
    apiKey: "AIza...",
    authDomain: "pathmate-xxx.firebaseapp.com",
    projectId: "pathmate-xxx",
    storageBucket: "pathmate-xxx.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123"
  };