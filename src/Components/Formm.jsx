import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";


const Formm = ({ customer, loading }) => {
    const { name, company, notes, id, number, email } = customer
    const navigate = useNavigate();

    const phnNumberRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

    const newCustomerSchema = Yup.object().shape({
        name: Yup.string().min(2).required("Name is mandatory"),
        company: Yup.string().required("Company is required"),
        email: Yup.string().email().required(),
        number: Yup.string()
            .matches(phnNumberRegex, "Phone number is not valid")
            .required(),
        notes: "",
    });

    const handleSubmit = (values, resetForm) => {

        const createOrUpdateCustomer = async () => {
            try {

                if (!id) {
                    const url = `http://localhost:4000/clientes`;
                    const fetchUrl = await fetch(url, {
                        method: "POST",
                        body: JSON.stringify(values),
                        headers: {
                            "Content-type": "application/json",
                        },
                    });
                    resetForm()


                } else {
                    const url = `http://localhost:4000/clientes/${id}`;
                    const fetchUrl = await fetch(url, {
                        method: "PUT",
                        body: JSON.stringify(values),
                        headers: {
                            "Content-type": "application/json",
                        },
                    });
                    resetForm()
                }

            } catch (error) {
                console.log(error);
            }

            navigate("/");
        }
        createOrUpdateCustomer();

    };

    return (


        <div className=" bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className=" text-gray-600 font-bold text-xl uppercase text-center">
                {Object.keys(customer).length > 0 ? "Update Customer" : "Add customer"}
            </h1>
            <Formik
                initialValues={{
                    name: name ?? "",
                    company: company ?? "",
                    email: email ?? "",
                    number: number ?? "",
                    notes: notes ?? "",
                }}
                enableReinitialize={true}
                onSubmit={async (values, { resetForm }) => {
                    await handleSubmit(values, resetForm);
                    // resetForm();

                }}
                validationSchema={newCustomerSchema}
            >
                {({ errors, touched }) => {
                    return (
                        <Form>
                            <div className="mb-4">
                                <label className="text-gray-800" htmlFor="name">
                                    Name:
                                </label>
                                <Field
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Customer's Name"
                                />
                                {errors.name && touched.name && <Alert>{errors.name}</Alert>}
                            </div>

                            <div className="mb-4">
                                <label className="text-gray-800" htmlFor="company">
                                    Company:
                                </label>
                                <Field
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="Company's Name"
                                />
                                {errors.company && touched.company && (
                                    <Alert>{errors.company}</Alert>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="text-gray-800" htmlFor="email">
                                    E-mail:
                                </label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="E-mail"
                                />
                                {errors.email && touched.email && <Alert>{errors.email}</Alert>}
                            </div>

                            <div className="mb-4">
                                <label className="text-gray-800" htmlFor="number">
                                    Phone Number:
                                </label>
                                <Field
                                    type="tel"
                                    id="number"
                                    name="number"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                    placeholder="18006000000"
                                />
                                {errors.number && touched.number && (
                                    <Alert>{errors.number}</Alert>
                                )}
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-800" htmlFor="notes">
                                    Notes:
                                </label>
                                <Field
                                    as="textarea"
                                    id="notes"
                                    name="notes"
                                    className="mt-2 block w-full p-3 bg-gray-50"
                                />
                            </div>
                            <input
                                className="mt-5 text-white font-bold text-xl uppercase w-full bg-blue-800 py-4 
                                    rounded-lg hover:cursor-pointer hover:bg-blue-900 ease-in duration-300"
                                type="submit"
                                value={Object.keys(customer).length > 0 ? "Update" : "Add Customer"}
                            />
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};

Formm.defaultProps = {
    customer: {}
}

export default Formm;
