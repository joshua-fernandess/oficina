
import express from 'express';
import connectDB from './config/db.js'
import maintenancesRouter from './routers/maintenanceRouter.js';
import vehiclesRouter from './routers/vehicleRouter.js';
import workshopsRouter from './routers/workshopRouter.js';


connectDB();


const app = express();
app.use(express.json());

app.use('/maintenance', maintenancesRouter);
app.use('/vehicles', vehiclesRouter)
app.use('/workshops', workshopsRouter)

app.listen(3000, () => console.log('Server running on port 3000'));

