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
      validator: (value) => !!value,
      message: "Phone number is required.",
    },
  ],
};
