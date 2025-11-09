
// import React, { useState } from 'react'

// export default function StudentDashboard({ user }) {
//     const [selected, setSelected] = useState('result')

//     const options = [
//         { id: 'profile', label: 'Profile' },
//         { id: 'result', label: 'Result' },
//         { id: 'exam_schedule', label: 'Exam Schedule' },
//         { id: 'study_material', label: 'Study Material' },
//         { id: 'attendance', label: 'Attendance' },
//         { id: 'enrollment', label: 'Enrollment' },
//         { id: 'payment', label: 'Payment' }
//     ]

//     // blank result data as requested
//     const blankResult = {
//         examId: '',
//         resultId: '',
//         studentId: '',
//         marksObtained: '',
//         remarks: ''
//     }

//     // blank exam schedule data as requested
//     const blankExam = {
//         Exam_ID: '',
//         Course_Code: '',
//         Batch_ID: '',
//         Exam_Date: '',
//         Exam_Type: '',
//         Total_Marks: ''
//     }

//     // blank study material data
//     const blankStudyMaterial = {
//         Course_Code: '',
//         Batch_ID: '',
//         Faculty_ID: '',
//         Title: '',
//         Description: '',
//         File: '',
//         Upload_Date: ''
//     }

//     // blank attendance data
//     const blankAttendance = {
//         Student_ID: '',
//         Batch_ID: '',
//         Date: '',
//         Status: '',
//         Remarks: ''
//     }

//     // blank enrollment data
//     const blankEnrollment = {
//         Student_ID: '',
//         Course_Code: '',
//         Batch_ID: '',
//         Date: ''
//     }

//     // blank payment data
//     const blankPayment = {
//         Payment_ID: '',
//         Student_ID: '',
//         Course_Code: '',
//         Batch_ID: '',
//         Amount_Paid: '',
//         Mode_of_Payment: '',
//         Receipt_Number: ''
//     }

//     if (!user) {
//         return (
//             <div style={styles.container}>
//                 <div style={styles.card}>
//                     <h2>Shape Your Future With Gurukul IAS Academy</h2>
//                     <p>Your trusted partner for UPSC, MPSC & Defence exam preparation.</p>
//                     <p>At Gurukul IAS Academy, we provide structured learning, expert mentorship, and a disciplined approach to help aspirants reach their career goals.</p>
                    
//                     <h3>We focus on:</h3>
//                     <ul>
//                         <li>Conceptual clarity</li>
//                         <li>Strategic study planning</li>
//                         <li>Consistent practice</li>
//                         <li>Individual progress tracking</li>
//                     </ul>
                    
//                     <p>Our mission is to help every aspirant unlock their full potential and serve the nation with pride.</p>

//                     {/* Need Help Section */}
//                     <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f0f8ff', borderRadius: 8, borderLeft: '4px solid #f5576c' }}>
//                         <h3 style={{ marginTop: 0 }}>☎ Need Help? (Support Box)</h3>
//                         <h4>How Can We Help You?</h4>
//                         <p>Get personalized guidance for UPSC, MPSC, SSC, Banking and Defence exams from experienced faculties.</p>
//                         <p><strong>📞 Contact: +91 98765 43210</strong></p>
//                     </div>

//                     {/* About Us Section */}
//                     <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f9f9f9', borderRadius: 8 }}>
//                         <h3 style={{ marginTop: 0 }}>ℹ About Us</h3>
//                         <p>Gurukul IAS Academy is a leading coaching institute dedicated to preparing students for UPSC, MPSC, Banking, SSC, Defence, and other competitive exams.</p>
//                         <h4>Our teaching approach includes:</h4>
//                         <ul>
//                             <li>Classroom lectures & digital resources</li>
//                             <li>Topic-wise test series and doubt-solving sessions</li>
//                             <li>Performance tracking and improvement mentoring</li>
//                             <li>Personality development & interview preparation</li>
//                         </ul>
//                         <p>We believe in discipline, hard work, and smart study strategies to help students excel in highly competitive examinations.</p>
//                     </div>

