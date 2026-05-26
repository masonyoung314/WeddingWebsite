import React from 'react'
import { useState, useEffect } from 'react';


type Guest = {
  id: number;
  name: string;
  attending: boolean;
};

const Attendance = () => {
  const [guests, setGuests] = useState<Guest[]>([]);

  return (
    <div>Attendance</div>
  )
}

export default Attendance