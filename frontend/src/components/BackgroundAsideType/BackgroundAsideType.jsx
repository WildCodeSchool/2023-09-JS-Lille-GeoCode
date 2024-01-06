import PropTypes from "prop-types";
import BackButton from "../BackButton/BackButton";
import "./BackgroundAsideType.scss";

function BackgroundAsideType({ title, children }) {
  return (
    <section className="background">
      <header className="contentAside">
        <h1 className="titleSubscribe">{title}</h1>
        <BackButton />
      </header>
      <main className="mainContent">{children}</main>
    </section>
  );
}

BackgroundAsideType.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BackgroundAsideType;
