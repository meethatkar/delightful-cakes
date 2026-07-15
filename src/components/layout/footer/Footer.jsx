import Container from "@/components/ui/Container";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-8 bg-surface">
      <Container className="max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-textMuted">
          © {new Date().getFullYear()} Delightful Cakes. All rights reserved.
        </p>
        <p className="text-sm text-textMuted font-medium">
          Made with ♥ for cake lovers.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;