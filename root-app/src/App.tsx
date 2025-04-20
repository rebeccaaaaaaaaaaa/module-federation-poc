import Header from "header_app/Header";
import Login from "login_app/Login";
export default function App() {
  if (!Header) return <div>Header não carregado</div>;
  if (!Login) return <div>Login não carregado</div>;

  return (
    <div>
     <Header />
     <Login />
    </div>
  );
}
