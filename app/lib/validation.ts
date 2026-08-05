// lib/validation.ts

export const invalidPhoneNumbers = [
  "0000000000",
  "1111111111",
  "2222222222",
  "3333333333",
  "4444444444",
  "5555555555",
  "6666666666",
  "7777777777",
  "8888888888",
  "9999999999",
  "1234567890",
  "9876543210",
];

export const validateName = (name: string) => {
  const regex = /^[A-Za-z ]{3,50}$/;

  if (!name.trim())
    return "Name is required.";

  if (!regex.test(name))
    return "Enter a valid name.";

  return "";
};

export const validateCompany = (company: string) => {
  if (!company.trim())
    return "Company name is required.";

  if (company.trim().length < 2)
    return "Company name is too short.";

  return "";
};

export const validateEmail = (email: string) => {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim())
    return "Email is required.";

  if (!regex.test(email))
    return "Enter a valid email address.";

  return "";
};

export const validatePhone = (phone: string) => {
  const regex = /^[6-9]\d{9}$/;

  if (!phone.trim())
    return "Mobile number is required.";

  if (!regex.test(phone))
    return "Enter a valid Indian mobile number.";

  if (invalidPhoneNumbers.includes(phone))
    return "Please enter a genuine mobile number.";

  return "";
};

export const validateMessage = (message: string) => {
  if (!message.trim())
    return "Message is required.";

  if (message.trim().length < 20)
    return "Message should contain at least 20 characters.";

  return "";
};