//                     {/* Coming Soon Section */}
//                     <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#fff5e6', borderRadius: 8 }}>
//                         <h3 style={{ marginTop: 0 }}>🚀 Coming Soon</h3>
//                         <h4>Workshops</h4>
//                         <p>Attend workshops on answer-writing, CSAT mastery, interview preparation, personality development, and time management.</p>
//                         <h4>Video Courses</h4>
//                         <p>Access topic-wise recorded lectures, revision modules and guidance videos — anytime, anywhere.</p>
//                     </div>

//                     {/* Achievements Section */}
//                     <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#e8f5e9', borderRadius: 8 }}>
//                         <h3 style={{ marginTop: 0 }}>Achievements / Stats</h3>
//                         <ul>
//                             <li>98% students satisfied with our teaching approach</li>
//                             <li>750+ students trained through online & offline batches</li>
//                             <li>20+ expert subject mentors</li>
//                         </ul>
//                     </div>

//                     {/* Contact Section */}
//                     <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#fce4ec', borderRadius: 8 }}>
//                         <h3 style={{ marginTop: 0 }}>📍 Contact Us</h3>
//                         <p>We are here to assist you with admissions, demo classes, course details, and exam information.</p>
//                         <p><strong>📍 Address:</strong> Gurukul IAS Academy, Jhansi Rani Square, Nagpur, Maharashtra</p>
//                         <p><strong>📞 Phone:</strong> +91 98765 43210</p>
//                         <p><strong>✉ Email:</strong> info@gurukuliasacademy.com</p>
//                         <p><strong>🕒 Timings:</strong> Mon–Sat, 9:00 AM – 7:00 PM</p>
//                     </div>

//                     {/* Footer */}
//                     <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #ddd', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
//                         <p>© 2025 Gurukul IAS Academy. All Rights Reserved.</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <div style={styles.container}>
//             <aside style={styles.sidebar}>
//                 <div style={styles.sidebarHeader}>
//                     <h3 style={{ margin: 0 }}>Student Menu</h3>
//                 </div>

//                 <nav style={styles.nav}>
//                     {options.map(opt => (
//                         <button
//                             key={opt.id}
//                             onClick={() => setSelected(opt.id)}
//                             style={{
//                                 ...styles.sidebarItem,
//                                 ...(selected === opt.id ? styles.sidebarItemActive : {})
//                             }}
//                         >
//                             {opt.label}
//                         </button>
//                     ))}
//                 </nav>
//             </aside>

//             <main style={styles.mainCard}>
//                 <div style={styles.card}>
//                     <h1>Student Dashboard</h1>

//                     <p style={{ color: '#666', marginTop: 8 }}>
//                         Selected: <strong>{options.find(o => o.id === selected)?.label}</strong>
//                     </p>

