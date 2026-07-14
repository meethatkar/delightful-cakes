import Container from "@/components/ui/Container";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import HeaderActions from "./HeaderActions";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-10 w-full">
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