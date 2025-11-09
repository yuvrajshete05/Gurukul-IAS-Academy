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

//     if (!user) {
//         return (
//             <div style={styles.container}>
//                 <h2>Please log in first</h2>
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

//                     <div style={styles.actionsSection}>
//                         <h2 style={styles.sectionTitle}>Quick Actions</h2>
//                         <div style={styles.actionButtons}>
//                             <button style={styles.actionBtn}>View Courses</button>
//                             <button style={styles.actionBtn}>Attendance</button>
//                             <button style={styles.actionBtn}>Submit Assignment</button>
//                             <button style={styles.actionBtn}>View Grades</button>
//                         </div>
//                     </div>

//                     <div style={styles.statsSection}>
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
//                     </div>
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

    // blank result data as requested
    const blankResult = {
        examId: '',
        resultId: '',
        studentId: '',
        marksObtained: '',
        remarks: ''
    }

    // blank exam schedule data as requested
    const blankExam = {
        Exam_ID: '',
        Course_Code: '',
        Batch_ID: '',
        Exam_Date: '',
        Exam_Type: '',
        Total_Marks: ''
    }

    // blank study material data
    const blankStudyMaterial = {
        Course_Code: '',
        Batch_ID: '',
        Faculty_ID: '',
        Title: '',
        Description: '',
        File: '',
        Upload_Date: ''
    }

    // blank attendance data
    const blankAttendance = {
        Student_ID: '',
        Batch_ID: '',
        Date: '',
        Status: '',
        Remarks: ''
    }

    // blank enrollment data
    const blankEnrollment = {
        Student_ID: '',
        Course_Code: '',
        Batch_ID: '',
        Date: ''
    }

    // blank payment data
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
                <h2>Please</h2>
            </div>
        )
    }

    return (
        <div style={styles.container}>
            <aside style={styles.sidebar}>
                <div style={styles.sidebarHeader}>
                    <h3 style={{ margin: 0 }}>Student Menu</h3>
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
                        >
                            {opt.label}
                        </button>
                    ))}
                </nav>
            </aside>

            <main style={styles.mainCard}>
                <div style={styles.card}>
                    <h1>Student Dashboard</h1>

                    <p style={{ color: '#666', marginTop: 8 }}>
                        Selected: <strong>{options.find(o => o.id === selected)?.label}</strong>
                    </p>

                    {selected === 'result' && (
                        <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                            <h2 style={styles.sectionTitle}>Result Details</h2>
                            <div style={styles.infoGrid}>
                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Exam ID</label>
                                    <p style={styles.infoValue}>{blankResult.examId}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Result ID</label>
                                    <p style={styles.infoValue}>{blankResult.resultId}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Student ID</label>
                                    <p style={styles.infoValue}>{blankResult.studentId}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Marks Obtained</label>
                                    <p style={styles.infoValue}>{blankResult.marksObtained}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Remarks</label>
                                    <p style={styles.infoValue}>{blankResult.remarks}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {selected === 'exam_schedule' && (
                        <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                            <h2 style={styles.sectionTitle}>Exam Schedule</h2>
                            <div style={styles.infoGrid}>
                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Exam_ID</label>
                                    <p style={styles.infoValue}>{blankExam.Exam_ID}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Course_Code</label>
                                    <p style={styles.infoValue}>{blankExam.Course_Code}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Batch_ID</label>
                                    <p style={styles.infoValue}>{blankExam.Batch_ID}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Exam_Date</label>
                                    <p style={styles.infoValue}>{blankExam.Exam_Date}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Exam_Type</label>
                                    <p style={styles.infoValue}>{blankExam.Exam_Type}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Total_Marks</label>
                                    <p style={styles.infoValue}>{blankExam.Total_Marks}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {selected === 'study_material' && (
                        <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                            <h2 style={styles.sectionTitle}>Study Material</h2>
                            <div style={styles.infoGrid}>
                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Course_Code</label>
                                    <p style={styles.infoValue}>{blankStudyMaterial.Course_Code}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Batch_ID</label>
                                    <p style={styles.infoValue}>{blankStudyMaterial.Batch_ID}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Faculty_ID</label>
                                    <p style={styles.infoValue}>{blankStudyMaterial.Faculty_ID}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Title</label>
                                    <p style={styles.infoValue}>{blankStudyMaterial.Title}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Description</label>
                                    <p style={styles.infoValue}>{blankStudyMaterial.Description}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>File</label>
                                    <p style={styles.infoValue}>{blankStudyMaterial.File}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Upload_Date</label>
                                    <p style={styles.infoValue}>{blankStudyMaterial.Upload_Date}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {selected === 'attendance' && (
                        <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                            <h2 style={styles.sectionTitle}>Attendance</h2>
                            <div style={styles.infoGrid}>
                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Student_ID</label>
                                    <p style={styles.infoValue}>{blankAttendance.Student_ID}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Batch_ID</label>
                                    <p style={styles.infoValue}>{blankAttendance.Batch_ID}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Date</label>
                                    <p style={styles.infoValue}>{blankAttendance.Date}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Status</label>
                                    <p style={styles.infoValue}>{blankAttendance.Status}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Remarks</label>
                                    <p style={styles.infoValue}>{blankAttendance.Remarks}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {selected === 'enrollment' && (
                        <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                            <h2 style={styles.sectionTitle}>Enrollment</h2>
                            <div style={styles.infoGrid}>
                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Student_ID</label>
                                    <p style={styles.infoValue}>{blankEnrollment.Student_ID}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Course_Code</label>
                                    <p style={styles.infoValue}>{blankEnrollment.Course_Code}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Batch_ID</label>
                                    <p style={styles.infoValue}>{blankEnrollment.Batch_ID}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Date</label>
                                    <p style={styles.infoValue}>{blankEnrollment.Date}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {selected === 'payment' && (
                        <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                            <h2 style={styles.sectionTitle}>Payment</h2>
                            <div style={styles.infoGrid}>
                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Payment_ID</label>
                                    <p style={styles.infoValue}>{blankPayment.Payment_ID}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Student_ID</label>
                                    <p style={styles.infoValue}>{blankPayment.Student_ID}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Course_Code</label>
                                    <p style={styles.infoValue}>{blankPayment.Course_Code}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Batch_ID</label>
                                    <p style={styles.infoValue}>{blankPayment.Batch_ID}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Amount_Paid</label>
                                    <p style={styles.infoValue}>{blankPayment.Amount_Paid}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Mode_of_Payment</label>
                                    <p style={styles.infoValue}>{blankPayment.Mode_of_Payment}</p>
                                </div>

                                <div style={styles.infoItem}>
                                    <label style={styles.infoLabel}>Receipt_Number</label>
                                    <p style={styles.infoValue}>{blankPayment.Receipt_Number}</p>
                                </div>
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

                    {/* <div style={styles.actionsSection}>
                        <h2 style={styles.sectionTitle}>Quick Actions</h2>
                        <div style={styles.actionButtons}>
                            <button style={styles.actionBtn}>View Courses</button>
                            <button style={styles.actionBtn}>Attendance</button>
                            <button style={styles.actionBtn}>Submit Assignment</button>
                            <button style={styles.actionBtn}>View Grades</button>
                        </div>
                    </div> */}

                    {/* <div style={styles.statsSection}>
                        <h2 style={styles.sectionTitle}>Academic Status</h2>
                        <div style={styles.statsGrid}>
                            <div style={styles.statCard}>
                                <p style={styles.statLabel}>Courses Enrolled</p>
                                <p style={styles.statValue}>5</p>
                            </div>
                            <div style={styles.statCard}>
                                <p style={styles.statLabel}>Attendance</p>
                                <p style={styles.statValue}>85%</p>
                            </div>
                            <div style={styles.statCard}>
                                <p style={styles.statLabel}>Assignments</p>
                                <p style={styles.statValue}>12/15</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </main>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        gap: '1.5rem',
        padding: '2rem',
        background: '#f5f5f5',
        minHeight: '80vh',
        alignItems: 'flex-start'
    },
    sidebar: {
        width: 220,
        minWidth: 180,
        background: '#fff',
        borderRadius: 8,
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        height: 'fit-content'
    },
    sidebarHeader: {
        borderBottom: '1px solid #eee',
        paddingBottom: '0.5rem',
        marginBottom: '0.75rem'
    },
    nav: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    },
    sidebarItem: {
        textAlign: 'left',
        padding: '0.6rem 0.75rem',
        background: 'transparent',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: '0.95rem',
        color: '#333'
    },
    sidebarItemActive: {
        background: 'linear-gradient(90deg, #f093fb 0%, #f5576c 100%)',
        color: '#fff',
        boxShadow: '0 2px 6px rgba(245,87,108,0.16)'
    },
    mainCard: {
        flex: 1,
        maxWidth: 'calc(100% - 260px)'
    },
    card: {
        background: '#fff',
        padding: '2rem',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        width: '100%'
    },
    profileSection: {
        marginBottom: '2rem'
    },
    sectionTitle: {
        fontSize: '1.3rem',
        color: '#333',
        marginBottom: '1rem',
        borderBottom: '2px solid #f5576c',
        paddingBottom: '0.5rem'
    },
    infoGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem'
    },
    infoItem: {
        padding: '1rem',
        background: '#f9f9f9',
        borderRadius: 4,
        borderLeft: '4px solid #f5576c'
    },
    infoLabel: {
        fontSize: '0.85rem',
        color: '#666',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    },
    infoValue: {
        fontSize: '1rem',
        color: '#333',
        marginTop: '0.5rem',
        fontWeight: 500
    },
    actionsSection: {
        marginTop: '2rem',
        paddingTop: '2rem',
        borderTop: '1px solid #eee'
    },
    actionButtons: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '1rem'
    },
    actionBtn: {
        padding: '0.75rem 1rem',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        color: '#fff',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: 500,
        transition: 'transform 0.2s'
    },
    statsSection: {
        marginTop: '2rem',
        paddingTop: '2rem',
        borderTop: '1px solid #eee'
    },
    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem'
    },
    statCard: {
        padding: '1.5rem',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        color: '#fff',
        borderRadius: 8,
        textAlign: 'center'
    },
    statLabel: {
        fontSize: '0.85rem',
        margin: 0,
        opacity: 0.9
    },
    statValue: {
        fontSize: '2rem',
        fontWeight: 700,
        margin: '0.5rem 0 0 0'
    }
}
