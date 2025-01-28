import React, { useState, useEffect, useRef } from "react";
import Icon from "@/utils/Icon";
import InputPresupuesto from "./InputPresupuesto";

export default function AddProductPresupuesto({ id, onReturn }) {

  const [selectedFile, setSelectedFile] = useState(null);
  const [reparacion, setReparacion] = useState(null);
  const [color, setColor] = useState(null);
  const [medida, setMedida] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [tipoReparacion, setTipoReparacion] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const inputRef = useRef();
  const [error, setError] = useState(null)

  useEffect(() => {
    if (onReturn) {
      onReturn(id, {
          "foto": selectedFile,
          "tipo": tipo,
          "reparacion": reparacion,
          "tipoReparacion": tipoReparacion,
          "color": color,
          "medida": medida
        });
    }
  }, [tipo, selectedFile, reparacion, color, medida, tipoReparacion]);

  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
    
      if (file) {
        const fileSizeInMB = file.size / (1024 * 1024); // Convertir bytes a MB
        const fileExtension = file.name.split('.').pop().toLowerCase();

        // Verificar si el tipo de archivo es png o jpg
        if (fileExtension !== 'png' && fileExtension !== 'jpg') {
          setError('Solo se permiten imágenes en formato PNG o JPG');
          return;
        }

        // Verificar si el tamaño es mayor a 4MB
        if (fileSizeInMB > 4) {
          setError('El tamaño del archivo no puede superar los 4MB');
          return;
        }

        setError(null)
        setSelectedFile(file);
        setPreviewImage(URL.createObjectURL(file));
      }
    };
  } 

  const onChooseFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreviewImage(null);
  };

  const removeCard = () => {

    onReturn(id, null);

  }

  useEffect(() => {
    if (reparacion != "Antiadherente") {
      setColor(null)
    }
  }, [reparacion])

  const medidaOptions = [16, 17, 18, 19, 20, 22, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
  const reparacionOptions = ["Pulido", "Antiadherente"];
  const repaTypeOptions = ["Externo", "Interno", "Completo"];
  const colorOptions = ["Rojo", "Azul", "Verde"]; //completar
  const tipoOptions = ["Olla","Sarten"] //completar

  return (
    <div className="AddProductPresupuesto">
      <h3>Producto {id + 1}</h3>
      {id != 0 && 
        <div className="borrar" onClick={removeCard()}>
          <Icon icon="faXmark"/>
        </div>
      }
      {error &&
        <div className="error">
          <Icon icon="faCircleExclamation"/>
          <p className="text">{error}</p>
        </div>
      }
      <div className="inputImg">
        <input
          type="file"
          ref={inputRef}
          onChange={handleOnChange}
          style={{ display: "none" }}
        />
        <div className="fotoContent">
          <label>
            Foto <span style={{ color: "#FF3838" }}>*</span>
          </label>
          {previewImage ? (
            <div className="image-preview">
              <img src={previewImage} alt="Vista previa" />
            </div>
          ) : (
            <div className="file-btn" onClick={onChooseFile}>
              <Icon icon="faArrowUpFromBracket" /> Cargar foto
            </div>
          )}
        </div>
        <div className="selected-file">
          <p>{selectedFile ? selectedFile.name : "Agrega un archivo"}</p>
          <div className="delete" onClick={removeFile}>
            <Icon icon="faTrashCan" />
          </div>
        </div>
      </div>

      <InputPresupuesto type="select" name="Tipo" required={true} dataSelect={tipoOptions} onReturn={setTipo} />

      <div className="medida">
        <InputPresupuesto type="select" name="Medida" required={true} dataSelect={medidaOptions} onReturn={setMedida} />
        <div className="unidad">Cm</div>
      </div>

      <InputPresupuesto type="select" name="Reparación" required={true} dataSelect={reparacionOptions} onReturn={setReparacion} />

      {reparacion === "Antiadherente" && (
        <div className="color">
          <InputPresupuesto type="select" name="Color interior" required={true} dataSelect={colorOptions} onReturn={setColor} />
        </div>
      )}

      <InputPresupuesto type="select" name="Tipo de Reparación" required={true} dataSelect={repaTypeOptions} onReturn={setTipoReparacion} />
    </div>
  );
}
