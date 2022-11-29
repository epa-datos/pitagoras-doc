import PropTypes from "prop-types";

const LoomIframe = ({ title, src }) => {
  return (
    <div style={{ width: "60%", marginRight: "auto", marginLeft: "auto" }}>
      <div
        style={{
          position: "relative",
          paddingBottom: "64.98194945848375%",
          height: 0,
        }}
      >
        <iframe
          title={title}
          src={src}
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </div>
  );
};

LoomIframe.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
};

export default LoomIframe;
