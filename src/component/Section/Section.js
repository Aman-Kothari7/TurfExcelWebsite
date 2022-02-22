function Section(props) {
  return (
    <section
      className={`w-full relative text-lg md:text-xl text-onPrimary-txt ${
        props.containerStyle
      } ${props.removePaddingTop ? "" : " pt-10 pb-10 md:pt-28 md:pb-28"}`}
      id={props.id}
      // style={{
      //   ...(props.bgImage && {
      //     background: `url(${props.bgImage}) no-repeat`,
      //     width: "100vw",
      //   }),
      // }}
    >
      {props.bgImage && (
        <>
          <img
            className="absolute -z-0 object-cover top-0 bg-radial w-full h-full"
            src={props.bgImage}
            alt={props.secTitle}
          />
          <div
            className="absolute -z-0 top-0 bg-radial w-full h-full"
            style={{
              background:
                "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(50,144,126,0.7000940635451505) 0%, rgba(0,0,0,0.8589810924369747) 100%)",
            }}
          ></div>
        </>
      )}
      <div
        className={`max-w-7xl w-full relative z-10 m-auto ${props.className}`}
      >
        {props.secTitle && (
          <p
            className={`text-center text-3xl md:text-5xl relative z-10 font-primary `}
          >
            {props.secTitle}
          </p>
        )}
        <div className="m-auto">{props.children}</div>
      </div>
    </section>
  );
}

export default Section;
