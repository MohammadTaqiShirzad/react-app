import React from "react";

const MainLayout = () => {
  return (
    <div className="w-full min-h-dvh bg-gray-200 px-16">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
