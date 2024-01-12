/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import "./ContactUs.scss";
import BackgroundAsideType from "../../components/BackgroundAsideType/BackgroundAsideType";
import FormLabel from "../../components/FormLabel/FormLabel";

function ContactUs() {
  const validationSchema = Joi.object({
    lastName: Joi.string().min(1).max(255).required().messages({
      "string.empty": "Votre nom est requis",
      "string.min": "Le nom doit contenir au moins {#limit} caractères",
      "string.max": "Le nom ne doit pas dépasser {#limit} caractères",
    }),
    firstName: Joi.string().min(1).max(255).required().messages({
      "string.empty": "Votre prénom est requis",
      "string.min": "Le prénom doit contenir au moins {#limit} caractères",
      "string.max": "Le prénom ne doit pas dépasser {#limit} caractères",
    }),
    email: Joi.string().email({ tlds: false }).max(255).required().messages({
      "string.empty": "Votre email est requis",
      "string.email": "L'email doit être valide",
      "string.max": "L'email ne doit pas dépasser {#limit} caractères",
    }),
    request: Joi.string().min(1).max(100).required().messages({
      "string.empty": "Type de demande",
    }),
    title: Joi.string().min(1).max(100).required().messages({
      "string.empty": "Titre",
    }),
    message: Joi.string().min(1).max(255).required().messages({
      "string.empty": "Message",
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
    <BackgroundAsideType title="Nous contacter">
      <form className="subscribeForm" onSubmit={handleSubmit(onSubmit)}>
        <FormLabel
          label="lastName"
          labelTitle="Nom"
          register={register}
          errors={errors}
          placeholder="Tapez votre nom ici"
        />
        <FormLabel
          label="firstName"
          labelTitle="Prénom"
          register={register}
          errors={errors}
          placeholder="Tapez votre prénom ici"
        />
        <FormLabel
          label="email"
          labelTitle="Email"
          register={register}
          errors={errors}
          placeholder="Tapez votre email ici"
        />
        <FormLabel
          label="request"
          labelTitle="Type de demande"
          register={register}
          errors={errors}
          placeholder="Type de demande"
        />
        <FormLabel
          label="title"
          labelTitle="Titre"
          register={register}
          errors={errors}
          placeholder="Taper une courte description ici"
        />
        <FormLabel
          label="message"
          labelTitle="Message"
          register={register}
          errors={errors}
          placeholder="Taper votre message ici"
        />
        <button className="submit" type="submit">
          Envoyer
        </button>
      </form>
    </BackgroundAsideType>
  );
}

export default ContactUs;
