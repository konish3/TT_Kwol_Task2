export const H3 = ({ children, className, ...props }) => {
  return (
    <h3 className={className} {...props}>
      {children}
    </h3>
  );
};