//                     {selected === 'result' && (
//                         <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
//                             <h2 style={styles.sectionTitle}>Result Details</h2>
//                             <div style={styles.infoGrid}>
//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Exam ID</label>
//                                     <p style={styles.infoValue}>{blankResult.examId}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Result ID</label>
//                                     <p style={styles.infoValue}>{blankResult.resultId}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Student ID</label>
//                                     <p style={styles.infoValue}>{blankResult.studentId}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Marks Obtained</label>
//                                     <p style={styles.infoValue}>{blankResult.marksObtained}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Remarks</label>
//                                     <p style={styles.infoValue}>{blankResult.remarks}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {selected === 'exam_schedule' && (
//                         <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
//                             <h2 style={styles.sectionTitle}>Exam Schedule</h2>
//                             <div style={styles.infoGrid}>
//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Exam_ID</label>
//                                     <p style={styles.infoValue}>{blankExam.Exam_ID}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Course_Code</label>
//                                     <p style={styles.infoValue}>{blankExam.Course_Code}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Batch_ID</label>
//                                     <p style={styles.infoValue}>{blankExam.Batch_ID}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Exam_Date</label>
//                                     <p style={styles.infoValue}>{blankExam.Exam_Date}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Exam_Type</label>
//                                     <p style={styles.infoValue}>{blankExam.Exam_Type}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Total_Marks</label>
//                                     <p style={styles.infoValue}>{blankExam.Total_Marks}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {selected === 'study_material' && (
//                         <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
//                             <h2 style={styles.sectionTitle}>Study Material</h2>
//                             <div style={styles.infoGrid}>
//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Course_Code</label>
//                                     <p style={styles.infoValue}>{blankStudyMaterial.Course_Code}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Batch_ID</label>
//                                     <p style={styles.infoValue}>{blankStudyMaterial.Batch_ID}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Faculty_ID</label>
//                                     <p style={styles.infoValue}>{blankStudyMaterial.Faculty_ID}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Title</label>
//                                     <p style={styles.infoValue}>{blankStudyMaterial.Title}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Description</label>
//                                     <p style={styles.infoValue}>{blankStudyMaterial.Description}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>File</label>
//                                     <p style={styles.infoValue}>{blankStudyMaterial.File}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Upload_Date</label>
//                                     <p style={styles.infoValue}>{blankStudyMaterial.Upload_Date}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {selected === 'attendance' && (
//                         <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
//                             <h2 style={styles.sectionTitle}>Attendance</h2>
//                             <div style={styles.infoGrid}>
//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Student_ID</label>
//                                     <p style={styles.infoValue}>{blankAttendance.Student_ID}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Batch_ID</label>
//                                     <p style={styles.infoValue}>{blankAttendance.Batch_ID}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Date</label>
//                                     <p style={styles.infoValue}>{blankAttendance.Date}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Status</label>
//                                     <p style={styles.infoValue}>{blankAttendance.Status}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Remarks</label>
//                                     <p style={styles.infoValue}>{blankAttendance.Remarks}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {selected === 'enrollment' && (
//                         <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
//                             <h2 style={styles.sectionTitle}>Enrollment</h2>
//                             <div style={styles.infoGrid}>
//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Student_ID</label>
//                                     <p style={styles.infoValue}>{blankEnrollment.Student_ID}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Course_Code</label>
//                                     <p style={styles.infoValue}>{blankEnrollment.Course_Code}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Batch_ID</label>
//                                     <p style={styles.infoValue}>{blankEnrollment.Batch_ID}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Date</label>
//                                     <p style={styles.infoValue}>{blankEnrollment.Date}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {selected === 'payment' && (
//                         <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
//                             <h2 style={styles.sectionTitle}>Payment</h2>
//                             <div style={styles.infoGrid}>
//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Payment_ID</label>
//                                     <p style={styles.infoValue}>{blankPayment.Payment_ID}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Student_ID</label>
//                                     <p style={styles.infoValue}>{blankPayment.Student_ID}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Course_Code</label>
//                                     <p style={styles.infoValue}>{blankPayment.Course_Code}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Batch_ID</label>
//                                     <p style={styles.infoValue}>{blankPayment.Batch_ID}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Amount_Paid</label>
//                                     <p style={styles.infoValue}>{blankPayment.Amount_Paid}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Mode_of_Payment</label>
//                                     <p style={styles.infoValue}>{blankPayment.Mode_of_Payment}</p>
//                                 </div>

//                                 <div style={styles.infoItem}>
//                                     <label style={styles.infoLabel}>Receipt_Number</label>
//                                     <p style={styles.infoValue}>{blankPayment.Receipt_Number}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     <div style={styles.profileSection}>
//                         <h2 style={styles.sectionTitle}>Your Profile</h2>

//                         <div style={styles.infoGrid}>
//                             <div style={styles.infoItem}>
//                                 <label style={styles.infoLabel}>Student ID</label>
//                                 <p style={styles.infoValue}>{user.id}</p>
//                             </div>

//                             <div style={styles.infoItem}>
//                                 <label style={styles.infoLabel}>Full Name</label>
//                                 <p style={styles.infoValue}>{user.name}</p>
//                             </div>

//                             <div style={styles.infoItem}>
//                                 <label style={styles.infoLabel}>Email</label>
//                                 <p style={styles.infoValue}>{user.email}</p>
//                             </div>

//                             <div style={styles.infoItem}>
//                                 <label style={styles.infoLabel}>Roll Number</label>
//                                 <p style={styles.infoValue}>{user.rollNumber}</p>
//                             </div>

//                             <div style={styles.infoItem}>
//                                 <label style={styles.infoLabel}>Department</label>
//                                 <p style={styles.infoValue}>{user.department}</p>
//                             </div>

