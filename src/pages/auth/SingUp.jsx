import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State untuk checkbox
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  // State untuk error checkbox
  const [isTermsInvalid, setIsTermsInvalid] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const emailPattern = /^[A-Za-z][\w.-]*@\S+\.\S+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*/<>]).{8,}$/;

  const validatePassword = (pwd) => {
    if (pwd.trim() === "") {
      setPasswordErrorMessage("Password harus diisi.");
      return false;
    } else if (!passwordPattern.test(pwd)) {
      setPasswordErrorMessage(
        "Password minimal 8 karakter, mengandung huruf besar, huruf kecil, angka, dan simbol."
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

  const handleTermsChange = (e) => {
    setAgreedToTerms(e.target.checked);
    setIsTermsInvalid(false);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    const isEmailInputValid = email.trim() !== "" && emailPattern.test(email);
    const isPasswordInputValid = validatePassword(password);
    const isTermsChecked = agreedToTerms;

    setIsEmailInvalid(!isEmailInputValid);
    setIsPasswordInvalid(!isPasswordInputValid);
    setIsTermsInvalid(!isTermsChecked);

    // Jika semua validasi berhasil
    if (isEmailInputValid && isPasswordInputValid && isTermsChecked) {
      // Buat objek user
      const user = {
        email: email,
        password: password,
      };

      localStorage.setItem("user", JSON.stringify(user));
      alert("Registrasi berhasil! Silakan login.");
      window.location.href = "/auth/signin";
    } else {
      alert("Email atau password salah. Coba lagi ya.");
    }
  };

  return (
    <section className="bg-[url('/img/sign-up.svg')] bg-no-repeat bg-cover relative flex flex-col items-center justify-center min-h-screen py-6">
      {/* Logo Tickitz */}
      <img
        src="/img/tickitz 1.png"
        alt="Tickitz Logo"
        className="mb-8 w-[170px] h-[60px] md:w-[190px] md:h-[80px] max-md:w-[120px] max-md:h-[50px]"
      />

      <div
        className="bg-white p-[35px] px-[75px] max-w-[600px] w-full flex flex-col gap-[25px] rounded-[8px]
                      md:max-w-[450px] md:p-[45px] max-md:max-w-[400px] max-md:p-[52px] max-md:px-[21px] max-sm:max-w-[350px]"
      >
        {/* Money Transfer Order / Progress Steps */}
        <div className="flex flex-row gap-[21px] items-center justify-between max-md:hidden">
          <div className="flex flex-col gap-[8px] items-center">
            <div className="bg-[#1d4ed8] w-[47px] h-[47px] rounded-full flex items-center justify-center text-white">
              1
            </div>
            <div className="text-[14px] font-normal text-[#4e4b66]">Form</div>
          </div>
          <div className="w-[85px] border-t border-dashed border-[#a0a3bd]"></div>
          <div className="flex flex-col gap-[8px] items-center">
            <div className="bg-[#A0A3BD] w-[47px] h-[47px] rounded-full flex items-center justify-center text-white">
              2
            </div>
            <div className="text-[14px] font-normal text-[#A0A3BD]">
              Payment
            </div>
          </div>
          <div className="w-[85px] border-t border-dashed border-[#a0a3bd]"></div>
          <div className="flex flex-col gap-[8px] items-center">
            <div className="bg-[#A0A3BD] w-[47px] h-[47px] rounded-full flex items-center justify-center text-white">
              3
            </div>
            <div className="text-[14px] font-normal text-[#A0A3BD]">Finish</div>
          </div>
        </div>

        <form
          onSubmit={handleSignupSubmit}
          className="flex flex-col gap-[25px] max-md:gap-[17px]"
        >
          {/* Email Input */}
          <div className="flex flex-col gap-[12px]">
            <label
              htmlFor="email"
              className="text-[16px] font-bold text-[#a0a3bd]"
            >
              Email
            </label>
            <div className="flex items-center px-[5px] py-[10px] bg-white border border-solid border-[#dedede] rounded-[8px]">
              <input
                type="text"
                id="email"
                placeholder="Enter Your Email"
                className="p-[10px] text-[14px] w-full outline-none bg-transparent"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <span
              className="error text-red-500 text-sm"
              style={{ display: isEmailInvalid ? "block" : "none" }}
            >
              {email.trim() === ""
                ? "Email harus diisi"
                : "Format email tidak valid"}
            </span>
          </div>
          {/* Password Input */}
          <div className="flex flex-col gap-[12px]">
            <label
              htmlFor="pwd"
              className="text-[16px] font-bold text-[#a0a3bd]"
            >
              Password
            </label>
            <div className="flex items-center px-[5px] py-[10px] bg-white border border-solid border-[#dedede] rounded-[8px]">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="pwd"
                placeholder="Enter Your Password"
                className="p-[10px] text-[14px] w-full outline-none bg-transparent"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="border-none bg-none p-[5px] items-center justify-center cursor-pointer flex"
              >
                <img
                  src="/img/logo-eye.svg"
                  alt="Toggle Password"
                  className="w-[20px] h-[20px]"
                />
              </button>
            </div>
            <span
              className="error text-red-500 text-sm"
              style={{ display: isPasswordInvalid ? "block" : "none" }}
            >
              {passwordErrorMessage}
            </span>
          </div>
          {/* Terms & Conditions Checkbox */}
          <div>
            <input
              type="checkbox"
              id="check"
              checked={agreedToTerms}
              onChange={handleTermsChange}
            />
            <label
              htmlFor="check"
              className="ml-2 text-sm font-normal text-[#4e4b66]"
            >
              {" "}
              I agree to terms & conditions
            </label>
            <span
              className="error text-red-500 text-sm block"
              style={{ display: isTermsInvalid ? "block" : "none" }}
            >
              Anda harus menyetujui syarat & ketentuan.
            </span>
          </div>
          {/* Sign Up Button */}
          <button
            type="submit"
            className="bg-[#1d4ed8] w-full p-[5px] flex items-center justify-center cursor-pointer rounded-[6px] text-white transition-all duration-200 ease-linear hover:opacity-80"
          >
            Sign Up
          </button>
          {/* Already have an account? */}
          <span className="text-center text-[#4e4b66] text-sm">
            {" "}
            Already have an account?{" "}
            <a
              href="/auth/signin"
              className="text-[#1d4ed8] no-underline hover:underline"
            >
              Login
            </a>
          </span>
          {/* Separator */}
          <div className="flex items-center mx-0 my-[8px] w-auto text-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-[8px] py-0 text-[#e5e7eb]">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          {/* Social Media Buttons */}
          <div className="flex flex-row items-center justify-center md:justify-between gap-10 ">
            <button
              type="button"
              className="flex flex-row items-center justify-center px-5 py-2.5 gap-6 max-w-[182px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]"
            >
              <img src="/img/google.svg" alt="Google Logo" />
              <div className="max-md:hidden">Google</div>
            </button>
            <button
              type="button"
              className="flex flex-row items-center justify-center px-5 py-2.5 gap-6 max-w-[182px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]"
            >
              <img src="/img/facebook.svg" alt="Facebook Logo" />
              <div className="max-md:hidden">Facebook</div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
