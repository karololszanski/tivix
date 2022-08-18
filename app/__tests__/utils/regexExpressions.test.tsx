import { dateRegex, phoneRegex, zipRegex } from "utils/regexExpressions";

describe("check regex expressions", () => {
  it("check phone regex (US formats)", () => {
    const validPhones = [
      "123-456-7890",
      "(123) 456-7890",
      "123 456 7890",
      "123.456.7890",
      "+91 (123) 456-7890",
      "1234567890",
    ];
    validPhones.forEach((phone) => {
      expect(phoneRegex.test(phone)).toBe(true);
    });

    const inValidPhones = ["123 456 789", "123456789"];
    inValidPhones.forEach((phone) => {
      expect(phoneRegex.test(phone)).toBe(false);
    });
  });

  it("check date regex (US format)", () => {
    const validDates = ["12/22/2000", "01/01/2011", "12-22-2000"];
    validDates.forEach((date) => {
      expect(dateRegex.test(date)).toBe(true);
    });

    const inValidDates = ["22/12/2000", "01/01/20110", "22-12-2000"];
    inValidDates.forEach((date) => {
      expect(dateRegex.test(date)).toBe(false);
    });
  });

  it("check zip code regex (US format)", () => {
    const validZipCodes = ["12345", "123456789", "12345-6789"];
    validZipCodes.forEach((zipCode) => {
      expect(zipRegex.test(zipCode)).toBe(true);
    });

    const inValidZipCodes = ["1234", "1234-56789", "12345 6789"];
    inValidZipCodes.forEach((zipCode) => {
      expect(zipRegex.test(zipCode)).toBe(false);
    });
  });
});
