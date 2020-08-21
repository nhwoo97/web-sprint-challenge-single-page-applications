import * as yup from 'yup'

const formSchema = yup.object().shape({

username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is Required"),
address: yup
    .string()
    .min(8, "Adress must be at least 8 characters")
    .required("Adress is Required"),
size : yup
    .string()
    .oneOf(['small', 'medium', 'large'], "Required"),
special: yup
     .string()
     .min(8, "Request must be at least 8 characters")
     
    })

export default formSchema