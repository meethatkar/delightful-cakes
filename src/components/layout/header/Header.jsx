import Container from "@/components/ui/Container";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import HeaderActions from "./HeaderActions";

export default function Header() {
  return (
    <header>
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