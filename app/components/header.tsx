'use client';
import React from 'react';
import Link from 'next/link';
import { TbMenuDeep } from 'react-icons/tb';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';


const menuLinks = [

	{
		"id": 1,
		"title": "Home",
		"url": "home"
	},
	{
		"id": 2,
		"title": "About",
		"url": "about"
	},
	{
		"id": 3,
		"title": "Skills",
		"url": "skills"
	},
	{
		"id": 4,
		"title": "Projects",
		"url": "projects"
	},
	{
		"id": 5,
		"title": "Contacts",
		"url": "contacts"
	}

];
const Header = () => {
    // const [isOpen, setIsOpen] = React.useState(false);

    const [activeLink, setActiveLink] = React.useState<string>('home'); // Активная ссылка по умолчанию
    const sectionRefs = React.useRef<{ [key: string]: HTMLElement | null }>({}); // Ссылки на секции
  
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.id; // Получаем id секции
              setActiveLink(id); // Устанавливаем активную ссылку
            }
          });
        },
        { threshold: 0.6 } // Процент видимости секции
      );
  
      // Проходим по всем ссылкам и наблюдаем за секциями
      menuLinks.forEach((link) => {
        const section = document.getElementById(link.url); // Ищем секцию по id
        if (section) {
          sectionRefs.current[link.url] = section; // Сохраняем ссылку на секцию
          observer.observe(section); // Наблюдаем за секцией
        }
      });
  
      // Удаляем наблюдатель при размонтировании компонента
      return () => {
        Object.values(sectionRefs.current).forEach((section) => {
          if (section) observer.unobserve(section);
        });
      };
    }, []);
 
    return (
        <header className='fixed  top-0 left-0 w-[100vw] py-4 bg-[#1f242d] text-white z-[60]  border-b border-[#090032]'>

            <div className='max-w-[1440px] px-[20px] mx-auto '>
                <div className='flex justify-between items-center w-full'>

                    <Link className='logo relative flex items-center gap-2 text-[25px] font-semibold z-10' href="/">
                        Portfolio
                    </Link>

                    <nav>
                        <ul className='flex items-center gap-10'>
                            
                            {menuLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                       className={cn(` h-[50px] text-[18px] relative flex items-center font-medium capitalize link transition-all`,{
                                           'active': activeLink === link.url
                                       })}
                                        href={`#${link.url}`}
                                      >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </nav>
                    {/* <div className={styles.mobMenuBtn} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <IoClose size={30} /> : <TbMenuDeep size={30} />}
                    </div> */}
                    <button className='relative py-1 rounded-[10px] md:hidden ' ><TbMenuDeep size={30} /></button>
                </div>
            </div>
        </header>
    );
};

export default Header;