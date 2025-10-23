# PathMate - Team Assignment: Traditional Client-Server Setup

## Project Structure
```
PathMate/
├── serverJonathan/          ← Back-end (Jonathan)
│   ├── server.js           (Express + SQLite)
│   ├── package.json
│   └── README.md
├── componentsRoy/          ← Front-end (Roy)
│   ├── LoginScreen.tsx
│   └── README.md
└── App.tsx
```

---

## Getting Started

### Jonathan (Back-End):
1. Go to `serverJonathan/` folder
2. Read `serverJonathan/README.md`
3. Run `npm install`
4. Run `npm start`
5. Share your IP address with Roy

### Roy (Front-End):
1. Get Jonathan's IP address
2. Update `API_URL` in `LoginScreen.tsx`
3. Read `componentsRoy/README.md`
4. Run `npm start` and test!

---

## How It Works

### The Flow:
```
User fills form → Roy's UI → fetch() → Jonathan's Server → SQLite Database
                                    ↓
User sees alert ← Roy's UI ← Response ← Jonathan's Server
```

### Jonathan's API Endpoints:

1. **Create Account**
   - `POST /api/users`
   - Body: `{ phoneNumber, username }`
   - Saves to database

2. **Verify Account**
   - `GET /api/users/verify/:username`
   - Checks if username exists
   - Returns: `{ exists: true/false }`

### Roy's Responsibilities:
- Build UI (TextInput, Buttons)
- Call Jonathan's API using `fetch()`
- Display success/error messages

---

## Division of Labor

| Task | Who Does It |
|------|-------------|
| Create database | Jonathan |
| Write API endpoints | Jonathan |
| Set up server | Jonathan |
| Build UI | Roy |
| Call API with fetch() | Roy |
| Handle responses | Roy |

---

## Running the Project

### Jonathan runs:
```bash
cd serverJonathan
npm install
npm start
```

### Roy runs:
```bash
npm start
```

### Both must be:
✅ On the same WiFi network  
✅ Using Jonathan's correct IP address

---

## Testing Together

1. Jonathan starts server
2. Jonathan shares IP with Roy
3. Roy updates `API_URL` in code
4. Roy runs app and tests buttons
5. Jonathan monitors console for incoming requests
6. Both check if data is saved correctly

---

## Viewing the Data

Jonathan can view all saved users:
```bash
curl http://localhost:3000/api/users
```

Or use any SQLite viewer to open `serverJonathan/database.db`
