const mongoose = require('mongoose')

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/vaidehi'

// Define schemas for student and faculty collections
const studentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    rollNumber: String,
    department: String,
  },
  { timestamps: true }
)

const facultySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    department: String,
    specialization: String,
  },
  { timestamps: true }
)

// Create models
const Student = mongoose.model('student', studentSchema, 'student')
const Faculty = mongoose.model('faculty', facultySchema, 'faculty')

async function connectDB() {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`✓ Connected to MongoDB at ${mongoUrl}`)

    // Create collections if they don't exist
    const db = mongoose.connection.db
    const collections = await db.listCollections().toArray()
    const collectionNames = collections.map(c => c.name)

    if (!collectionNames.includes('student')) {
      await db.createCollection('student')
      console.log('✓ Created collection: student')
    }

    if (!collectionNames.includes('faculty')) {
      await db.createCollection('faculty')
      console.log('✓ Created collection: faculty')
    }

    return mongoose.connection
  } catch (error) {
    console.error('✗ MongoDB connection error:', error.message)
    process.exit(1)
  }
}

module.exports = { connectDB, mongoUrl, Student, Faculty }
