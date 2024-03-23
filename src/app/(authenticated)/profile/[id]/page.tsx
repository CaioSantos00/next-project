import { users } from "../../layout";

export default function profile({ params }) {
  const userId = params?.id
  const user = users.find( (userCada) => userCada.id == Number(userId))
  if (!user?.id) {
    return <div>Usuário não existe</div>
  }
    return (
      <main>
        <h1>Página de perfil</h1>
        <h2>{user?.nome}, {user?.idade}</h2>
      </main>
    );
  }

