const express = require("express");
const app = express();
const path = require("path");
const { json } = require("express");
const port = process.env.PORT || 6386;
const hbs = require("hbs");
require("./db/connect");
const Register = require("./models/register");


const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");



app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path)

app.get("/regis", (req, res) => {
    res.render("regis")
});
app.get("/", (req, res) => {
    res.render("main")
});
app.get("/main.html", (req, res) => {
    res.render("main")
});
app.get("/login.html", (req, res) => {
    res.render("index")
});
app.get("/regis2", (req, res) => {
    res.render("regis2")
});
app.post("/regis2", async (req, res) => {
    try {
        const customer = new Register({
            firstname: req.body.firstName,
            lastname: req.body.secondName,
            phone: req.body.phoneNo,
            email:req.body.email,
            passward:req.body.password,
            gender:req.body.Gender 
        })
        const registered= await customer.save();
        res.status(201).render("main");
    } catch(err) {
        res.status(400).send(err);
    }
});

app.listen(port, () => {
    console.log(`server is started at port no.${port}`);
})