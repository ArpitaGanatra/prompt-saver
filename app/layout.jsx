import Nav from "@/components/Nav";
import "@/styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & share AI prompts",
};

const rootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default rootLayout;
