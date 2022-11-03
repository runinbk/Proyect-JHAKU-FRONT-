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
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Empleado" : "Create Empleado"}
            </h1>

            <div className="mt-4">
              <label className="block">NOMBRE</label>
              <input
                type="text"
                name="nombre"
                placeholder="Write a NOMBRE"
                onChange={handleChange}
                value={values.nombre}
                className="px-2 py-1 rounded-sm w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block">APELLIDO</label>
              <input
                type="text"
                name="apellido"
                placeholder="Write a APELLIDO"
                onChange={handleChange}
                value={values.apellido}
                className="px-2 py-1 rounded-sm w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block">CI</label>
              <input
                type="text"
                name="ci"
                placeholder="Write a CI"
                onChange={handleChange}
                value={values.ci}
                className="px-2 py-1 rounded-sm w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block">DIRECCION</label>
              <input
                type="text"
                name="direccion"
                placeholder="Write a DIRECCION"
                onChange={handleChange}
                value={values.direccion}
                className="px-2 py-1 rounded-sm w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block">SEXO</label>
              <input
                type="text"
                name="sexo"
                placeholder="Write a SEXO"
                onChange={handleChange}
                value={values.sexo}
                className="px-2 py-1 rounded-sm w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block">IDCARGO</label>
              <input
                type="text"
                name="idCargo"
                placeholder="Write a IDCARGO"
                onChange={handleChange}
                value={values.idCargo}
                className="px-2 py-1 rounded-sm w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block">IDUSUARIO</label>
              <input
                type="text"
                name="idUsuario"
                placeholder="Write a IDUSUARIO"
                onChange={handleChange}
                value={values.idUsuario}
                className="px-2 py-1 rounded-sm w-full"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="block bg-indigo-500 px-2 py-1 p-5 text-white w-full rounded-md"
              >
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EmployForm;
