import { useState } from "react";

export default function PasswordInput({ value, onChange, placeholder }) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className="relative w-full mb-4">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full py-3 px-4 pr-12 rounded-xl bg-neutral-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
      />

      <span
        onClick={toggleShowPassword}
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-cyan-400 transition text-lg select-none"
        title={isShowPassword ? "Hide password" : "Show password"}
      >
        {isShowPassword ? "🙈" : "👁️"}
      </span>
    </div>
  );
}
