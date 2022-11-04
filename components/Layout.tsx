import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  footer: any;
  settings: any;
  navigation: any;
}

export const Layout = ({
  navigation,
  settings,
  footer,
  children,
}: LayoutProps) => {
  return (
    <div className="text-slate-800">
      <Header navigation={navigation} settings={settings} />
      <div className="bg-amber-200 h-full w-4/12 fixed top-0 left-0 -z-10"></div>
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
  );
};
