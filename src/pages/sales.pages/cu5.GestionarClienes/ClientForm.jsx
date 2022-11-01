import { Formik, Form } from "formik";
import { useClient } from "../../../context/sales.context/cu5.GestionarClientes/ClientProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ClientForm() {
  const { createClient, getClient, updateClient } = useClient();

  const [client, setClient] = useState({
    id: "",
    nombre: "",
    apellido: "",
    ci: "",
    telefono: "",
    direccion: "",
  });

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const loadClient = async () => {
      if (params.id) {
        const client = await getClient(params.id);
        setClient({
          id: client.id,
          nombre: client.nombre,
          apellido: client.apellido,
          ci: client.ci,
          telefono: client.telefono,
          direccion: client.direccion,
        });
      }
    };
    loadClient();
  }, []);

  return (
    <div>
      <Formik
        initialValues={client}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateClient(params.id, values);
            navigate("/");
          } else {
            await createClient(values);
          }
          setClient({
            id: "",
            nombre: "",
            apellido: "",
            ci: "",
            telefono: "",
            direccion: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <h1>{params.id ? "Edit Client" : "Crate Cliente"}</h1>

            <div>
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
              />

              <label>Apellido</label>
              <input
                type="text"
                name="apellido"
                value={values.apellido}
                onChange={handleChange}
              />

              <label>CI</label>
              <input
                type="text"
                name="ci"
                value={values.ci}
                onChange={handleChange}
              />

              <label>Telefono</label>
              <input
                type="text"
                name="telefono"
                value={values.telefono}
                onChange={handleChange}
              />

              <label>Direccion</label>
              <input
                type="text"
                name="direccion"
                value={values.direccion}
                onChange={handleChange}
              />

              <label>ID</label>
              <input
                type="text"
                name="id"
                value={values.id}
                onChange={handleChange}
              />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ClientForm;
