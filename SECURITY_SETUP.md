# 🔐 Admin Panel Security Setup Guide

## Overview
This guide will help you secure your admin panel with Firebase Authentication.

---

## Step 1: Setup Firebase

1. **Go to Firebase Console**: https://console.firebase.google.com
2. **Select your project**: `VWEB.DEV`
3. **Enable Authentication**:
   - Go to **Authentication** > **Sign-in method**
   - Enable **Email/Password**

---

## Step 2: Create Admin User

### Option A: Using Firebase Console (Easiest)

1. Go to **Authentication** > **Users**
2. Click **Add User**
3. Enter admin email and password:
   ```
   Email: admin@vweb.dev
   Password: [Your Strong Password]
   ```
4. Click **Add User**
5. **Copy the UID** (you'll need this)

### Option B: Using Firebase CLI (Advanced)

```bash
firebase auth:export users.json
# Then manually create user
```

---

## Step 3: Set User Role to Admin

You need to add the user to Firestore with admin role.

### Option A: Using Firebase Console (Manual)

1. Go to **Firestore Database**
2. Create collection: `users`
3. Add document with the UID from Step 2:
   ```
   Document ID: [THE_USER_UID_FROM_STEP_2]
   
   Fields:
   - role: "admin" (string)
   - createdAt: [timestamp]
   ```

4. Save the document

### Option B: Using Script (Advanced)

1. Download your **Service Account Key**:
   - Go to Project Settings > Service Accounts
   - Click "Generate new private key"
   - Save as `serviceAccountKey.json` in root folder

2. Install firebase-admin:
   ```bash
   npm install firebase-admin --save-dev
   ```

3. Run the script:
   ```bash
   node scripts/create-admin.js YOUR_USER_UID
   ```

---

## Step 4: Update Environment Variables

Make sure your `.env.local` has all Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

---

## Step 5: Test the Setup

1. **Start the dev server**:
   ```bash
   npm run dev
   ```

2. **Try accessing admin panel**: http://localhost:9002/admin
   - You should be redirected to `/login`

3. **Login with admin credentials**:
   - Email: admin@vweb.dev
   - Password: [Your Password]

4. **You should be redirected to admin dashboard**

---

## Step 6: Firestore Security Rules

Update your Firestore security rules to protect user data:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Users collection - only admins can read/write
    match /users/{userId} {
      allow read, write: if request.auth != null && 
                           get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Other collections - customize as needed
    match /{document=**} {
      allow read: if true; // Public read
      allow write: if request.auth != null && 
                      get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

---

## Step 7: Deploy to Netlify

1. **Add environment variables in Netlify**:
   - Go to Site Settings > Environment Variables
   - Add all `NEXT_PUBLIC_FIREBASE_*` variables

2. **Deploy**:
   ```bash
   git add .
   git commit -m "feat: add admin authentication"
   git push
   ```

3. **Test on production**: https://your-site.netlify.app/admin

---

## Security Features Implemented

✅ **Authentication Required**: All admin routes require login
✅ **Role-Based Access**: Only users with 'admin' role can access
✅ **Protected Routes**: ProtectedRoute component checks authentication
✅ **Auto Redirect**: Non-authenticated users redirected to /login
✅ **Session Management**: Firebase handles session persistence
✅ **Logout Functionality**: Secure sign out with redirect
✅ **Password Reset**: Forgot password feature included

---

## Troubleshooting

### Issue: "Cannot access admin panel after login"

**Solution**: Check Firestore - make sure the user document has `role: "admin"`

```javascript
// Firestore Document Structure
{
  "users": {
    "USER_UID_HERE": {
      "role": "admin",
      "createdAt": "2025-01-01T00:00:00.000Z"
    }
  }
}
```

### Issue: "Firebase not initialized"

**Solution**: Check `.env.local` file has all correct values

### Issue: "User can access admin but not make changes"

**Solution**: Update Firestore security rules (Step 6)

---

## Adding More Admins

To add more admin users:

1. Create user in Firebase Authentication
2. Get their UID
3. Add document in Firestore `users` collection:
   ```
   Document ID: NEW_USER_UID
   role: "admin"
   ```

---

## Quick Reference

### Login URL
- Local: http://localhost:9002/login
- Production: https://vweb.dev/login

### Admin Panel URL
- Local: http://localhost:9002/admin
- Production: https://vweb.dev/admin

### Default Admin Credentials (You should create these)
- Email: admin@vweb.dev
- Password: [Set during creation]

---

## Next Steps

1. ✅ Create admin user in Firebase
2. ✅ Set role to 'admin' in Firestore
3. ✅ Test login locally
4. ✅ Update Firestore security rules
5. ✅ Deploy to Netlify with environment variables
6. ✅ Test on production

---

**Need Help?** Check the [Firebase Documentation](https://firebase.google.com/docs/auth) or open an issue on GitHub.

**Security Note**: Never commit `serviceAccountKey.json` or `.env.local` to Git!
