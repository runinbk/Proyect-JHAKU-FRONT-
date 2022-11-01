import { Formik, Form } from "formik";
import { useEmploy } from "../../../context/user.context/cu20.GestionarEmpleado/EmployProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EmployForm() {
  const { createEmploy, getEmploy, updateEmploy } = useEmploy();

  const [employ, setEmploy] = useState({
    id: "",
    nombre: "",
    apellido: "",
    ci: "",
    direccion: "",
    sexo: "",
    idCargo: "",
    idUsuario: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmploy = async () => {
      if (params.id) {
        const employ = await getEmploy(params.id);
        setEmploy({
          id: employ.id,
          nombre: employ.nombre,
          apellido: employ.apellido,
          ci: employ.ci,
          direccion: employ.direccion,
          sexo: employ.sexo,
          idCargo: employ.idCargo,
          idUsuario: employ.idUsuario,
        });
      }
    };
    loadEmploy();
  }, []);

  return (
    <div>
      <Formik
        initialValues={employ}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateEmploy(params.id, values);
            navigate("/");
          } else {
            await createEmploy(values);
          }
          setEmploy({
            id: "",
            nombre: "",
            apellido: "",
            ci: "",
            direccion: "",
            sexo: "",
            idCargo: "",
            idUsuario: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <h1>{params.id ? "Edit Empleado" : "Create Empleado"}</h1>

            <label>ID</label>
            <input
              type="text"
              name="id"
              value={values.id}
              onChange={handleChange}
            />

            <label>NOMBRE</label>
            <input
              type="text"
              name="nombre"
              placeholder="Write a NOMBRE"
              onChange={handleChange}
              value={values.nombre}
            />

            <label>APELLIDO</label>
            <input
              type="text"
              name="apellido"
              placeholder="Write a APELLIDO"
              onChange={handleChange}
              value={values.apellido}
            />

            <label>CI</label>
            <input
              type="text"
              name="ci"
              placeholder="Write a CI"
              onChange={handleChange}
              value={values.ci}
            />

            <label>DIRECCION</label>
            <input
              type="text"
              name="direccion"
              placeholder="Write a DIRECCION"
              onChange={handleChange}
              value={values.direccion}
            />

            <label>SEXO</label>
            <input
              type="text"
              name="sexo"
              placeholder="Write a SEXO"
              onChange={handleChange}
              value={values.sexo}
            />

            <label>IDCARGO</label>
            <input
              type="text"
              name="idCargo"
              placeholder="Write a IDCARGO"
              onChange={handleChange}
              value={values.idCargo}
            />

            <label>IDUSUARIO</label>
            <input
              type="text"
              name="idUsuario"
              placeholder="Write a IDUSUARIO"
              onChange={handleChange}
              value={values.idUsuario}
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EmployForm;
