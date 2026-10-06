export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 p-6 text-white">
      <h1 className="text-2xl font-bold">
        GymLog
      </h1>

      <nav className="mt-8">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="block rounded-lg bg-gray-800 px-4 py-3"
            >
              Dashboard
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-3 hover:bg-gray-800"
            >
              Alunos
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-3 hover:bg-gray-800"
            >
              Exercícios
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-3 hover:bg-gray-800"
            >
              Treinos
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-3 hover:bg-gray-800"
            >
              Estatísticas
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}