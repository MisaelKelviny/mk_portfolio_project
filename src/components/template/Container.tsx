import { ReactNode } from "react";

function Container({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <section className="md:px-20 px-4 text-gray-200 font-instrumentSans">
      <div className="h-full w-full border border-y-transparent border-x-zinc-900">
        {children}
      </div>
    </section>
  );
}

export default Container;
