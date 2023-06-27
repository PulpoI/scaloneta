function CardLayout({ children }) {
  return (
    <div className="flex gap-5 justify-center align-center pt-5 flex-wrap">
      {children}
    </div>
  );
}

export default CardLayout;
