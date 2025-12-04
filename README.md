✅ README.md (Single Page)

# Two-Factor Authentication UI (ReactJS)

This is a simple ReactJS project that displays:

- 2FA Setup screen with QR code
- OTP verification screen

You can run this project either **online** using CodeSandbox or **locally** on your system.

---

## OPTION 1: RUN ONLINE (EASIEST WAY)

---

1. Open: https://codesandbox.io/
2. Click **Create Sandbox**
3. Select **React**
4. Replace the code in `src/App.js` with project code
5. Create these files inside `src/` folder:
   - TwoFactorSetup.jsx
   - TwoFactorVerify.jsx
   - TwoFactor.css
6. Paste the code into each file
7. Open the terminal in CodeSandbox and run:

npm install react-qr-code

8. The app will auto-run in browser.

---

## OPTION 2: RUN LOCALLY

---

### Requirements:

- Install NodeJS from https://nodejs.org/

Check:

node -v
npm -v

### Create Project:

npx create-react-app two-factor-auth-ui
cd two-factor-auth-ui

### Add Code Files:

Inside `src/` folder create:

- App.js
- TwoFactorSetup.jsx
- TwoFactorVerify.jsx
- TwoFactor.css

Paste the provided code into each file.

### Install Dependency:

npm install react-qr-code

### Run Application:

npm start

Open browser:

http://localhost:3000

---

## PROJECT STRUCTURE

---

two-factor-auth-ui/└── src/├── App.js├── TwoFactorSetup.jsx├── TwoFactorVerify.jsx└── TwoFactor.css

---

## COMMON ERRORS

---

### QR code not displayed?

npm install react-qr-code
npm start

### Blank screen?

- Make sure file names match imports
- Ensure all files are inside `src/`

---

## NEXT STEPS (OPTIONAL)

---

- Connect backend (Spring Boot)
- Enable Google Authenticator
- Store user secrets in DB
- OTP verification API

---

## AUTHOR

---

Created by Praneeth
