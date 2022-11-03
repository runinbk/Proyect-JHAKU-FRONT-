import { Formik, Form } from "formik";
import { useProduct } from "../../../context/sales.context/cu6.GestionarProducto/ProductProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductForm() {
  const { createProduct, getProduct, updateProduct } = useProduct();

  const [product, setProduct] = useState({
    id: "",
    nombre: "",
    precio: "",
    descripcion: "",
    idReceta: "",
  });

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const loadProduct = async () => {
      if (params.id) {
        const product = await getProduct(params.id);
        setProduct({
          id: product.id,
          nombre: product.nombre,
          precio: product.precio,
          descripcion: product.descripcion,
          idReceta: product.idReceta,
        });
      }
    };
    loadProduct();
  }, []);

  return (
    <div>
      <Formik
        initialValues={product}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateProduct(params.id, values);
            navigate("/");
          } else {
            await createProduct(values);
          }
          setProduct({
            id: "",
            nombre: "",
            precio: "",
            descripcion: "",
            idReceta: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleChange}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Product" : "Create Product"}
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
                <label className="block">Precio</label>
                <input
                  type="text"
                  name="precio"
                  value={values.precio}
                  onChange={handleChange}
                  className="px-2 py-1 rounded-sm w-full"
                />
              </div>
              <div className="mt-4">
                <label className="block">Descripcion</label>
                <input
                  type="text"
                  name="descripcion"
                  value={values.descripcion}
                  onChange={handleChange}
                  className="px-2 py-1 rounded-sm w-full"
                />
              </div>
              <div className="mt-4">
                <label className="block">IdReceta</label>
                <input
                  type="text"
                  name="idReceta"
                  value={values.idReceta}
                  onChange={handleChange}
                  className="px-2 py-1 rounded-sm w-full"
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
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

export default ProductForm;
