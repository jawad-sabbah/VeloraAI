import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import sql from './config/db.js';
import userRoute from './routes/userRoute.js';


const app = express();




//request body parsing middleware
app.use(cors());
// Parse JSON bodies
app.use(express.json());

//routes
app.use('/api/users', userRoute);

app.get('/', (req, res) => {
    res.send('server is running');
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await sql.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);





