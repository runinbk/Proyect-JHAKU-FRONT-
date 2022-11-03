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
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Client" : "Crate Cliente"}
            </h1>

            <div>
              <div className="mt-4">
                <label className="block">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={values.nombre}
                  onChange={handleChange}
                  className="px-2 py-1 rounded-sm w-full"
                />
              </div>
              <div className="mt-4">
                <label className="block">Apellido</label>
                <input
                  type="text"
                  name="apellido"
                  value={values.apellido}
                  onChange={handleChange}
                  className="px-2 py-1 rounded-sm w-full"
                />
              </div>
              <div className="mt-4">
                <label className="block">CI</label>
                <input
                  type="text"
                  name="ci"
                  value={values.ci}
                  onChange={handleChange}
                  className="px-2 py-1 rounded-sm w-full"
                />
              </div>
              <div className="mt-4">
                <label className="block">Telefono</label>
                <input
                  type="text"
                  name="telefono"
                  value={values.telefono}
                  onChange={handleChange}
                  className="px-2 py-1 rounded-sm w-full"
                />
              </div>
              <div className="mt-4">
                <label className="block">Direccion</label>
                <input
                  type="text"
                  name="direccion"
                  value={values.direccion}
                  onChange={handleChange}
                  className="px-2 py-1 rounded-sm w-full"
                />
              </div>
              <div className="mt-4">
                <label className="block">ID</label>
                <input
                  type="text"
                  name="id"
                  value={values.id}
                  onChange={handleChange}
                  className="px-2 py-1 rounded-sm w-full"
                />
              </div>
              <div className="mt-4">
                <button
                  className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Loading..." : "Submit"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ClientForm;
