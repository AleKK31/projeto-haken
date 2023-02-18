import * as yup from "yup";

export const carValidation = yup.object({
    veiculo: yup.string().required(),
    marca: yup.string().required(),
    ano: yup.number().required(),
    desc: yup.string().required(),
    vendido: yup.boolean().required(),
});