interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className='mb-10'>
      <h3>{title}</h3>
    </div>
  );
};

export default SectionTitle;
