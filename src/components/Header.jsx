import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";

function Header() {
  return (
    <header className="mb-6 bg-white shadow md:mb-12 dark:bg-gray-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <Logo />
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
