const uuid = require('uuid');
const express = require('express');
const jwt = require("jsonwebtoken");
var cors = require('cors')
const onFinished = require('on-finished');
const bodyParser = require('body-parser');
const port = 4000;
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

const TOKEN_KEY = 'Authorization';
const PRIVATE_KEY = 'Denisio';
class Session {
    #sessions = {}

    constructor() {
        try {
            this.#sessions = fs.readFileSync('./sessions.json', 'utf8');
            this.#sessions = JSON.parse(this.#sessions.trim());

            console.log(this.#sessions);
        } catch(e) {
            this.#sessions = {};
        }
    }

    #storeSessions() {
        fs.writeFileSync('./sessions.json', JSON.stringify(this.#sessions), 'utf-8');
    }

    set(key, value) {
        if (!value) {
            value = {};
        }
        this.#sessions[key] = value;
        this.#storeSessions();
    }

    get(key) {
        return this.#sessions[key];
    }

    init(res) {
        const sessionId = uuid.v4();
        this.set(sessionId);

        return sessionId;
    }

    destroy(req, res) {
        const sessionId = req.sessionId;
        delete this.#sessions[sessionId];
        this.#storeSessions();
    }
}

const sessions = new Session();

app.use((req, res, next) => {
    let currentSession = {};
    let sessionId = "";
    let token = req.get(TOKEN_KEY);
    
    try{
        if(token){
            let validatedToken = jwt.verify(token, PRIVATE_KEY);
            sessionId = validatedToken.sessionId;
            if (sessionId) {
                currentSession = sessions.get(sessionId);
                if (!currentSession) {
                    currentSession = {};
                    sessionId = sessions.init(res);
                }
            }
        }
        else {
            sessionId = sessions.init(res);
        }

        req.session = currentSession;
        req.sessionId = sessionId;

        onFinished(req, () => {
            const currentSession = req.session;
            const sessionId = req.sessionId;
            sessions.set(sessionId, currentSession);
        });

        next();
    }
    catch(ex){
        res.send("Jwt token invalid or expired");
    }
});

const users = [
    {
        login: 'Login',
        password: 'Password',
        phone: "1234567",
        name: "Denys",
        surname: "Mytnyk",
        role: "Admin",
        location: "Kyiv"
    },
    {
        login: 'Login1',
        password: 'Password1',
        role: "User"
    }
]

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find((user) => {
        if (user.login == username && user.password == password) {
            return true;
        }
        return false
    });

    if (user) {
        req.session.user = user;
        var token = jwt.sign({sessionId: req.sessionId, role: user.role}, PRIVATE_KEY, {expiresIn: "2h"})
        res.json({ token: token });
    }

    res.status(401).send();
});

app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    users.push({login: username, password: password, role: "User"})
    res.status(201);
});

app.get('/logout', (req, res) => {
    sessions.destroy(req, res);
    res.redirect('/');
});

app.get("/user", (req, res) => {
    const user = req.session.user;
    return res.json({
        email: user.login,
        phone: user.phone,
        name: user.name,
        surname: user.surname,
        role: user.role,
        location: user.location
    });
})

app.get('api/user/:userId', (req, res) => {
    const {userId} = req.params;
    if(req.session.user.role == "Admin" || req.session.user.login == userId){
        return res.json(users.filter(user => user.login == userId))
    }
    else{
        return res.status(403);
    }
})

app.get('/api/users/', (req, res) => {
    if(req.session.user.role == "Admin"){
        return res.json(users);
    }
    else{
        return res.status(403);
    }
})

app.post("/api/users/:userId", (req, res) => {
    const {userId} = req.params;
    const user = req.body;
    if(req.session.user.role == "Admin" || req.session.user.login == userId){
        users = users.filter(u => u.login != userId)
        users.push(user);
    }
    else{
        return res.status(403);
    }
})

app.delete("/api/user/:userId", (req, res) => {
    const {userId} = req.params;
    if(req.session.user.role == "Admin" || req.session.user.login == userId){
        users = users.filter(u => u.login != userId)
    }
    else{
        return res.status(403);
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
