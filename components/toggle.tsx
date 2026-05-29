import { useTheme } from "next-themes";
export default function Toggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div>
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark"
          ? "Switch to Light Mode"
          : "Switch to Dark Mode"}
      </button>
    </div>
  );
}
