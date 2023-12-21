/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import "./Subscribe.scss";
import BackButton from "../../components/BackButton/BackButton";
import addPicture from "../../assets/addPicture.svg";

function Subscribe() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const pwd = watch("password");

  function onSubmit(data) {
    console.info(JSON.stringify(data));
  }

  return (
    <section className="background">
      <aside className="contentAside">
        <h1 className="titleSubscribe">S'enregistrer</h1>
        <BackButton />
      </aside>
      <form className="subscribeForm" onSubmit={handleSubmit(onSubmit)}>
        <article className="group-picture">
          <article className="NamesElements">
            <fieldset className="lastName">
              <label className="labelSubscribe" htmlFor="lastName">
                Nom de famille :
              </label>
              <input
                className="inputSubscribe"
                type="text"
                id="lastName"
                {...register("lastName", { required: true, minLength: 1 })}
              />
              {errors.lastName && (
                <p className="error">Le nom de famille est obligatoire.</p>
              )}
            </fieldset>
            <fieldset className="firstName">
              <label className="labelSubscribe" htmlFor="firstName">
                Prénom :
              </label>
              <input
                className="inputSubscribe"
                type="text"
                id="firstName"
                {...register("firstName", { required: true, minLength: 1 })}
              />
              {errors.firstName && (
                <p className="error">Le prénom est obligatoire.</p>
              )}
            </fieldset>
          </article>
          <article className="PictureElement">
            <fieldset className="pictureProfil">
              <label className="labelSubscribe" htmlFor="pictureProfil">
                Photo de profil :
              </label>
              <label htmlFor="pictureProfil" className="labelPicture">
                <img
                  className="addPicture"
                  src={addPicture}
                  alt="raccourci pour import fichier portrait"
                />
              </label>
              <input
                className="inputPictureProfil"
                type="file"
                id="pictureProfil"
                {...register("image")}
              />
            </fieldset>
          </article>
        </article>
        <fieldset className="email">
          <label className="labelSubscribe" htmlFor="email">
            Email :
          </label>
          <input
            className="inputSubscribe"
            type="email"
            id="email"
            {...register("email", { required: true, minLength: 1 })}
          />
          {errors.email && <p className="error">Votre mail est obligatoire.</p>}
        </fieldset>
        <fieldset className="gender">
          <label className="labelSubscribe" htmlFor="gender">
            Genre :
          </label>
          <select name="genre" className="selectGender" id="gender">
            <option>Choisir un genre</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
            <option value="Ne souhaite pas choisir">
              Ne souhaite pas choisir
            </option>
          </select>
        </fieldset>
        <fieldset className="birthdate">
          <label className="labelSubscribe" htmlFor="birthdate">
            Date de naissance :
          </label>
          <input
            className="inputSubscribe"
            type="date"
            id="birthdate"
            {...register("birthdate", { required: true })}
          />
          {errors.birthdate && (
            <p className="error">Votre Date de naissance est obligatoire.</p>
          )}
        </fieldset>
        <fieldset className="zipcode">
          <label className="labelSubscribe" htmlFor="zipcode">
            Code postal :
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
          {errors.zipcode && (
            <p className="error">Votre Code postal est obligatoire.</p>
          )}
        </fieldset>
        <fieldset className="city">
          <label className="labelSubscribe" htmlFor="city">
            Ville :
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
          {errors.city && <p className="error">Votre ville est obligatoire.</p>}
        </fieldset>
        <fieldset className="password">
          <label className="labelSubscribe" htmlFor="password">
            Mot de passe :
          </label>
          <input
            className="inputSubscribe"
            type="password"
            id="password"
            {...register("password", { required: true, minLength: 5 })}
          />
          {errors.password && (
            <p className="error">
              Votre Mot de passe est obligatoire, doit contenir un minimu de 5
              caractères svp.
            </p>
          )}
        </fieldset>
        <article className="confirmPassword">
          <label className="labelSubscribe" htmlFor="confirmPassword">
            Confirmation du mot de passe :
          </label>
          <input
            className="inputSubscribe"
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: true,
              minLength: 5,
              validate: (value) => value === pwd || "The password do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}
        </article>
        <footer className="containerSubmit">
          <button className="submit" type="submit">
            Envoyer
          </button>
        </footer>
      </form>
    </section>
  );
}

export default Subscribe;
