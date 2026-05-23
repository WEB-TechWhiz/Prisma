import express from 'express'
import { PrismaClient } from "@prisma/client";
// import MachinesRoutes from "./src/routes/Machines.Routes.js"
// import WorkersRoutes from "./src/routes/workers.Routes.js"

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});



// API INTEGRATIONS
app.post('/factory',async(req , res)=>{
    const {name,location}=req.body;
    try {
        const factory=await prisma.factory.create({
            data:{name,location},
        });
        res.json(factory)
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})











export default app;
