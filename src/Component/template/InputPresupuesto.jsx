import React, { useState } from 'react';

export default function InputPresupuesto({ name, required, type, dataSelect, onReturn }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    // Llama a la función onReturn si está definida
    if (onReturn) {
      onReturn(value);
    }
  };

  // Normaliza el texto de búsqueda
  const normalizeText = (text) => {
    return text.trim().toLowerCase();
  };

  switch (type) {
    case "select":
      return (
        <div className="InputPresupuesto">
          <label>
            {name} {required && <span style={{ color: "#FF3838" }}>*</span>}
          </label>
          <select
            className="input select"
            value={selectedValue}
            onChange={handleChange}
            required={required}
          >
            <option value="" disabled>
              Seleccionar
            </option>
            {dataSelect.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>
        </div>
      );

    case 'textarea':
      return (
        <div className="InputPresupuesto">
          <label>
            {name} {required && <span style={{ color: "#FF3838" }}>*</span>}
          </label>
          <textarea 
            className="input textarea"
            placeholder={name}
            required={required}
            value={selectedValue}
            onChange={handleChange} />
        </div>
      );

    default:
      return (
        <div className="InputPresupuesto">
          <label>
            {name} {required && <span style={{ color: "#FF3838" }}>*</span>}
          </label>
          <input
            className="input"
            type="text"
            name={name.toLowerCase()}
            placeholder={name}
            required={required}
            value={selectedValue}
            onChange={handleChange}
          />
        </div>
      );
  }
}
