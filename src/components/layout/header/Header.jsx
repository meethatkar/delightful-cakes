import Container from "@/components/ui/Container";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import HeaderActions from "./HeaderActions";
import StaggeredMenu from "./StaggeredMenu";
import { navigation } from "@/config/navigation";

export default function Header() {
  const menuItems = navigation.map((item) => ({
    label: item.label,
    link: item.path,
    ariaLabel: `Go to ${item.label}`,
  }));

  return (
    <header className="absolute top-0 left-0 z-[100] w-full">
      <div className="md:hidden absolute top-0 left-0 w-full h-20">
        <StaggeredMenu
          isFixed={false}
          items={menuItems}
          displaySocials={false}
          logoUrl={null}
          menuButtonColor="#000"
          openMenuButtonColor="#000"
        />
      </div>

      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <DesktopNav />
          <HeaderActions />
        </div>
      </Container>
    </header>
  );
}