//                             <div style={styles.infoItem}>
//                                 <label style={styles.infoLabel}>Course</label>
//                                 <p style={styles.infoValue}>{user.course}</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* <div style={styles.actionsSection}>
//                         <h2 style={styles.sectionTitle}>Quick Actions</h2>
//                         <div style={styles.actionButtons}>
//                             <button style={styles.actionBtn}>View Courses</button>
//                             <button style={styles.actionBtn}>Attendance</button>
//                             <button style={styles.actionBtn}>Submit Assignment</button>
//                             <button style={styles.actionBtn}>View Grades</button>
//                         </div>
//                     </div> */}

//                     {/* <div style={styles.statsSection}>
//                         <h2 style={styles.sectionTitle}>Academic Status</h2>
//                         <div style={styles.statsGrid}>
//                             <div style={styles.statCard}>
//                                 <p style={styles.statLabel}>Courses Enrolled</p>
//                                 <p style={styles.statValue}>5</p>
//                             </div>
//                             <div style={styles.statCard}>
//                                 <p style={styles.statLabel}>Attendance</p>
//                                 <p style={styles.statValue}>85%</p>
//                             </div>
//                             <div style={styles.statCard}>
//                                 <p style={styles.statLabel}>Assignments</p>
//                                 <p style={styles.statValue}>12/15</p>
//                             </div>
//                         </div>
//                     </div> */}
//                 </div>
//             </main>
//         </div>
//     )
// }

// const styles = {
//     container: {
//         display: 'flex',
//         gap: '1.5rem',
//         padding: '2rem',
//         background: '#f5f5f5',
//         minHeight: '80vh',
//         alignItems: 'flex-start'
//     },
//     sidebar: {
//         width: 220,
//         minWidth: 180,
//         background: '#fff',
//         borderRadius: 8,
//         padding: '1rem',
//         boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//         height: 'fit-content'
//     },
//     sidebarHeader: {
//         borderBottom: '1px solid #eee',
//         paddingBottom: '0.5rem',
//         marginBottom: '0.75rem'
//     },
//     nav: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '0.5rem'
//     },
//     sidebarItem: {
//         textAlign: 'left',
//         padding: '0.6rem 0.75rem',
//         background: 'transparent',
//         border: 'none',
//         borderRadius: 6,
//         cursor: 'pointer',
//         fontSize: '0.95rem',
//         color: '#333'
//     },
//     sidebarItemActive: {
//         background: 'linear-gradient(90deg, #f093fb 0%, #f5576c 100%)',
//         color: '#fff',
//         boxShadow: '0 2px 6px rgba(245,87,108,0.16)'
//     },
//     mainCard: {
//         flex: 1,
//         maxWidth: 'calc(100% - 260px)'
//     },
//     card: {
//         background: '#fff',
//         padding: '2rem',
//         borderRadius: 8,
//         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//         width: '100%'
//     },
//     profileSection: {
//         marginBottom: '2rem'
//     },
//     sectionTitle: {
//         fontSize: '1.3rem',
//         color: '#333',
//         marginBottom: '1rem',
//         borderBottom: '2px solid #f5576c',
//         paddingBottom: '0.5rem'
//     },
//     infoGrid: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//         gap: '1.5rem'
//     },
//     infoItem: {
//         padding: '1rem',
//         background: '#f9f9f9',
//         borderRadius: 4,
//         borderLeft: '4px solid #f5576c'
//     },
//     infoLabel: {
//         fontSize: '0.85rem',
//         color: '#666',
//         fontWeight: 500,
//         textTransform: 'uppercase',
//         letterSpacing: '0.5px'
//     },
//     infoValue: {
//         fontSize: '1rem',
//         color: '#333',
//         marginTop: '0.5rem',
//         fontWeight: 500
//     },
//     actionsSection: {
//         marginTop: '2rem',
//         paddingTop: '2rem',
//         borderTop: '1px solid #eee'
//     },
//     actionButtons: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
//         gap: '1rem'
//     },
//     actionBtn: {
//         padding: '0.75rem 1rem',
//         background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
//         color: '#fff',
//         border: 'none',
//         borderRadius: 4,
//         cursor: 'pointer',
//         fontSize: '0.9rem',
//         fontWeight: 500,
//         transition: 'transform 0.2s'
//     },
//     statsSection: {
//         marginTop: '2rem',
//         paddingTop: '2rem',
//         borderTop: '1px solid #eee'
//     },
//     statsGrid: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//         gap: '1.5rem'
//     },
//     statCard: {
//         padding: '1.5rem',
//         background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
//         color: '#fff',
//         borderRadius: 8,
//         textAlign: 'center'
//     },
//     statLabel: {
//         fontSize: '0.85rem',
//         margin: 0,
//         opacity: 0.9
//     },
//     statValue: {
//         fontSize: '2rem',
//         fontWeight: 700,
//         margin: '0.5rem 0 0 0'
//     }
// }










