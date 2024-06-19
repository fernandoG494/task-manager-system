import * as Yup from "yup";
import { useState } from "react";
import { Stack } from "@mui/system";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormikValues, useFormik } from "formik";

import { loginUser } from "../../services/apiService";
import { ILoginFormValues } from "../../interfaces/layout.interface";
import { setSession, setToken } from "../../store/slices/session.slice";

import "../../styles/components/LoginRegister.scss";

const LoginComponent = () => {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
      const response = await loginUser(values);
      if (response.user?.isActive) {
        const {
          token,
          user: { _id, name, lastName, roles },
        } = response;

        dispatch(setToken({ token }));
        localStorage.setItem("token", JSON.stringify(token));
        dispatch(setSession({ _id, name, lastName, roles }));

        toast.success(
          `Welcome back ${response.user.name}, wait until redirection`,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );

        setTimeout(() => {
          navigate("/dashboard");
        }, 3200);
      } else {
        toast.error(response.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
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
