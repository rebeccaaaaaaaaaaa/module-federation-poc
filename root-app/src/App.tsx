import Header from "header_app/Header";
import Hero from "hero_app/Hero";
import About from "about_app/About";
export default function App() {
  if (!Header) return <div>Header não carregado</div>;
  if (!Hero) return <div>Hero não carregado</div>;
  if (!About) return <div>About não carregado</div>;

  return (
    <div>
     <Header />
     <Hero />
     <About />
    </div>
  );
}
