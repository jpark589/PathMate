##TASK 2 FOR ROY
Complete the login screen that saves phone number and username to Firebase.


### 1. Add UI Elements in LoginScreen.tsx
Open `componentsRoy/LoginScreen.tsx` and:

1. TextInput for phone number
2. TextInput for username
3. "Create Account" Button


### 2. Implement handleLogin: (JONATHAN SHOULD'VE FILLED ./config/firebaseConfig.ts BY NOW)
   - Import Firebase functions (already set up)
   - Save data to Firestore `users` collection
         - this function saves the object to the database:
               addDoc(collection(db, 'users'), { phoneNumber, username })
   - Debug: Show success or error message


### 3. Test
1. Run the app: `npm start` or `npx expo start`
2. Fill in the form and press submit
3. Check Firebase Console with Jonathan


### 4. Commit and Push it to the Repo
1. git add .
2. git commit -m 'implemented basic LoginScreen'
3. git push origin main