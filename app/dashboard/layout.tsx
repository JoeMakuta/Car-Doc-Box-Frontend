import { Logo } from "../../components/logo";
import DashboardMenu from "../../components/dashboard/menu";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=" grid grid-cols-[200px_1fr] grid-rows-[80px_1fr]  ">
      <header className=" border-b-[1px] border-black/20 ">Menu</header>
      <aside className="flex pt-8 gap-12 flex-col items-center border-r-[1px] min-h-screen border-black/20  row-start-1 row-end-3">
        <Logo height={0} width={150} />
        <DashboardMenu />
      </aside>
      <main>{children}</main>
    </section>
  );
};
export default DashboardLayout;
