import logo from "../../../assets/logo.svg"

export const SidebarLogo = () => {
  return (
    <div className="flex justify-center items-center gap-x-2 ">
        <img src={logo} alt="Logo" />
        <h2 className="text-lg font-bold">E-Admin</h2>
    </div>
  )
}
