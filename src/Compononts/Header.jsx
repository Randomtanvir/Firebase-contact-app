import logoImg from "../../public/logos_firebase.svg";

const Header = () => {
  return (
    <div className="my-4 flex h-[60px] items-center justify-center gap-2 rounded-md bg-white">
      <img src={logoImg} alt="" />
      <h1 className="text-xl font-medium">Firebase Contact App</h1>
    </div>
  );
};

export default Header;
