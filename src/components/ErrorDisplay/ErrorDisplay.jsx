import OrganicJpg from '../../img/bg/Subsc.jpg'

const ErrorDisplay = () => {
  return (
    <section className="error_display_section">
      <div>
        <h1 style={{backgroundImage: `url(${OrganicJpg})`}}>Ooops...</h1>
        <p className='subtitle'>
          Please note that our website requires a screen resolution greater
          than 1440 pixels for proper functionality. <br />
          Screens with lower resolutions may experience compatibility issues. <br />
          We apologize for the inconvenience.
        </p>
      </div>
    </section>
  );
};

export default ErrorDisplay;
