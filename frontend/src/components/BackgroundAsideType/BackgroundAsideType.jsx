import PropTypes from "prop-types";
import BackButton from "../BackButton/BackButton";
import "./BackgroundAsideType.scss";

function BackgroundAsideType({ title, children }) {
  return (
    <main className="background">
      <header className="contentAside">
        <h1 className="titleSubscribe">{title}</h1>
        <BackButton />
      </header>
      <section className="mainContent">{children}</section>
    </main>
  );
}

BackgroundAsideType.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BackgroundAsideType;
