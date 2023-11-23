import bcrypt from 'bcrypt';

const hashPassword = async (pass: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pass, salt);

  return hash;
};

export default hashPassword;
