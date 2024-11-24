import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <div className="bg-transparent flex px-10 items-center justify-between">
        <div className="h-20 w-full flex rounded-sm items-center">
            <img src="https://cdn.prod.website-files.com/66d39c6cae70a65d79022708/66e1a22143693d00a2c2316b_logo-icon.svg" alt="Logo" className="h-7 w-7 mr-2 mb-4"/>
            <h1 className="text-white text-2xl">STRAPIFY</h1>
        </div>
        <div className="hover:cursor-pointer">
        <CgMenuGridO  className="text-white text-4xl"/>
        </div>
      </div>
    </>
  )
}

export default Navbar
