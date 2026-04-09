import otpGenerator from "otp-generator";

export const generateIdentityCode = () => {
  const code = otpGenerator.generate(10, {
    digits: true,
    lowerCaseAlphabets: true,
    upperCaseAlphabets: true,
    specialChars: false,
  });

  return code;
};

export const generateCode = () => {
  const code = otpGenerator.generate(5, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  return code;
};

export const generateSecretCode = () => {
  const secretCode = otpGenerator.generate(10, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  return secretCode;
};
