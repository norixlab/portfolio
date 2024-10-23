import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton: React.FC<Props> = ({children, className}) => {
  return (
    <button className={cn('primary_link', className)}>
      {children}
    </button>
  );
};

export default PrimaryButton;
