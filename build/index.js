"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./src/routes/routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3026;
const allowedDomains = [
    "https://portfolio-v2-tojo-josephs-projects.vercel.app",
    "https://portfolio-v2-git-main-tojo-josephs-projects.vercel.app",
];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedDomains.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};
app.use((0, cors_1.default)({
    origin: ["https://portfolio-v2-tojo-josephs-projects.vercel.app"],
    methods: ["GET"],
    credentials: true,
}));
app.use(express_1.default.json({ limit: "5mb" }));
app.get("/", (req, res) => {
    res.send("Hello World");
});
mongoose_1.default.connect(process.env.DATABASE_URL || "");
app.use("/api", routes_1.router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
