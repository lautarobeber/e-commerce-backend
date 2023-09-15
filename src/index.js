//arranca la app
import app from './app.js'
import { connectDB } from './db.js';
const PORT = 4000

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});