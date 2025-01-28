import React, { useEffect, useState } from "react";

const App = () => {
  const [bosses, setBosses] = useState([]);
  const [checkedBosses, setCheckedBosses] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Estado para o carregamento

  // Carregar estado inicial do Local Storage ou inicializar com valores padrão
  useEffect(() => {
    fetch("https://dst-boss-api.vercel.app/bosses")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar bosses");
        }
        return response.json();
      })
      .then((data) => {
        setBosses(data.bosses);

        // Tentar carregar o estado salvo do Local Storage
        const savedCheckedState = JSON.parse(
          localStorage.getItem("checkedBosses")
        );

        if (savedCheckedState) {
          // Se houver dados salvos, usar esses dados
          setCheckedBosses(savedCheckedState);
        } else {
          // Caso contrário, inicializar com todos como "não marcados"
          const initialCheckedState = data.bosses.reduce((state, boss) => {
            state[boss] = false;
            return state;
          }, {});
          setCheckedBosses(initialCheckedState);
        }
        setIsLoading(false); // Finaliza o carregamento
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Finaliza o carregamento mesmo com erro
      });
  }, []);

  // Função para alternar o estado do checklist
  const toggleCheck = (boss) => {
    setCheckedBosses((prevState) => {
      const newState = {
        ...prevState,
        [boss]: !prevState[boss], // Inverte o estado do boss atual
      };

      // Salvar o estado atualizado no Local Storage
      localStorage.setItem("checkedBosses", JSON.stringify(newState));

      return newState;
    });
  };

  // Função para obter o caminho da imagem na pasta `public/assets/imgs`
  const getBossImage = (boss) => {
    const sanitizedBossName = boss.replace(/\//g, ""); // Remove as barras "/"
    return `/imgs/${sanitizedBossName}.png`; // Caminho relativo à pasta public
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg mt-10 mb-10 rounded-lg p-8 w-full max-w-md h-[90vh] flex flex-col">
        <h1 className="text-2xl font-bold text-center mb-6">
          Don't Starve Together Bosses
        </h1>

        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
              <p className="mt-2 text-gray-500 text-lg">Carregando...</p>
            </div>
          </div>
        ) : (
          <div className="overflow-y-auto flex-grow">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Checklist de Bosses
            </h2>
            <ul className="list-none">
              {bosses.map((boss, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 mb-2 p-2 border-b border-gray-200"
                >
                  <img
                    src={getBossImage(boss)}
                    alt={boss}
                    className="w-12 h-12 object-contain"
                  />
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`boss-${index}`}
                      checked={checkedBosses[boss] || false}
                      onChange={() => toggleCheck(boss)}
                    />
                    <label
                      htmlFor={`boss-${index}`}
                      className={`${checkedBosses[boss] ? "line-through text-gray-500" : ""
                        }`}
                    >
                      {boss}
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
