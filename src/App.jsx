import React, { useState, useEffect } from "react";

const normalizeText = (text) => {
  return text
    .normalize("NFD") // Descompone caracteres latinos y sus tildes
    .replace(/[\u0300-\u036f]/g, "") // Elimina las marcas de acento
    .toLowerCase(); // Convierte a minúsculas
};

const AutocompleteSelect = ({ options }) => {
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const value = normalizeText(e.target.value);
    setQuery(e.target.value); // Mantiene el valor original del input

    // Filtrar las opciones según la consulta y limitar a las 6 principales
    setFilteredOptions(
      options
        .filter((option) =>
          normalizeText(option.nombre).includes(value)
        )
        .slice(0, 6) // Limitar a las primeras 6 opciones
    );
  };

  const handleOptionClick = (option) => {
    setQuery(option.nombre); // Seleccionar la opción original
    setIsOpen(false); // Cerrar la lista
  };

  return (
    <div className="autocomplete-select">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)} // Abrir la lista al enfocar
        placeholder="Escribe para buscar..."
      />
      {isOpen && filteredOptions.length > 0 && (
        <ul className="options-list">
          {filteredOptions.map((option) => (
            <li
              key={option.id}
              onClick={() => handleOptionClick(option)}
              className="option-item"
            >
              {option.nombre}
            </li>
          ))}
        </ul>
      )}
      {isOpen && filteredOptions.length === 0 && (
        <div className="no-options">No se encontraron opciones</div>
      )}
    </div>
  );
};

export default function App() {
  const [localidades, setLocalidades] = useState([]);

  useEffect(() => {
    const fetchLocalidades = async () => {
      try {
        const response = await fetch(
          "https://apis.datos.gob.ar/georef/api/localidades?provincia=06&campos=id,nombre&max=5000"
        );
        const data = await response.json();
        setLocalidades(data.localidades || []);
      } catch (error) {
        console.error("Error fetching localidades:", error);
      }
    };

    fetchLocalidades();
  }, []);

  return (
    <div className="App">
      <h1>Autocomplete Select</h1>
      {localidades.length > 0 ? (
        <AutocompleteSelect options={localidades} />
      ) : (
        <p>Cargando opciones...</p>
      )}
    </div>
  );
}
