import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) =>
{
    try
    {
        const { username, email, password } = req.body;

        // HASH the Password
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(hashedPassword);

        // Create a new user and save to DB
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        console.log(newUser);

        res.status(201).json({ message: "User created successfully" });
    } catch (err)
    {
        console.log(err);
        res.status(500).json({ message: "Failed to create user!" });
    }
};

export const login = async (req, res) =>
{
    try
    {
        const { username, password } = req.body;

        // CHECK IF THE USER EXISTS

        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) return res.status(400).json({ message: "Invalid Credentials!" });

        // CHECK IF THE PASSWORD IS CORRECT

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid)
            return res.status(400).json({ message: "Invalid Credentials!" });

        // GENERATE COOKIE TOKEN AND SEND TO THE USER

        
    } catch (err)
    {
        console.log(err);
        res.status(500).json({ message: "Failed to login!" });
    }
};

export const logout = (req, res) =>
{
    // db operations
    console.log("logout endpoint");
};