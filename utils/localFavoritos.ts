const toggleFavorite = (id: number) => {
  console.log("toggleFavorite llamado");

  let favoritos: number[] = JSON.parse(
    localStorage.getItem("favoritos") || "[]"
  );

  if (favoritos.includes(id)) {
    favoritos = favoritos.filter((pokemonID) => pokemonID !== id);
  } else {
    favoritos.push(id);
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));
};

const existInFavorites = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  const favoritos: number[] = JSON.parse(
    localStorage.getItem("favoritos") || "[]"
  );

  return favoritos.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favoritos") || "[]");
};

const exportedFunctions = {
  toggleFavorite,
  existInFavorites,
  pokemons,
};

export default exportedFunctions;
