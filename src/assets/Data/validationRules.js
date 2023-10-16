export const validationRules = {
  name: [
    {
      validator: (value) => !!value,
      message: "Name is required.",
    },
  ],
  email: [
    {
      validator: (value) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
      message: "Invalid email address.",
    },
    {
      validator: (value) => !!value,
      message: "Email is required.",
    },
  ],
  phoneNumber: [
    {
      validator: (value) => /^07\d{8}$/.test(value),
      message:
        "Invalid phone number. It should consist of 10 digits and start with 07.",
    },
    {
      validator: (value) => !!value,
      message: "Invalid Phone number.",
    },
  ],
  adminPassword: [
    {
      validator: (value) =>
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        ),
      message:
        "Password is invalid. It must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.",
    },
    {
      validator: (value) => !!value,
      message: "Invalid Phone number.",
    },
  ],
};
