// import {useState} from "react";
// import {Box,Button,TextField,useMediaQuery,Typography,useTheme} from "@mui/material";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlinedIcon";
// import {Formik} from "formik";
// import * as yup from yup;
// import {useNavigate} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {setLogin} from "state";
// import Dropzone from "react-dropzone";
// // import FlexBetween from ""



// const registerSchema = yup.Object().shape({
//     firstName:yup.string().required("required"),
//     lastName:yup.string().required("required"),
//     email:yup.string().email("invalid email").required("required"),
//     password:yup.string().required("required"),
//     location:yup.string().required("required"),
//     occupation:yup.string().required("required"),
//     picture:yup.string().required("required"),
// })


// const loginSchema = yup.object().shape({
//     email:yup.string().email("invalid email").required("required"),
//     password:yup.string().required("required")
// })

// const initialValuesRegister = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     location: "",
//     occupation: "",
//     picture: "",
//   };
  
//   const initialValuesLogin = {
//     email: "",
//     password: "",
//   };


//   const Form = () => {
//     const [pageType, setPageType] = useState("login");
//     const { palette } = useTheme();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const isNonMobile = useMediaQuery("(min-width:600px)");
//     const isLogin = pageType === "login";
//     const isRegister = pageType === "register";


//     const handleFormSubmit = async (values,onSubmitProps) => {};


//     return(
//         <Formik 
//         onSubmit={handleFormSubmit}
//         initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
//         validationSchems={isLogin ? loginSchema : registerSchema}>
//             {({
//                   values,
//                   errors,
//                   touched,
//                   handleBlur,
//                   handleChange,
//                   handleSubmit,
//                   setFieldValue,
//                   resetForm,
//             }) => (
//                 <form onSubmit={handleSubmit}>
//                     <Box
//                         display="grid"
//                         gap="30px"
//                         gridTemplateColumns="repeat"
//                     >
                        
//                     </Box>
//                 </form>
//             )
//             }
//         </Formik>
//     )
//   }





import React from "react";


function BasicForm(){
    return(
   

<div className="cover">
            <h1>Login</h1>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            {/* <a href="/register">register</a */}
          
            <div className="login-btn"  >Login</div>

           
            
        </div>
         
    )
}

export default BasicForm
 