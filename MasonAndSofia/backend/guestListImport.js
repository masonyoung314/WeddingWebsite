const admin = require("firebase-admin");

const serviceAccount = require('./firebaseAdmin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const db = admin.firestore();

const guests = [
    { name: "Adaya" },
    { name: "Alberto" },
    { name: "Amy + Dan + Sydney" },
    { name: "Ayshane" },
    { name: "B" },
    { name: "Bentor" },
    { name: "Brandon + Brandon fiancé" },
    { name: "Brayden + Emily" },
    { name: "Brian + Ruth" },
    { name: "Bobby + John" },
    { name: "Carmen" },
    { name: "Colter" },
    { name: "Deniese + Tom" },
    { name: "Doris" },
    { name: "Domingo + Karina + Mingo + Sarah" },
    { name: "Dora" },
    { name: "Drew + Ty" },
    { name: "Fer" },
    { name: "Fill" },
    { name: "Gara + Roimy + Roma" },
    { name: "Gladys" },
    { name: "Henry" },
    { name: "Hudson" },
    { name: "Isis + Nicolás" },
    { name: "Ivanna" },
    { name: "Jason + Leslie" },
    { name: "Jessie + Mike" },
    { name: "Jim + Kevin + Lester + Lori + Joy" },
    { name: "June" },
    { name: "Josue" },
    { name: "Ledys + Ricardo" },
    { name: "Lucía" },
    { name: "Lucas" },
    { name: "Maribel" },
    { name: "Mariana" },
    { name: "Mario + Mercedes" },
    { name: "Mason" },
    { name: "Miguel Ángel" },
    { name: "Mustafa" },
    { name: "Nicol" },
    { name: "Nora + Jeysson" },
    { name: "Pareja del pastor + Pastor" },
    { name: "Reinaldo" },
    { name: "Rohan" },
    { name: "Roxy" },
    { name: "Sofía" },
    { name: "Thomas" },
    { name: "Toñy" },
    { name: "Trey" },
    { name: "Vero" },
    { name: "Vishal" },
    { name: "Zaida" }
];


async function importGuests() {
  console.log('Starting guest import...');
  const batch = db.batch();
  const collectionRef = db.collection('attendees'); // Name of your Firestore collection

  guests.forEach((guest, index) => {
    // You can set a custom document ID, e.g., based on email or a generated ID
    // For now, let Firestore generate a random ID
    const docRef = collectionRef.doc();
    batch.set(docRef, {
      name: guest.name,
      attending: false, // Default attendance status
      importOrder: index,
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