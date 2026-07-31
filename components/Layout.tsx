interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 md:px-12 ${className ?? ""}`}>
      {children}
    </div>
  );
};
