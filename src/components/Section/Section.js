import PropTypes from 'prop-types';

const SectionTitles = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

SectionTitles.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SectionTitles;
