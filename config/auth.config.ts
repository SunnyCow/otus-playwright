type UserRole = 'regular' | 'admin';

const ROLE_PREFIX: Record<UserRole, string> = {
  regular: 'REGULAR',
  admin: 'REGULAR',
};

interface UserCredentials {
  username: string;
  password: string;
}

function getEnvVal(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const getCredentials = (role: UserRole = 'regular'): UserCredentials => {
  const prefix = ROLE_PREFIX[role];

  return {
    username: getEnvVal(`${prefix}_USER`),
    password: getEnvVal(`${prefix}_PASS`),
  };
};
