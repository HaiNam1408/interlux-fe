const IcArrowRight = (props: any) => {
  return (
    <svg
      width="8"
      height="16"
      viewBox="0 0 8 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={props.color || "#fff"}
      style={{
        transition: "all .2s ease",
      }}
    >
      <path d="M7.268 9.547L0 16l4-8-4-8 7.268 6.453C7.715 6.82 8 7.377 8 8c0 .623-.285 1.18-.732 1.547z"></path>
    </svg>
  );
};

export default IcArrowRight;
