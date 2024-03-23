import Link from "next/link";
import { users } from "../layout";

export default function listUser() {
      return (
        <main>
          <h1>Lista de usuários</h1>
          <ul>
          {users.map((cada) => {
            if (cada.id) {
           return (
            <Link href={`profile/${cada.id}`} key={cada.id}><li>{cada.nome}</li></Link>
            )   
            }
          })}
          </ul>      
        </main>
      );
    }
  