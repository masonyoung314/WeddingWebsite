import { useState, useEffect } from 'react';
// import type { ChangeEvent } from 'react';
import { collection, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import type { DocumentData } from 'firebase/firestore';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase.ts';
import styles from "../styles/Attendance.module.css";


type Guest = {
  id: string;
  name: string;
  attending: boolean;
};

const handleBoxChange = async (id: string, isChecked: boolean) => {
  try {
    const guest = doc(db, 'attendees', id);
    await updateDoc(guest, {
      attending: isChecked,
      lastUpdated: serverTimestamp()
    });
    console.log(`Updated ${id}'s attending status to: ${isChecked}`);
  }
  catch (err) {
    console.error("Error in updating guest attendance", err);
    return (<p>Error in updating attendance status</p>);
  }
};


const Attendance = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'attendees'), orderBy('name'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const guestData: Guest[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data() as DocumentData;
        guestData.push({
          id: doc.id,
          name: data.name,
          attending: data.attending
        });
      });
      setGuests(guestData);
      setLoading(false);
    }, (err) => {
      console.error("Error fetching data from database: ", err);
      setError("Failed to load guest data.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (<p style={{minHeight: '100vh', marginTop:'0', backgroundColor: '#FFB8D1'}}>Page loading...</p>)
  }
  if (error) {
    return <p style={{color:'red', marginTop:'0'}}>Error: {error}</p>
  }
  return (
    <>
    <div className={styles.attendanceScreen}>
      <h1 className={styles.guestHeader}>Guest List</h1>
      <p className={styles.guestInstructions}>(Just click the box next to your name to let us know you're coming!)</p>
      <ul style={{listStyle: 'none'}} className={styles.checkboxesContainer}>
        {guests.map((guest) => (
          <li key={guest.id} className={styles.checkboxes}>
            <label className={styles.guestNameLabel}>
              {guest.name}
            </label>

            <label className={styles.checkboxLabel}>
              <input type='radio' checked={guest.attending === true} onChange={() => handleBoxChange(guest.id, true)} />
              <span className={styles.checkbox}></span>
            </label>

            <label className={styles.checkboxLabel}>
              <input type='radio' checked={guest.attending === false} onChange={() => handleBoxChange(guest.id, false)}/>
              <span className={styles.checkboxTwo}></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Attendance