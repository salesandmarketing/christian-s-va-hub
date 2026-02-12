const Footer = () => (
  <footer className="py-10 border-t border-border/50">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-lg font-bold font-heading text-gradient">
          Christian Espinosa
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Christian Espinosa. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
