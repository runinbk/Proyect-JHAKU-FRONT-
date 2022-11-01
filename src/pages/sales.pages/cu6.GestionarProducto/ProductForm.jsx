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
          <Form onSubmit={handleChange}>
            <h1>{params.id ? "Edit Product" : "Create Product"}</h1>
            <div>
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
              />

              <label>Precio</label>
              <input
                type="text"
                name="precio"
                value={values.precio}
                onChange={handleChange}
              />

              <label>Descripcion</label>
              <input
                type="text"
                name="descripcion"
                value={values.descripcion}
                onChange={handleChange}
              />

              <label>IdReceta</label>
              <input
                type="text"
                name="idReceta"
                value={values.idReceta}
                onChange={handleChange}
              />

              <label>Id</label>
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

export default ProductForm;
