# User Register Form - React Hook Form + Zod

This project demonstrates how to build a **User Registration Form** using:

- [React Hook Form](https://react-hook-form.com/) for form state management
- [Zod](https://zod.dev) for schema-based validation

The form includes multiple field types, schema validation, dynamic fields, error handling, and success state handling.

---

## 🚀 Features

1. **Form Fields:**

   - First Name
   - Last Name
   - Email
   - Contact Number
   - Role (Select dropdown)
   - Skills (Dynamic field array with at least 1 field by default)
   - Message (Optional textarea)

2. **Validation Rules:**

   - All fields are **required** except `Message`.
   - Fields cannot be only whitespace.
   - Contact number must be **10 digits**.
   - Skills must have at least **one entry**.

3. **Error Handling:**

   - Dynamic error messages for invalid inputs.
   - Validation powered by **Zod schema**.

4. **Dynamic Skills Field:**

   - Add or remove skills dynamically.
   - At least one skill field is required.

5. **On Submit:**

   - Displays submitted data with a success message.
   - Resets form after successful submission.

---

## 🛠️ Technologies Used

- **React** (functional components + hooks)
- **React Hook Form** for form management
- **Zod** for validation
- **TailwindCSS** for styling

---

## 📦 Installation & Setup

1. Clone the repository:

```bash
 git clone <repo-url>
 cd user-register-form
```

2. Install dependencies:

```bash
 npm install react-hook-form zod @hookform/resolvers tailwindcss
```

3. Run the development server:

```bash
 npm run dev
```

4. Open in your browser:

```
 http://localhost:5173
```

---

## 🧩 How It Works

1. **Validation Schema (Zod):**

   ```js
   const schema = z.object({
     firstName: z
       .string()
       .min(1)
       .refine((val) => val.trim().length > 0),
     lastName: z
       .string()
       .min(1)
       .refine((val) => val.trim().length > 0),
     email: z.string().email(),
     contact: z.string().regex(/^\d{10}$/),
     role: z.string().min(1),
     skills: z.array(z.string().min(1)).min(1),
     message: z.string().optional(),
   });
   ```

2. **React Hook Form Integration:**

   - `useForm` handles form state & validation.
   - `useFieldArray` manages dynamic skills fields.

3. **On Submit:**

   - Valid data is stored in state and shown to the user.
   - Form resets after success.

---

## ✅ Example Submission Output

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "contact": "1234567890",
  "role": "Developer",
  "skills": ["React", "Node.js"],
  "message": "Excited to join!"
}
```

---

## 📚 Resources

- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Docs](https://zod.dev)
- [FreeCodeCamp Guide](https://www.freecodecamp.org/news/react-form-validation-zod-react-hook-form/)

---
