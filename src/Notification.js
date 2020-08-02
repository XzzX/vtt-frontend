import React, {useState} from 'react';
import './App.css';

function Notification() {
  const [alert, setAlert] = useState([
    <SweetAlert danger title="FAIL!" onConfirm={() => setAlert(alert.slice(1))}/>,
    <SweetAlert success title="SUCCESS!" onConfirm={() => setAlert(alert.slice(1))}/>
  ]);

  return (
    <div>
    {alert.length != 0 && alert[0]}
    </div>
  );
}

export default Notification;
