const navItems = ["home", "skills", "projects", "about"];

const NavItems = () => {
  function scrollToSection(event: React.SyntheticEvent) {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const id = target?.hash.replace("#", "");
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <>
      {navItems.map((item) => (
        <li key={item} className="font-secondary sm:text-lg">
          <a
            onClick={scrollToSection}
            className=" capitalize"
            href={`#${item}`}
          >
            {item}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavItems;
