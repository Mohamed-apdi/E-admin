import { LucideIcon } from 'lucide-react';

import { useLocation,  useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';

interface SidebarItemParams{
    path: string;
    label: string;
    icon: LucideIcon;
}

export const SidebarItems = ({
    path,
    label,
    icon: Icon,
}: SidebarItemParams) => {

    const location = useLocation();
    const pathname = location.pathname;
    const router = useNavigate();

    const isActive = (pathname === "/" && path === "/") || pathname === path || pathname?.startsWith(`${path}/`)

    const onClick = () => {
        router(path)
    }

  return (
    <div>
        <button
            onClick={onClick}
            type='button'
            className={cn(
                "flex items-center gap-x-2 w-full text-admin-neutral text-sm font-[500] pl-6 transition-all hover:text-admin-dark hover:bg-slate-400/10 rounded-sm",
                isActive && "text-admin-primary bg-admin-secondary hover:text-admin-primary hover:bg-admin-secondary"
            )}
        >
            <div className='flex items-center gap-x-2 py-3'>
                <Icon
                    className={cn(
                        "h-5 w-5 text-admin-neutral",
                        isActive && "text-admin-primary"
                    )}
                />
            {label}
            </div>

        </button>
    </div>
  )
}
