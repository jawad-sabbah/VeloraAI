import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import sql from './config/db.js';
import userRoute from './routes/userRoute.js';

const app = express();

// CORS
app.use(cors({
  origin: 'http://localhost:5173', // React dev server
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// Body parser
app.use(express.json());

// Routes
app.use('/api/users', userRoute);

app.get('/', (req, res) => res.send('Server is running'));

// Test DB
app.get("/test-db", async (req, res) => {
  try {
    const result = await sql.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

const PORT = process.env.PORT || 3000; // ✅ Backend runs on 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
