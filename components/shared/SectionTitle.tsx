import { cn } from '@/lib/utils';

interface sectionTitleProps {
  title: string;
  subTitle: string;
  color?: string;
}

const SectionTitle: React.FC<sectionTitleProps> = ({
  title,
  subTitle,
  color = 'bg-red',
}) => {
  return (
    <div className='flex items-center gap-2.5'>
      <span className={cn('h-20 w-4', color)}></span>
      <div className='flex flex-col items-start gap-2.5'>
        <span className='text-lg font-semibold uppercase tracking-[0.375em]'>
          {subTitle}
        </span>
        <h3 className='text-5xl '>{title}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
