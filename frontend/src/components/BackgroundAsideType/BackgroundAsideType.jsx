import PropTypes from "prop-types";
import BackButton from "../BackButton/BackButton";
import "./BackgroundAsideType.scss";

function BackgroundAsideType({ title, children }) {
  return (
    <article className="background">
      <aside className="contentAside">
        <h1 className="titleSubscribe">{title}</h1>
        <BackButton />
      </aside>
      <main className="mainContent">{children}</main>
    </article>
  );
}

BackgroundAsideType.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BackgroundAsideType;
