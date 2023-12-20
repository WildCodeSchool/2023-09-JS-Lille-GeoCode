/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import "./Subscribe.scss";

function Subscribe() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.info(data);
  }

  return (
    <div className="background">
      <div>
        <h1 className="titleSubscribe">S'enregistrer</h1>
      </div>
      <form className="subscribeForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="lastName">
          <label className="labelSubscribe" htmlFor="lastName">
            {" "}
            Nom de famille :{" "}
          </label>
          <input
            className="inputSubscribe"
            type="text"
            id="lastName"
            {...register("lastName", { required: true, minLength: 1 })}
          />
          {errors.lastName && <p>Le Nom de famille est obligatoire.</p>}
        </div>
        <div className="firstName">
          <label className="labelSubscribe" htmlFor="firstName">
            {" "}
            Prénom :{" "}
          </label>
          <input
            className="inputSubscribe"
            type="text"
            id="firstName"
            {...register("firstName", { required: true, minLength: 1 })}
          />
          {errors.firstName && <p>Le Prénom est obligatoire.</p>}
        </div>
        <div className="pictureProfil">
          <label className="labelSubscribe" htmlFor="pictureProfil">
            {" "}
            Photo de profil :{" "}
          </label>
          <input
            className="inputPictureProfil"
            type="file"
            id="pictureProfil"
            {...register("image")}
          />
        </div>
        <div className="email">
          <label className="labelSubscribe" htmlFor="email">
            {" "}
            Email :{" "}
          </label>
          <input
            className="inputSubscribe"
            type="email"
            id="email"
            {...register("email", { required: true, minLength: 1 })}
          />
          {errors.email && <p>Votre Adresse mail est obligatoire.</p>}
        </div>
        <div className="gender">
          <label className="labelSubscribe" htmlFor="gender">
            {" "}
            Genre :{" "}
          </label>
          <select name="genre" className="selectGender" id="gender">
            <option>Choisir un genre</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
            <option value="Ne souhaite pas choisir">
              Ne souhaite pas choisir
            </option>
          </select>
        </div>
        <div className="birthdate">
          <label className="labelSubscribe" htmlFor="birthdate">
            {" "}
            Date de naissance :{" "}
          </label>
          <input
            className="inputSubscribe"
            type="date"
            id="birthdate"
            {...register("birthdate", { required: true })}
          />
          {errors.birthdate && <p>Votre Date de naissance est obligatoire.</p>}
        </div>
        <div className="zipcode">
          <label className="labelSubscribe" htmlFor="zipcode">
            {" "}
            Code postal :{" "}
          </label>
          <input
            className="inputSubscribe"
            type="text"
            id="zipcode"
            {...register("zipcode", {
              required: true,
              minLength: 5,
              maxLength: 5,
            })}
          />
          {errors.zipcode && <p>Votre Code postal est obligatoire.</p>}
        </div>
        <div className="city">
          <label className="labelSubscribe" htmlFor="city">
            {" "}
            Ville :{" "}
          </label>
          <input
            className="inputSubscribe"
            type="text"
            id="city"
            {...register("city", {
              required: true,
              minLength: 5,
              maxLength: 5,
            })}
          />
          {errors.city && <p>Votre ville est obligatoire.</p>}
        </div>
        <div className="password">
          <label className="labelSubscribe" htmlFor="password">
            {" "}
            Mot de passe :{" "}
          </label>
          <input
            className="inputSubscribe"
            type="password"
            id="password"
            {...register("password", { required: true, minLength: 5 })}
          />
          {errors.password && (
            <p>
              Votre Mot de passe est obligatoire, doit contenir un minimu de 5
              caractères svp.{" "}
            </p>
          )}
        </div>
        <div className="confirmPassword">
          <label className="labelSubscribe" htmlFor="confirmPassword">
            {" "}
            Confirmation du mot de passe :{" "}
          </label>
          <input
            className="inputSubscribe"
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", { required: true, minLength: 5 })}
          />
          {errors.confirmPassword && (
            <p>
              La Confirmation de votre Mot de passe est obligatoire, doit
              contenir un minimu de 5 caractères svp.
            </p>
          )}
        </div>
        <button className="submit" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
