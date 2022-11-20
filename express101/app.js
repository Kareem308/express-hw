"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const users = [
    {
        username: 'saleh',
        password: '123456',
    },
    {
        username: 'ali',
        password: '123',
    },
];
const checkIP = (req, res, next) => {
    if (req.ip == '1.0.0.0') {
        return res.json({
            message: 'Not allowed !',
        });
    }
    else {
        next();
    }
};
app.use((req, res, next) => {
    console.log('Middleware 1');
    next();
}, (req, res, next) => {
    console.log('Middleware 2');
    next();
});
app.use((req, res, next) => {
    console.log('Middleware 3');
    next();
});
app.get('/users', (req, res) => {
    return res.json(users);
});
app.get('/register', checkIP, (req, res) => {
    return res.send('<h1>This is the users endpoint</h1>');
});
app.get('/todos', (req, res, next) => {
    console.log('todos');
});
app.listen(5000);
