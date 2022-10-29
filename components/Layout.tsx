import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  footer: any;
  settings: any;
  navigation: any;
}

export const Layout = ({ navigation, settings, footer, children }: LayoutProps) => {
  return (
    <div className="text-slate-800">
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
  );
};
