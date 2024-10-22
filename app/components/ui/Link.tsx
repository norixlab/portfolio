import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  name: string;
  href: string;
  className?: string;
}
const PrimaryLink: React.FC<Props> = ({name, href, className}) => {
  return (
    <Link  href={href} className={cn('primary_link', className)}>
      {name}
    </Link>
  );
};

export default PrimaryLink;
