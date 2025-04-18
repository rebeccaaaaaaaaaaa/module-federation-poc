import Header from "header_app/Header";

export default function App() {
  console.log("Header remoto:", Header);

  if (!Header) return <div>Header não carregado</div>;

  return <Header />;
}
