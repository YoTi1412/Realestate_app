import bcrypt from "bcrypt";

export const register = async (req, res) =>
{
    const { username, email, password } = req.body;

    // HASH the Password
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);

    // Create a new user and save to DB
};

export const login = (req, res) =>
{
    // db operations
    console.log("login endpoint");
};

export const logout = (req, res) =>
{
    // db operations
    console.log("logout endpoint");
};