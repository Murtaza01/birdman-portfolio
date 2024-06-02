const navItems = ["Home", "Skills", "Projects", "About"];

const NavItems = () => {
  return (
    <>
      {navItems.map((item) => (
        <li key={item}>
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </>
  );
};

export default NavItems;
