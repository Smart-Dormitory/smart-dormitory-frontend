import logo from "../assets/logo.png";
export default function Header() {
  return (
    <div>
      <header className="bg-zinc-700 w-full h-20 flex items-center justify-around">
        <img src={logo} alt="" className="w-40 h-14 mr-12"/>
        <button className="border-2 text-center rounded-lg text-white py-1 px-3 cursor-pointer">Login</button>
      </header>
    </div>
  );
}
