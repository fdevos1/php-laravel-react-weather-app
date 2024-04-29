import * as yup from "yup";

export let formValidation = yup.object().shape({
    cep: yup.string().required(),
});
