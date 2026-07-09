import { navigation } from "@/config/navigation"
import { Link } from "react-router-dom"

const DesktopNav = () => {
  
  return (
    <div className="flex items-center gap-4 text-md uppercase">
      {navigation.map((link) => (
        <Link
          key={link.id}
          to={`/${link.path}`}
          className="relative block overflow-hidden group"
        >
          <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
            {link.label}
          </span>
          <span className="absolute inset-0 block transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default DesktopNav