import Header from "../components/Header";
import "../index.css";
interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col  min-h-screen defcss">
      <Header />

      <div className=" mx-auto py-10 flex-1">{children}</div>
    </div>
  );
};

export default Layout;
