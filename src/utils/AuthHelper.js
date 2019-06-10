import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export default class AuthHelper {
  static generate(info) {
    const privateKey = process.env.JWT_SECRET || '';
    return jsonwebtoken.sign(info, privateKey, {
      expiresIn: '30d',
    });
  }

  static extract(token) {
    return jsonwebtoken.decode(token);
  }

  static hash(rawText) {
    bcrypt.hash(rawText, 12, (_, hash) => hash);
  }
}
