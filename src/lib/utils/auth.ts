import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
const SECRET = process.env.JWT_SECRET!;


export async function hashPassword(password:string){
  return await  bcrypt.hash(password,10)
}

export async function comparePassword(password: string, hashedPassword: string){
  return await bcrypt.compare(password, hashedPassword);
};

export function createToken(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}
