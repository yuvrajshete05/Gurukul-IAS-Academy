require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const app = express()
const port = process.env.PORT || 4000
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/vaidehi'

app.use(cors())
app.use(express.json())

let mongoConnection = null

// Connect to MongoDB directly
async function connectToMongo() {
  try {
    const client = new MongoClient(mongoUrl)
    await client.connect()
    mongoConnection = client.db('vaidehi')
    console.log(`✓ Connected to MongoDB at ${mongoUrl}`)
    
    // Create collections if they don't exist
    const collections = await mongoConnection.listCollections().toArray()
    const collectionNames = collections.map(c => c.name)

    if (!collectionNames.includes('student')) {
      await mongoConnection.createCollection('student')
      console.log('✓ Created collection: student')
    }

    if (!collectionNames.includes('faculty')) {
      await mongoConnection.createCollection('faculty')
      console.log('✓ Created collection: faculty')
    }
  } catch (err) {
    console.error('✗ MongoDB connection error:', err.message)
    setTimeout(connectToMongo, 5000) // Retry after 5 seconds
  }
}

// Connect on startup
connectToMongo()

// Routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend' })
})

// Faculty login endpoint - fetch faculty by ID
app.post('/api/faculty-login', async (req, res) => {
  try {
    const { facultyId } = req.body
    
    if (!facultyId) {
      return res.status(400).json({ error: 'Faculty ID required' })
    }

    if (!mongoConnection) {
      return res.status(503).json({ error: 'Database not connected' })
    }

    console.log(`Login attempt with Faculty ID: ${facultyId}`)

    const faculty = await mongoConnection.collection('faculty').findOne({ Faculty_ID: facultyId })

    if (!faculty) {
      console.log(`Faculty not found: ${facultyId}`)
      return res.status(401).json({ error: 'Faculty ID not found' })
    }

    console.log(`Login successful for: ${faculty.Full_Name}`)
    res.json({
      success: true,
      faculty: {
        id: faculty.Faculty_ID,
        name: faculty.Full_Name,
        email: faculty.Contact_Details,
        education: faculty.Education,
        specialization: faculty.Specialization,
        category: faculty.Category
      }
    })
  } catch (error) {
    console.error('Error in /api/faculty-login:', error.message)
    res.status(500).json({ error: error.message })
  }
})

// Student login endpoint - fetch student by ID
app.post('/api/student-login', async (req, res) => {
  try {
    const { studentId } = req.body
    
    if (!studentId) {
      return res.status(400).json({ error: 'Student ID required' })
    }

    if (!mongoConnection) {
      return res.status(503).json({ error: 'Database not connected' })
    }

    console.log(`Login attempt with Student ID: ${studentId}`)

    const student = await mongoConnection.collection('student').findOne({ STUDENT_ID: studentId })

    if (!student) {
      console.log(`Student not found: ${studentId}`)
      return res.status(401).json({ error: 'Student ID not found' })
    }

    console.log(`Login successful for: ${student.STUDENT_NAME}`)
    res.json({
      success: true,
      student: {
        id: student.STUDENT_ID,
        name: student.STUDENT_NAME,
        email: student.EMAIL_ID,
        rollNumber: student.ROLL_NUMBER || 'N/A',
        department: student.DEPARTMENT || 'N/A',
        course: student.COURSE || 'N/A'
      }
    })
  } catch (error) {
    console.error('Error in /api/student-login:', error.message)
    res.status(500).json({ error: error.message })
  }
})

app.get('/api/counts', async (req, res) => {
  try {
    if (!mongoConnection) {
      return res.status(503).json({ error: 'Database not connected' })
    }

    const studentCount = await mongoConnection.collection('student').countDocuments()
    const facultyCount = await mongoConnection.collection('faculty').countDocuments()

    res.json({
      student: studentCount,
      faculty: facultyCount,
      total: studentCount + facultyCount
    })
  } catch (error) {
    console.error('Error in /api/counts:', error.message)
    res.status(500).json({ error: error.message })
  }
})

app.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`)
})
