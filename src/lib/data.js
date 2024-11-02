export const doctors = 
 [
    { id: 1, name: "Dr. Ayesha Khan", appointmentTime: "10:00 AM - 12:00 PM", fees: 500, category: "Neurologist", hospital: "City Hospital", gender: "Female" },
    { id: 2, name: "Dr. Salman Ahmed", appointmentTime: "12:00 PM - 02:00 PM", fees: 700, category: "Cardiologist", hospital: "General Hospital", gender: "Male" },
    { id: 3, name: "Dr. Noor Fatima", appointmentTime: "02:00 PM - 04:00 PM", fees: 800, category: "Dermatologist", hospital: "City Clinic", gender: "Female" },
    { id: 4, name: "Dr. Saad Ali", appointmentTime: "04:00 PM - 06:00 PM", fees: 600, category: "Pediatrician", hospital: "Care Hospital", gender: "Male" },
    { id: 5, name: "Dr. Sana Mirza", appointmentTime: "10:00 AM - 12:00 PM", fees: 900, category: "General Physician", hospital: "Wellness Center", gender: "Female" },
    { id: 6, name: "Dr. Usman Tariq", appointmentTime: "12:00 PM - 02:00 PM", fees: 400, category: "Orthopedic", hospital: "City Hospital", gender: "Male" },
    { id: 7, name: "Dr. Hira Zafar", appointmentTime: "02:00 PM - 04:00 PM", fees: 650, category: "Gynecologist", hospital: "General Hospital", gender: "Female" },
    { id: 8, name: "Dr. Fahad Sheikh", appointmentTime: "04:00 PM - 06:00 PM", fees: 550, category: "Psychiatrist", hospital: "Mental Health Center", gender: "Male" },
    { id: 9, name: "Dr. Alina Raza", appointmentTime: "10:00 AM - 12:00 PM", fees: 750, category: "Neurologist", hospital: "City Clinic", gender: "Female" },
    { id: 10, name: "Dr. Hamza Khan", appointmentTime: "12:00 PM - 02:00 PM", fees: 850, category: "Cardiologist", hospital: "City Hospital", gender: "Male" },
    { id: 11, name: "Dr. Zainab Ansari", appointmentTime: "02:00 PM - 04:00 PM", fees: 700, category: "Dermatologist", hospital: "Wellness Center", gender: "Female" },
    { id: 12, name: "Dr. Ali Raza", appointmentTime: "04:00 PM - 06:00 PM", fees: 600, category: "Pediatrician", hospital: "General Hospital", gender: "Male" },
    { id: 13, name: "Dr. Fatima Bilal", appointmentTime: "10:00 AM - 12:00 PM", fees: 950, category: "General Physician", hospital: "Care Hospital", gender: "Female" },
    { id: 14, name: "Dr. Hasan Qureshi", appointmentTime: "12:00 PM - 02:00 PM", fees: 550, category: "Orthopedic", hospital: "City Clinic", gender: "Male" },
    { id: 15, name: "Dr. Mariam Sheikh", appointmentTime: "02:00 PM - 04:00 PM", fees: 650, category: "Gynecologist", hospital: "City Hospital", gender: "Female" },
    { id: 16, name: "Dr. Ahmed Malik", appointmentTime: "04:00 PM - 06:00 PM", fees: 500, category: "Psychiatrist", hospital: "Mental Health Center", gender: "Male" },
    { id: 17, name: "Dr. Sara Khan", appointmentTime: "10:00 AM - 12:00 PM", fees: 900, category: "Neurologist", hospital: "General Hospital", gender: "Female" },
    { id: 18, name: "Dr. Bilal Arif", appointmentTime: "12:00 PM - 02:00 PM", fees: 700, category: "Cardiologist", hospital: "City Hospital", gender: "Male" },
    { id: 19, name: "Dr. Ayla Farooq", appointmentTime: "02:00 PM - 04:00 PM", fees: 600, category: "Dermatologist", hospital: "City Clinic", gender: "Female" },
    { id: 20, name: "Dr. Saif Hassan", appointmentTime: "04:00 PM - 06:00 PM", fees: 800, category: "Pediatrician", hospital: "Wellness Center", gender: "Male" },
    { id: 21, name: "Dr. Nida Shah", appointmentTime: "10:00 AM - 12:00 PM", fees: 700, category: "General Physician", hospital: "Care Hospital", gender: "Female" },
    { id: 22, name: "Dr. Raza Murtaza", appointmentTime: "12:00 PM - 02:00 PM", fees: 750, category: "Orthopedic", hospital: "City Hospital", gender: "Male" },
    { id: 23, name: "Dr. Rabia Ali", appointmentTime: "02:00 PM - 04:00 PM", fees: 900, category: "Gynecologist", hospital: "General Hospital", gender: "Female" },
    { id: 24, name: "Dr. Kamran Ali", appointmentTime: "04:00 PM - 06:00 PM", fees: 550, category: "Psychiatrist", hospital: "Mental Health Center", gender: "Male" },
    { id: 25, name: "Dr. Anam Usman", appointmentTime: "10:00 AM - 12:00 PM", fees: 850, category: "Neurologist", hospital: "Wellness Center", gender: "Female" }
  ];
  
  export const categories = [
    "Neurologist",
    "Cardiologist",
    "Dermatologist",
    "Pediatrician",
    "General Physician",
    "Orthopedic",
    "Gynecologist",
    "Psychiatrist"
  ];
  export const curretUser = {
    name: "asad",
    role: "user",
    email: "asad@gmail.com"
  }

  export const appointments = [
    { 
      user: { name: "Ali Raza", email: "ali.raza@example.com" },
      appointmentTime: "10:00 AM - 10:30 AM",
      status: "Confirmed",
      appointmentDate: "2024-11-02",
      doctor: { name: "Dr. Ayesha Khan", hospital: "City Hospital" }
    },
    { 
      user: { name: "Sara Malik", email: "sara.malik@example.com" },
      appointmentTime: "11:00 AM - 11:30 AM",
      status: "Pending",
      appointmentDate: "2024-11-02",
      doctor: { name: "Dr. Salman Ahmed", hospital: "General Hospital" }
    },
    { 
      user: { name: "Zain Ali", email: "zain.ali@example.com" },
      appointmentTime: "12:00 PM - 12:30 PM",
      status: "Canceled",
      appointmentDate: "2024-11-02",
      doctor: { name: "Dr. Noor Fatima", hospital: "City Clinic" }
    },
    { 
      user: { name: "Aisha Khan", email: "aisha.khan@example.com" },
      appointmentTime: "02:00 PM - 02:30 PM",
      status: "Confirmed",
      appointmentDate: "2024-11-03",
      doctor: { name: "Dr. Saad Ali", hospital: "Care Hospital" }
    },
    { 
      user: { name: "Hamza Shah", email: "hamza.shah@example.com" },
      appointmentTime: "03:00 PM - 03:30 PM",
      status: "Pending",
      appointmentDate: "2024-11-03",
      doctor: { name: "Dr. Sana Mirza", hospital: "Wellness Center" }
    },
    { 
      user: { name: "Mariam Zafar", email: "mariam.zafar@example.com" },
      appointmentTime: "04:00 PM - 04:30 PM",
      status: "Confirmed",
      appointmentDate: "2024-11-03",
      doctor: { name: "Dr. Usman Tariq", hospital: "City Hospital" }
    },
    { 
      user: { name: "Ahmed Sheikh", email: "ahmed.sheikh@example.com" },
      appointmentTime: "10:00 AM - 10:30 AM",
      status: "Canceled",
      appointmentDate: "2024-11-04",
      doctor: { name: "Dr. Hira Zafar", hospital: "General Hospital" }
    },
    { 
      user: { name: "Nida Qureshi", email: "nida.qureshi@example.com" },
      appointmentTime: "11:00 AM - 11:30 AM",
      status: "Confirmed",
      appointmentDate: "2024-11-04",
      doctor: { name: "Dr. Fahad Sheikh", hospital: "Mental Health Center" }
    },
    { 
      user: { name: "Kamran Malik", email: "kamran.malik@example.com" },
      appointmentTime: "02:00 PM - 02:30 PM",
      status: "Pending",
      appointmentDate: "2024-11-05",
      doctor: { name: "Dr. Alina Raza", hospital: "City Clinic" }
    },
    { 
      user: { name: "Anam Usman", email: "anam.usman@example.com" },
      appointmentTime: "03:00 PM - 03:30 PM",
      status: "Confirmed",
      appointmentDate: "2024-11-05",
      doctor: { name: "Dr. Hamza Khan", hospital: "City Hospital" }
    },
    { 
      user: { name: "Bilal Tariq", email: "bilal.tariq@example.com" },
      appointmentTime: "11:00 AM - 11:30 AM",
      status: "Confirmed",
      appointmentDate: "2024-11-06",
      doctor: { name: "Dr. Zainab Ansari", hospital: "Wellness Center" }
    },
    { 
      user: { name: "Farah Ali", email: "farah.ali@example.com" },
      appointmentTime: "01:00 PM - 01:30 PM",
      status: "Pending",
      appointmentDate: "2024-11-06",
      doctor: { name: "Dr. Ali Raza", hospital: "General Hospital" }
    },
    { 
      user: { name: "Usman Shah", email: "usman.shah@example.com" },
      appointmentTime: "09:00 AM - 09:30 AM",
      status: "Confirmed",
      appointmentDate: "2024-11-07",
      doctor: { name: "Dr. Fatima Bilal", hospital: "Care Hospital" }
    },
    { 
      user: { name: "Muneeb Hassan", email: "muneeb.hassan@example.com" },
      appointmentTime: "10:00 AM - 10:30 AM",
      status: "Confirmed",
      appointmentDate: "2024-11-07",
      doctor: { name: "Dr. Hasan Qureshi", hospital: "City Clinic" }
    },
    { 
      user: { name: "Rabia Iqbal", email: "rabia.iqbal@example.com" },
      appointmentTime: "12:00 PM - 12:30 PM",
      status: "Canceled",
      appointmentDate: "2024-11-07",
      doctor: { name: "Dr. Mariam Sheikh", hospital: "City Hospital" }
    },
    { 
      user: { name: "Fahad Khan", email: "fahad.khan@example.com" },
      appointmentTime: "02:00 PM - 02:30 PM",
      status: "Pending",
      appointmentDate: "2024-11-08",
      doctor: { name: "Dr. Ahmed Malik", hospital: "Mental Health Center" }
    },
    { 
      user: { name: "Noor Ahmed", email: "noor.ahmed@example.com" },
      appointmentTime: "03:00 PM - 03:30 PM",
      status: "Confirmed",
      appointmentDate: "2024-11-08",
      doctor: { name: "Dr. Sara Khan", hospital: "General Hospital" }
    },
    { 
      user: { name: "Amir Zaman", email: "amir.zaman@example.com" },
      appointmentTime: "04:00 PM - 04:30 PM",
      status: "Confirmed",
      appointmentDate: "2024-11-09",
      doctor: { name: "Dr. Bilal Arif", hospital: "City Hospital" }
    },
    { 
      user: { name: "Zara Khan", email: "zara.khan@example.com" },
      appointmentTime: "10:00 AM - 10:30 AM",
      status: "Canceled",
      appointmentDate: "2024-11-09",
      doctor: { name: "Dr. Ayla Farooq", hospital: "City Clinic" }
    },
    { 
      user: { name: "Hassan Iqbal", email: "hassan.iqbal@example.com" },
      appointmentTime: "01:00 PM - 01:30 PM",
      status: "Pending",
      appointmentDate: "2024-11-09",
      doctor: { name: "Dr. Saif Hassan", hospital: "Wellness Center" }
    }
  ];
  
  