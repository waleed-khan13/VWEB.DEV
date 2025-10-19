/**
 * Admin User Setup Script
 * 
 * This script helps you create an admin user in Firebase.
 * 
 * Steps to create an admin:
 * 1. Go to Firebase Console > Authentication
 * 2. Add a new user with email and password
 * 3. Copy the UID of the created user
 * 4. Run this script with the UID
 * 
 * Usage:
 * node scripts/create-admin.js YOUR_USER_UID
 */

const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json'); // You need to download this from Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function makeAdmin(uid) {
  if (!uid) {
    console.error('❌ Error: Please provide a user UID');
    console.log('Usage: node scripts/create-admin.js YOUR_USER_UID');
    process.exit(1);
  }

  try {
    // Set custom claim
    await admin.auth().setCustomUserClaims(uid, { admin: true });

    // Add user to Firestore with admin role
    await db.collection('users').doc(uid).set({
      role: 'admin',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    console.log('✅ Success! User is now an admin');
    console.log(`UID: ${uid}`);
    
    // Get user details
    const userRecord = await admin.auth().getUser(uid);
    console.log(`Email: ${userRecord.email}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

const uid = process.argv[2];
makeAdmin(uid);
