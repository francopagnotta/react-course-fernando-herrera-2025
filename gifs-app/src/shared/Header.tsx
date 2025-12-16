interface Props {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: Props) => {
  return (
    <>
      <div className="content-center">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </>
  );
};
