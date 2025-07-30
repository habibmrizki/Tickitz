import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const emailPattern = /^[A-Za-z][\w.-]*@\S+\.\S+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*/<>]).{8,}$/;

  const validatePassword = (pwd) => {
    if (pwd.trim() === "") {
      setPasswordErrorMessage("Password harus diisi");
      return false;
    } else if (!passwordPattern.test(pwd)) {
      setPasswordErrorMessage(
        "Password harus minimal 8 karakter, mengandung huruf besar, huruf kecil, angka, dan simbol."
      );
      return false;
    }
    setPasswordErrorMessage("");
    return true;
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail.trim() === "" || !emailPattern.test(newEmail)) {
      setIsEmailInvalid(true);
    } else {
      setIsEmailInvalid(false);
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordInvalid(!validatePassword(newPassword));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const checkSignIn = (event) => {
    event.preventDefault();

    const isEmailInputValid = email.trim() !== "" && emailPattern.test(email);
    const isPasswordInputValid = validatePassword(password);

    setIsEmailInvalid(!isEmailInputValid);
    setIsPasswordInvalid(!isPasswordInputValid);

    if (isEmailInputValid && isPasswordInputValid) {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        // alert("Login berhasil!");
        window.location.href = "/MovieDekstop";
      } else {
        alert("Email atau password salah. Coba lagi ya.");
      }
    }
  };

  return (
    <div className="font-mulish bg-[url('/img/sign-up.svg')] bg-no-repeat bg-cover p-6 min-h-screen flex flex-col items-center justify-center w-full h-full">
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/img/tickitz 1.png"
            alt="Tickitz Logo"
            className="w-[170px] h-[60px] md:w-[190px] md:h-[80px] lg:w-[190px] lg:h-[80px] max-md:w-[120px] max-md:h-[50px]"
          />
        </div>

        {/* Content Box */}
        <div
          className="bg-white p-[35px] px-[75px] max-w-[600px] w-full flex flex-col gap-6 rounded-lg
                    md:max-w-[450px] md:p-[45px] max-md:max-w-[400px] max-md:p-[52px] max-md:px-[21px] max-sm:max-w-[350px]"
        >
          {/* Header Content */}
          <div className="flex flex-col gap-6">
            <div className="font-bold text-xl text-[#121212]">
              Welcome Back👋
            </div>
            <div className="font-medium text-lg text-[#a0a3bd] leading-[21px]">
              Sign in with your data that you entered during your registration
            </div>
          </div>

          <form
            id="form"
            onSubmit={checkSignIn}
            className="flex flex-col gap-6 max-md:gap-[17px]"
          >
            {/* Email Input */}
            <div
              className={`email flex flex-col gap-3 ${
                isEmailInvalid ? "invalid" : ""
              }`}
            >
              <label
                htmlFor="email"
                className="text-base font-bold text-[#a0a3bd]"
              >
                Email
              </label>
              <div className="input-email flex items-center border border-solid border-[#dedede] rounded-lg p-1.5 px-2.5 bg-white">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="flex-1 p-2.5 text-sm bg-transparent border-none outline-none"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <span
                className="error text-red-500 text-sm"
                id="emailError"
                style={{ display: isEmailInvalid ? "block" : "none" }}
              >
                {email.trim() === ""
                  ? "Email harus diisi"
                  : "Format email tidak valid"}
              </span>
            </div>

            {/* Password Input */}
            <div
              className={`password flex flex-col gap-3 ${
                isPasswordInvalid ? "invalid" : ""
              }`}
            >
              <label
                htmlFor="password"
                className="text-base font-bold text-[#a0a3bd]"
              >
                Password
              </label>
              <div className="input-password flex items-center border border-solid border-[#dedede] rounded-lg p-1.5 px-2.5 bg-white">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Enter your Password"
                  id="password"
                  name="password"
                  className="flex-1 p-2.5 text-sm bg-transparent border-none outline-none"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="toggle-password p-1.5 flex items-center justify-center cursor-pointer border-none bg-none"
                >
                  <img
                    src="/img/logo-eye.svg"
                    alt="Toggle Eyes"
                    className="w-5 h-5"
                  />
                </button>
              </div>
              <span
                className="error text-red-500 text-sm"
                id="passwordError"
                style={{ display: isPasswordInvalid ? "block" : "none" }}
              >
                {passwordErrorMessage}
              </span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="custom-btn bg-[#1d4ed8] p-1.5 flex items-center justify-center cursor-pointer h-12 rounded-md text-white transition-all duration-200 w-full hover:opacity-80"
            >
              Login
            </button>

            {/* Forgot Password Link */}
            <a href="#" className="text-right text-[#1d4ed8] no-underline">
              Forgot Password?
            </a>

            {/* Separator */}
            <div className="flex items-center mx-2 w-auto">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-2 text-gray-200">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social Media Buttons */}
            <div className="social-media flex flex-row items-center justify-between gap-10 md:justify-center">
              <button
                type="button"
                className="flex flex-row items-center justify-center gap-6 max-w-[182px] p-5 px-[50px] shadow-md
                             md:p-2.5 md:px-5 max-md:max-w-none max-md:flex-1"
              >
                <img src="/img/google.svg" alt="Google" />
                <div className="max-md:hidden">Google</div>
              </button>
              <button
                type="button"
                className="flex flex-row items-center justify-center gap-6 max-w-[182px] p-5 px-[50px] shadow-md
                             md:p-2.5 md:px-5 max-md:max-w-none max-md:flex-1"
              >
                <img src="/img/facebook.svg" alt="Facebook" />
                <div className="max-md:hidden">Facebook</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
