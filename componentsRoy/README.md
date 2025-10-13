# Front-End Developer Instructions (Firebase)

## Your Task
Complete the login screen that saves phone number and username to Firebase.

## Steps

### 1. Get Firebase Config from Jonathan
Jonathan will give you a `firebaseConfig` object. You'll need it for the next step.

### 2. Set Up Firebase Config
1. Open `config/firebaseConfig.ts`
2. Paste the config Jonathan gave you into the designated spot
3. This connects your app to the database

### 3. Complete LoginScreen.tsx
Open `componentsRoy/LoginScreen.tsx` and:

1. **Add UI Elements:**
   - TextInput for phone number
   - TextInput for username
   - Button to submit

2. **Implement handleLogin:**
   - Import Firebase functions (already set up)
   - Save data to Firestore `users` collection
   - Show success or error message

### 4. Test
1. Run the app: `npm start`
2. Fill in the form and press submit
3. Check Firebase Console with Jonathan - your data should appear!

## Example Code Hints

**Import Firebase:**
```typescript
import { db } from '../config/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
```

**Save to Firebase:**
```typescript
await addDoc(collection(db, 'users'), {
  phoneNumber: phoneNumber,
  username: username
});
```

**Show Alert:**
```typescript
import { Alert } from 'react-native';
Alert.alert('Success', 'Login saved!');
```

## Testing Without Jonathan
Once the config is set up, you can test independently! Both of you can see the data appear in Firebase Console in real-time.
