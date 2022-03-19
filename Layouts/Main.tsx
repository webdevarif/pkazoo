type MainLayoutProps = {
    children: React.ReactNode,
  };
  
  export default function MainLayout({ children }: MainLayoutProps) {
    return (
      <div className="layout--main">
        {children}
      </div>
    );
  }