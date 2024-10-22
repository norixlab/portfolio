import { cn } from "@/lib/utils";

interface Props {
  name: string;
  className?: string;
}

const PrimaryButton: React.FC<Props> = ({name, className}) => {
  return (
    <button className={cn('primary_link', className)}>
      {name}
    </button>
  );
};

export default PrimaryButton;
