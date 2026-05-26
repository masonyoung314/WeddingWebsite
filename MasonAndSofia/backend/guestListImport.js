const admin = require("firebase-admin");

const serviceAccount = require('./firebaseAdmin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();

const guests = [
  { name: "Ricardo" },
  { name: "Ledys" },
  { name: "Roimy" },
  { name: "Gara" },
  { name: "Roma" },
  { name: "Tio Reinaldo" },
  { name: "Abuela Gladys" },
  { name: "Tía Noradys" },
  { name: "Jeyson" },
  { name: "Tía Karina" },
  { name: "Sarah" },
  { name: "Tío Domingo" },
  { name: "Nicolás" },
  { name: "Isis" },
  { name: "Mario" },
  { name: "Mariana" },
  { name: "Ayshane" },
  { name: "Lucía" },
  { name: "Ivanna" },
  { name: "June" },
  { name: "Desi" },
  { name: "Leslie Fox" },
  { name: "Jason Fox" },
  { name: "James Young" },
  { name: "Jessica Young" },
  { name: "Brayden Brownell" },
  { name: "Braelynn Brownell" },
  { name: "Hudson Perry" },
  { name: "Kolter Brownell" },
  { name: "Emily Brownell" },
  { name: "Uncle Scott" },
  { name: "Aunt Theresa" },
  { name: "Sadie" },
  { name: "Josh" },
  { name: "Aunt Amy" },
  { name: "Uncle Dan" },
  { name: "Sydney Herguth" },
  { name: "Grandpa Jim" },
  { name: "Grandpa Lester" },
  { name: "Grandma Joy" },
  { name: "Drew Nurenberg" },
  { name: "Julia Esch" },
  { name: "Aaron Platte" },
  { name: "John Brawley" },
  { name: "Bobby Brawley" },
  { name: "Aunt Ruth" },
  { name: "Uncle Bryan" },
  { name: "Kevin Fox" },
  { name: "Lori Fox" },
  { name: "Jessie Genovese" },
  { name: "Mike Genovese" },
  { name: "Thomas Laskowski" },
  { name: "Mohammed Vohra" },
  { name: "Mustafa Zirapury" },
  { name: "Vishal Dattathreya" },
  { name: "Rohan Satapathy" }
];


async function importGuests() {
  console.log('Starting guest import...');
  const batch = db.batch();
  const collectionRef = db.collection('attendees'); // Name of your Firestore collection

  guests.forEach(guest => {
    // You can set a custom document ID, e.g., based on email or a generated ID
    // For now, let Firestore generate a random ID
    const docRef = collectionRef.doc();
    batch.set(docRef, {
      name: guest.name,
      attending: false, // Default attendance status
      timestamp: admin.firestore.FieldValue.serverTimestamp() // Optional: add a creation timestamp
    });
  });

  try {
    await batch.commit();
    console.log(`Successfully imported ${guests.length} guests.`);
  } catch (error) {
    console.error('Error importing guests:', error);
  }
}

importGuests();