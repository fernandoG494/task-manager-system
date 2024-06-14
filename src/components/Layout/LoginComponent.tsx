import * as Yup from "yup";
import { useState } from "react";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import { FormikValues, useFormik } from "formik";

import { ILoginFormValues } from "../../interfaces/layout.interfaces";

import "../../styles/components/LoginRegister.scss";

const LoginComponent = () => {
  const [submitting, setSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues: ILoginFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: FormikValues) => {
    try {
      setSubmitting(true);
      console.log("=>", values);
      // Aquí puedes manejar el envío del formulario, por ejemplo, hacer una solicitud a una API
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="content-wrapper">
      <div className="title-text">Welcome back! Enter your credentials</div>

      <div className="form-content-wrapper">
        <form onSubmit={formik.handleSubmit}>
          <Stack direction="column">
            <label className="label-text" htmlFor="email">
              Enter your email
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Your email here"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </Stack>

          <Stack direction="column">
            <label className="label-text" htmlFor="password">
              Enter your password
            </label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Your password here"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </Stack>

          <div className="submit-button">
            <Button
              variant="contained"
              type="submit"
              disabled={submitting || !formik.isValid}
              fullWidth
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
