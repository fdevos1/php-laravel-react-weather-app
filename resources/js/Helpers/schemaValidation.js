import * as yup from "yup";

export let formValidation = yup.object().shape({
    cidade: yup.string().required("Digite a cidade desejada"),
});
