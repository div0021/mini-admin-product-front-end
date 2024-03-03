import Sidebar from "./components/SidebarComponents/Sidebar";
import Heading from "./components/Heading";
import FilterSection from "./components/FilterSection";
import ProductTable from "./components/ProductTable";

export default function Home() {
  return (
    <main className="min-w-fit">
      <div className="w-full flex items-center justify-center flex-col">
        <div className="max-w-screen-2xl w-full grid grid-cols-12 bg-neutral-100/50">
          <section className="col-span-0 lg:col-span-3 2xl:col-span-2">
            {/*  Sidebar */}
            <Sidebar />
          </section>

          <section className="col-span-12 lg:col-span-9 2xl:col-span-10">
            <div className="w-full p-2">
              <div className="w-full space-y-1">
                {/* Product heading */}
                <Heading />

                {/* product filters */}
                <FilterSection />

                <ProductTable />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
