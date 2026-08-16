// app/lib/validation.ts

/**
 * Reusable validation rules for the TES Apparels enquiry form.
 *
 * These rules are used to detect:
 * - Invalid names
 * - Invalid company names
 * - Invalid email addresses
 * - Invalid/fake-looking Indian mobile numbers
 * - Invalid enquiry messages
 *
 * IMPORTANT:
 * This validation detects obviously fake/test phone numbers.
 * It does NOT prove that a number belongs to a real person.
 * True ownership verification requires OTP verification.
 */

/* =========================================================
   KNOWN FAKE / TEST NUMBERS
========================================================= */

const FAKE_PHONE_NUMBERS = new Set([
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
  "0123456789",
  "0987654321",
]);

/* =========================================================
   NAME VALIDATION
========================================================= */

export function validateName(name: string): string | null {
  const value = name.trim();

  if (!value) {
    return "Please enter your name.";
  }

  if (value.length < 3) {
    return "Name must contain at least 3 characters.";
  }

  if (value.length > 80) {
    return "Name is too long.";
  }

  /*
   * Allows:
   * John
   * John Smith
   * John-Smith
   * John O'Connor
   * Raj Kumar
   */
  if (!/^[A-Za-z][A-Za-z .'-]*$/.test(value)) {
    return "Please enter a valid name.";
  }

  return null;
}

/* =========================================================
   COMPANY VALIDATION
========================================================= */

export function validateCompany(company: string): string | null {
  const value = company.trim();

  /*
   * Company name is optional.
   */
  if (!value) {
    return null;
  }

  if (value.length < 2) {
    return "Please enter a valid company name.";
  }

  if (value.length > 150) {
    return "Company name is too long.";
  }

  return null;
}

/* =========================================================
   EMAIL VALIDATION
========================================================= */

export function validateEmail(email: string): string | null {
  const value = email.trim().toLowerCase();

  if (!value) {
    return "Please enter your email address.";
  }

  if (value.length > 254) {
    return "Email address is too long.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Please enter a valid email address.";
  }

  return null;
}

/* =========================================================
   PHONE / MOBILE VALIDATION
========================================================= */

/**
 * Detect obviously fake or test mobile numbers.
 */
export function isFakePhoneNumber(phone: string): boolean {
  /*
   * Remove spaces, +91, brackets, hyphens, etc.
   */
  let digits = phone.replace(/\D/g, "");

  /*
   * Convert Indian +91XXXXXXXXXX / 91XXXXXXXXXX
   * into the normal 10-digit format.
   */
  if (digits.length === 12 && digits.startsWith("91")) {
    digits = digits.substring(2);
  }

  /*
   * A valid Indian mobile number must contain
   * exactly 10 digits.
   */
  if (digits.length !== 10) {
    return true;
  }

  /* -----------------------------------------
     Known fake numbers
  ----------------------------------------- */

  if (FAKE_PHONE_NUMBERS.has(digits)) {
    return true;
  }

  /* -----------------------------------------
     Excessive repetition
     
     Examples:
     9899999999
     9888888888
     9000000000
     
     If one digit occurs 7 or more times,
     treat the number as suspicious.
  ----------------------------------------- */

  const counts: Record<string, number> = {};

  for (const digit of digits) {
    counts[digit] = (counts[digit] || 0) + 1;

    if (counts[digit] >= 7) {
      return true;
    }
  }

  /* -----------------------------------------
     Alternating two-digit pattern

     Examples:
     9898989898
     9090909090
     7878787878
  ----------------------------------------- */

  if (
    digits[0] === digits[2] &&
    digits[2] === digits[4] &&
    digits[4] === digits[6] &&
    digits[6] === digits[8] &&
    digits[1] === digits[3] &&
    digits[3] === digits[5] &&
    digits[5] === digits[7] &&
    digits[7] === digits[9] &&
    digits[0] !== digits[1]
  ) {
    return true;
  }

  /* -----------------------------------------
     Repeated five-digit block

     Examples:
     1234512345
     9876598765
  ----------------------------------------- */

  if (digits.substring(0, 5) === digits.substring(5, 10)) {
    return true;
  }

  /* -----------------------------------------
     Ascending sequence
  ----------------------------------------- */

  let ascending = true;

  for (let i = 1; i < digits.length; i++) {
    const previous = Number(digits[i - 1]);
    const current = Number(digits[i]);

    if (current !== previous + 1) {
      ascending = false;
      break;
    }
  }

  if (ascending) {
    return true;
  }

  /* -----------------------------------------
     Descending sequence
  ----------------------------------------- */

  let descending = true;

  for (let i = 1; i < digits.length; i++) {
    const previous = Number(digits[i - 1]);
    const current = Number(digits[i]);

    if (current !== previous - 1) {
      descending = false;
      break;
    }
  }

  if (descending) {
    return true;
  }

  return false;
}

/**
 * Validate an Indian mobile number.
 */
export function validatePhone(phone: string): string | null {
  const value = phone.trim();

  if (!value) {
    return "Please enter your mobile number.";
  }

  let digits = value.replace(/\D/g, "");

  /*
   * Allow Indian country code:
   *
   * +91 9880038910
   * 91 9880038910
   *
   * Internally convert them to:
   * 9880038910
   */
  if (digits.length === 12 && digits.startsWith("91")) {
    digits = digits.substring(2);
  }

  /*
   * Indian mobile numbers:
   * 10 digits
   * First digit must be 6, 7, 8 or 9
   */
  if (!/^[6-9]\d{9}$/.test(digits)) {
    return "Please enter a valid 10-digit Indian mobile number.";
  }

  /*
   * Reject obvious fake/test patterns.
   */
  if (isFakePhoneNumber(digits)) {
    return "Please enter a valid mobile number.";
  }

  return null;
}

/* =========================================================
   MESSAGE VALIDATION
========================================================= */

export function validateMessage(message: string): string | null {
  const value = message.trim();

  if (!value) {
    return "Please enter your requirement.";
  }

  if (value.length < 5) {
    return "Please provide a little more information about your requirement.";
  }

  if (value.length > 5000) {
    return "Message is too long. Please keep it below 5000 characters.";
  }

  return null;
}
