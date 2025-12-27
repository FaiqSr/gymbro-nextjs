export const LOGIN_CONFIG = {
  title: "Selamat Datang",
  subtitle: "Masuk ke akun Anda untuk melanjutkan latihan",
  submitText: "Sign In",
  loadingText: "Loading...",
};

export const REGISTER_CONFIG = {
  title: "Daftar Akun",
  subtitle: "Buat akun baru untuk memulai perjalanan fitness Anda",
  submitText: "Daftar Sekarang",
  loadingText: "Processing...",
};

export const FORM_FIELDS = {
  login: [
    {
      id: "usernameOrEmail",
      label: "Username atau Email",
      type: "text",
      placeholder: "Masukkan username atau email",
      required: true,
      delay: 0.4,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Masukkan password",
      required: true,
      delay: 0.45,
      hasToggle: true,
    },
  ],
  register: [
    {
      id: "username",
      label: "Username",
      type: "text",
      placeholder: "Pilih username yang unik",
      required: true,
      delay: 0.35,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Masukkan email Anda",
      required: true,
      delay: 0.4,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Minimal 6 karakter",
      required: true,
      delay: 0.45,
      hasToggle: true,
    },
    {
      id: "confirmPassword",
      label: "Konfirmasi Password",
      type: "password",
      placeholder: "Masukkan ulang password",
      required: true,
      delay: 0.5,
      hasToggle: true,
    },
  ],
};

export const ROUTES = {
  login: "/login",
  register: "/register",
  resetPassword: "/reset",
  dashboard: "/latihan",
};

export const ANIMATION_DELAYS = {
  logo: 0.1,
  formCard: 0.2,
  title: 0.3,
  input: 0.4,
  button: 0.55,
  divider: 0.6,
  signUp: 0.65,
  footer: 0.7,
};