import React, { useState } from 'react'

export default function StudentDashboard({ user }) {
    const [selected, setSelected] = useState('result')

    const options = [
        { id: 'profile', label: 'Profile' },
        { id: 'result', label: 'Result' },
        { id: 'exam_schedule', label: 'Exam Schedule' },
        { id: 'study_material', label: 'Study Material' },
        { id: 'attendance', label: 'Attendance' },
        { id: 'enrollment', label: 'Enrollment' },
        { id: 'payment', label: 'Payment' }
    ]

    const blankResult = {
        examId: '',
        resultId: '',
        studentId: '',
        marksObtained: '',
        remarks: ''
    }

    const blankExam = {
        Exam_ID: '',
        Course_Code: '',
        Batch_ID: '',
        Exam_Date: '',
        Exam_Type: '',
        Total_Marks: ''
    }

    const blankStudyMaterial = {
        Course_Code: '',
        Batch_ID: '',
        Faculty_ID: '',
        Title: '',
        Description: '',
        File: '',
        Upload_Date: ''
    }

    const blankAttendance = {
        Student_ID: '',
        Batch_ID: '',
        Date: '',
        Status: '',
        Remarks: ''
    }

    const blankEnrollment = {
        Student_ID: '',
        Course_Code: '',
        Batch_ID: '',
        Date: ''
    }

    const blankPayment = {
        Payment_ID: '',
        Student_ID: '',
        Course_Code: '',
        Batch_ID: '',
        Amount_Paid: '',
        Mode_of_Payment: '',
        Receipt_Number: ''
    }

    if (!user) {
        return (
            <div style={styles.container}>
                <style>{keyframes}</style>
                <div style={styles.card}>
                    <h2 style={styles.landingTitle}>Shape Your Future With Gurukul IAS Academy</h2>
                    <p>Your trusted partner for UPSC, MPSC & Defence exam preparation.</p>
                    <p>At Gurukul IAS Academy, we provide structured learning, expert mentorship, and a disciplined approach to help aspirants reach their career goals.</p>
                    
                    <h3>We focus on:</h3>
                    <ul>
                        <li>Conceptual clarity</li>
                        <li>Strategic study planning</li>
                        <li>Consistent practice</li>
                        <li>Individual progress tracking</li>
                    </ul>
                    
                    <p>Our mission is to help every aspirant unlock their full potential and serve the nation with pride.</p>

                    

                    <div style={styles.aboutBox}>
                        <h3 style={{ marginTop: 0 }}>ℹ About Us</h3>
                        <p>Gurukul IAS Academy is a leading coaching institute dedicated to preparing students for UPSC, MPSC, Banking, SSC, Defence, and other competitive exams.</p>
                        <h4>Our teaching approach includes:</h4>
                        <ul>
                            <li>Classroom lectures & digital resources</li>
                            <li>Topic-wise test series and doubt-solving sessions</li>
                            <li>Performance tracking and improvement mentoring</li>
                            <li>Personality development & interview preparation</li>
                        </ul>
                    </div>

                    <div style={styles.comingSoonBox}>
                        <h3 style={{ marginTop: 0 }}>🚀 Coming Soon</h3>
                        <h4>Workshops</h4>
                        <p>Attend workshops on answer-writing, CSAT mastery, interview preparation, personality development, and time management.</p>
                        <h4>Video Courses</h4>
                        <p>Access topic-wise recorded lectures, revision modules and guidance videos — anytime, anywhere.</p>
                    </div>

                    <div style={styles.achievementsBox}>
                        <h3 style={{ marginTop: 0 }}>Achievements / Stats</h3>
                        <ul>
                            <li>98% students satisfied with our teaching approach</li>
                            <li>750+ students trained through online & offline batches</li>
                            <li>20+ expert subject mentors</li>
                        </ul>
                    </div>

                    <div style={styles.contactBox}>
                        <h3 style={{ marginTop: 0 }}>📍 Contact Us</h3>
                        <p>We are here to assist you with admissions, demo classes, course details, and exam information.</p>
                        <p><strong>📍 Address:</strong> Gurukul IAS Academy, Jhansi Rani Square, Nagpur, Maharashtra</p>
                        <p><strong>📞 Phone:</strong> +91 98765 43210</p>
                        <p><strong>✉ Email:</strong> info@gurukuliasacademy.com</p>
                        <p><strong>🕒 Timings:</strong> Mon–Sat, 9:00 AM – 7:00 PM</p>
                    </div>

                    <div style={styles.supportBox}>
                        <h3 style={{ marginTop: 0 }}>☎ Need Help? (Support Box)</h3>
                        <h4>How Can We Help You?</h4>
                        <p>Get personalized guidance for UPSC, MPSC, SSC, Banking and Defence exams from experienced faculties.</p>
                        <p><strong>📞 Contact: +91 98765 43210</strong></p>
                    </div>

                    <div style={styles.footer}>
                        <p>© 2025 Gurukul IAS Academy. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={styles.container}>
            <style>{keyframes}</style>
            <aside style={styles.sidebar}>
                <div style={styles.sidebarHeader}>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>Student Menu</h3>
                </div>

                <nav style={styles.nav}>
                    {options.map(opt => (
                        <button
                            key={opt.id}
                            onClick={() => setSelected(opt.id)}
                            style={{
                                ...styles.sidebarItem,
                                ...(selected === opt.id ? styles.sidebarItemActive : {})
                            }}
                            onMouseEnter={(e) => !selected.includes(opt.id) && Object.assign(e.target.style, styles.sidebarItemHover)}
                            onMouseLeave={(e) => !selected.includes(opt.id) && Object.assign(e.target.style, { background: 'transparent', transform: 'translateX(0)' })}
                        >
                            {opt.label}
                        </button>
                    ))}
                </nav>
            </aside>

            <main style={styles.mainCard}>
                <div style={styles.card}>
                    <h1 style={styles.dashboardTitle}>Student Dashboard</h1>

                    <p style={styles.selectedLabel}>
                        Selected: <strong style={{ color: '#f5576c' }}>{options.find(o => o.id === selected)?.label}</strong>
                    </p>

                    {selected === 'result' && (
                        <div style={styles.contentSection}>
                            <h2 style={styles.sectionTitle}>Result Details</h2>
                            <div style={styles.infoGrid}>
                                {Object.entries(blankResult).map((key) => (
                                    <div key={key[0]} style={styles.infoItem}>
                                        <label style={styles.infoLabel}>{key[0].replace(/([A-Z])/g, ' $1')}</label>
                                        <p style={styles.infoValue}>{blankResult[key[0]]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selected === 'exam_schedule' && (
                        <div style={styles.contentSection}>
                            <h2 style={styles.sectionTitle}>Exam Schedule</h2>
                            <div style={styles.infoGrid}>
                                {Object.entries(blankExam).map((key) => (
                                    <div key={key[0]} style={styles.infoItem}>
                                        <label style={styles.infoLabel}>{key[0].replace(/_/g, ' ')}</label>
                                        <p style={styles.infoValue}>{blankExam[key[0]]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selected === 'study_material' && (
                        <div style={styles.contentSection}>
                            <h2 style={styles.sectionTitle}>Study Material</h2>
                            <div style={styles.infoGrid}>
                                {Object.entries(blankStudyMaterial).map((key) => (
                                    <div key={key[0]} style={styles.infoItem}>
                                        <label style={styles.infoLabel}>{key[0].replace(/_/g, ' ')}</label>
                                        <p style={styles.infoValue}>{blankStudyMaterial[key[0]]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selected === 'attendance' && (
                        <div style={styles.contentSection}>
                            <h2 style={styles.sectionTitle}>Attendance</h2>
                            <div style={styles.infoGrid}>
                                {Object.entries(blankAttendance).map((key) => (
                                    <div key={key[0]} style={styles.infoItem}>
                                        <label style={styles.infoLabel}>{key[0].replace(/_/g, ' ')}</label>
                                        <p style={styles.infoValue}>{blankAttendance[key[0]]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selected === 'enrollment' && (
                        <div style={styles.contentSection}>
                            <h2 style={styles.sectionTitle}>Enrollment</h2>
                            <div style={styles.infoGrid}>
                                {Object.entries(blankEnrollment).map((key) => (
                                    <div key={key[0]} style={styles.infoItem}>
                                        <label style={styles.infoLabel}>{key[0].replace(/_/g, ' ')}</label>
                                        <p style={styles.infoValue}>{blankEnrollment[key[0]]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selected === 'payment' && (
                        <div style={styles.contentSection}>
                            <h2 style={styles.sectionTitle}>Payment</h2>
                            <div style={styles.infoGrid}>
                                {Object.entries(blankPayment).map((key) => (
                                    <div key={key[0]} style={styles.infoItem}>
                                        <label style={styles.infoLabel}>{key[0].replace(/_/g, ' ')}</label>
                                        <p style={styles.infoValue}>{blankPayment[key[0]]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div style={styles.profileSection}>
                        <h2 style={styles.sectionTitle}>Your Profile</h2>

                        <div style={styles.infoGrid}>
                            <div style={styles.infoItem}>
                                <label style={styles.infoLabel}>Student ID</label>
                                <p style={styles.infoValue}>{user.id}</p>
                            </div>

                            <div style={styles.infoItem}>
                                <label style={styles.infoLabel}>Full Name</label>
                                <p style={styles.infoValue}>{user.name}</p>
                            </div>

                            <div style={styles.infoItem}>
                                <label style={styles.infoLabel}>Email</label>
                                <p style={styles.infoValue}>{user.email}</p>
                            </div>

                            <div style={styles.infoItem}>
                                <label style={styles.infoLabel}>Roll Number</label>
                                <p style={styles.infoValue}>{user.rollNumber}</p>
                            </div>

                            <div style={styles.infoItem}>
                                <label style={styles.infoLabel}>Department</label>
                                <p style={styles.infoValue}>{user.department}</p>
                            </div>

                            <div style={styles.infoItem}>
                                <label style={styles.infoLabel}>Course</label>
                                <p style={styles.infoValue}>{user.course}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

const keyframes = `
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes pulse {
        0%, 100% {
            box-shadow: 0 0 0 0 rgba(245, 87, 108, 0.7);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(245, 87, 108, 0);
        }
    }

    @keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }
        100% {
            background-position: 1000px 0;
        }
    }
`

const styles = {
    container: {
        display: 'flex',
        gap: '2rem',
        padding: '2rem',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: '100vh',
        alignItems: 'flex-start',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    sidebar: {
        width: 240,
        minWidth: 200,
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        borderRadius: 12,
        padding: '1.5rem',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        height: 'fit-content',
        animation: 'slideInLeft 0.6s ease-out',
        position: 'sticky',
        top: '2rem'
    },
    sidebarHeader: {
        borderBottom: '2px solid #f5576c',
        paddingBottom: '1rem',
        marginBottom: '1.5rem',
        background: 'linear-gradient(90deg, #f093fb 0%, #f5576c 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
    },
    sidebarItem: {
        textAlign: 'left',
        padding: '0.75rem 1rem',
        background: 'transparent',
        border: '2px solid transparent',
        borderRadius: 8,
        cursor: 'pointer',
        fontSize: '0.95rem',
        color: '#555',
        fontWeight: 500,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative'
    },
    sidebarItemHover: {
        background: 'rgba(245, 87, 108, 0.1)',
        transform: 'translateX(8px)',
        borderLeft: '3px solid #f5576c'
    },
    sidebarItemActive: {
        background: 'linear-gradient(90deg, #f093fb 0%, #f5576c 100%)',
        color: '#fff',
        boxShadow: '0 4px 12px rgba(245, 87, 108, 0.4)',
        transform: 'translateX(4px)',
        animation: 'pulse 2s infinite'
    },
    mainCard: {
        flex: 1,
        animation: 'slideInRight 0.6s ease-out'
    },
    card: {
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        padding: '2.5rem',
        borderRadius: 12,
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
        width: '100%',
        animation: 'fadeIn 0.8s ease-out'
    },
    dashboardTitle: {
        fontSize: '2rem',
        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '0.5rem',
        fontWeight: 700
    },
    selectedLabel: {
        color: '#666',
        marginTop: '1rem',
        marginBottom: '2rem',
        fontSize: '1rem',
        padding: '0.75rem 1rem',
        background: 'linear-gradient(90deg, rgba(240, 147, 251, 0.1) 0%, rgba(245, 87, 108, 0.1) 100%)',
        borderRadius: 8,
        borderLeft: '4px solid #f5576c',
        animation: 'slideInLeft 0.4s ease-out'
    },
    contentSection: {
        marginTop: '1.5rem',
        marginBottom: '2.5rem',
        animation: 'fadeIn 0.6s ease-out'
    },
    profileSection: {
        marginTop: '2.5rem',
        paddingTop: '2rem',
        borderTop: '2px solid rgba(245, 87, 108, 0.2)',
        animation: 'fadeIn 0.8s ease-out'
    },
    sectionTitle: {
        fontSize: '1.4rem',
        color: '#333',
        marginBottom: '1.5rem',
        borderBottom: '3px solid #f5576c',
        paddingBottom: '0.75rem',
        position: 'relative',
        fontWeight: 600,
        display: 'inline-block'
    },
    infoGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem'
    },
    infoItem: {
        padding: '1.25rem',
        background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
        borderRadius: 10,
        borderLeft: '5px solid #f5576c',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
    },
    infoItemHover: {
        transform: 'translateY(-8px)',
        boxShadow: '0 8px 24px rgba(245, 87, 108, 0.2)',
        background: 'linear-gradient(135deg, #f5f7ff 0%, #fff1f5 100%)'
    },
    infoLabel: {
        fontSize: '0.8rem',
        color: '#888',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        display: 'block'
    },
    infoValue: {
        fontSize: '1.1rem',
        color: '#222',
        marginTop: '0.75rem',
        fontWeight: 600,
        transition: 'color 0.3s ease'
    },
    supportBox: {
        marginTop: '2rem',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%)',
        borderRadius: 10,
        borderLeft: '5px solid #3498db',
        boxShadow: '0 4px 12px rgba(52, 152, 219, 0.15)',
        transition: 'all 0.3s ease',
        animation: 'slideInLeft 0.6s ease-out'
    },
    aboutBox: {
        marginTop: '2rem',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%)',
        borderRadius: 10,
        borderLeft: '5px solid #9b59b6',
        boxShadow: '0 4px 12px rgba(155, 89, 182, 0.15)',
        transition: 'all 0.3s ease'
    },
    comingSoonBox: {
        marginTop: '2rem',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, #fff5e6 0%, #ffe6cc 100%)',
        borderRadius: 10,
        borderLeft: '5px solid #e67e22',
        boxShadow: '0 4px 12px rgba(230, 126, 34, 0.15)',
        transition: 'all 0.3s ease'
    },
    achievementsBox: {
        marginTop: '2rem',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
        borderRadius: 10,
        borderLeft: '5px solid #27ae60',
        boxShadow: '0 4px 12px rgba(39, 174, 96, 0.15)',
        transition: 'all 0.3s ease'
    },
    contactBox: {
        marginTop: '2rem',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)',
        borderRadius: 10,
        borderLeft: '5px solid #e91e63',
        boxShadow: '0 4px 12px rgba(233, 30, 99, 0.15)',
        transition: 'all 0.3s ease'
    },
    footer: {
        marginTop: '2rem',
        paddingTop: '1.5rem',
        borderTop: '2px solid rgba(200, 200, 200, 0.3)',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#888',
        fontWeight: 500
    },
    landingTitle: {
        fontSize: '2.2rem',
        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '1rem',
        fontWeight: 700
    }
}
