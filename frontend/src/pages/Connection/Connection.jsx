import "./Connection.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import BackgroundAsideType from "../../components/BackgroundAsideType/BackgroundAsideType";
import FormLabel from "../../components/FormLabel/FormLabel";
import { login } from "../../services/auth";
import useStore from "../../store/AuthProvider";

function Connection() {
  const validationSchema = Joi.object({
    email: Joi.string().email({ tlds: false }).max(255).required().messages({
      "string.empty": "Votre email est requis",
      "string.email": "L'email doit être valide",
      "string.max": "L'email ne doit pas dépasser {#limit} caractères",
    }),
    password: Joi.string().min(5).max(255).required().messages({
      "string.empty": "Le mot de passe est requis",
    }),
  }).required();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: joiResolver(validationSchema) });

  const navigate = useNavigate();

  const { setAuth } = useStore();

  const onSubmit = async (data) => {
    try {
      const result = await login(data.email, data.password);
      setAuth({ result });
      navigate("/map");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BackgroundAsideType title="Se connecter">
      <form className="connectionForm" onSubmit={handleSubmit(onSubmit)}>
        <FormLabel
          label="email"
          labelTitle="Email"
          register={register}
          errors={errors}
          placeholder="Tapez votre email ici"
        />
        <FormLabel
          label="password"
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
