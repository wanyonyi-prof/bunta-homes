 const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-accent text-primary hover:bg-accent-light hover:scale-105',
    secondary: 'bg-primary text-white hover:bg-primary-dark',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-primary',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
