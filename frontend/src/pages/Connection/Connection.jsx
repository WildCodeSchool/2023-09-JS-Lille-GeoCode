import "./Connection.scss";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import BackgroundAsideType from "../../components/BackgroundAsideType/BackgroundAsideType";
import FormLabel from "../../components/FormLabel/FormLabel";

function Connection() {
  const validationSchema = Joi.object({
    connectionLabelEmail: Joi.string()
      .email({ tlds: false })
      .max(255)
      .required()
      .messages({
        "string.empty": "Votre email est requis",
        "string.email": "L'email doit être valide",
        "string.max": "L'email ne doit pas dépasser {#limit} caractères",
      }),
    connectionLabelPassword: Joi.string().min(5).max(255).required().messages({
      "string.empty": "Le mot de passe est requis",
    }),
  }).required();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: joiResolver(validationSchema) });

  function onSubmit(data) {
    console.info(JSON.stringify(data));
  }
  return (
    <BackgroundAsideType title="Se connecter">
      <form className="connectionForm" onSubmit={handleSubmit(onSubmit)}>
        <FormLabel
          label="connectionLabelEmail"
          labelTitle="Email"
          register={register}
          errors={errors}
          placeholder="Tapez votre email ici"
        />
        <FormLabel
          label="connectionLabelPassword"
          labelTitle="Mot de passe"
          register={register}
          errors={errors}
          placeholder="Tapez votre mot de passe ici"
        />
        <footer className="containerSubmit">
          <button className="submit" type="submit">
            Se connecter
          </button>
        </footer>
      </form>
    </BackgroundAsideType>
  );
}

export default Connection;
