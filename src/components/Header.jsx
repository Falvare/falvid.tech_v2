import { Menu } from '@headlessui/react'
import  menu_icon from '../../public/menu-icon.svg'

export default function Navbar() {
    
    return (
        <header className="flex flex-row justify-between text-start px-2 py-0 fixed bg-white w-full">
            <h1 className="text-violet-900 font-bold text-2xl pt-5 md:px-20 lg:px-40 xl:px-80">Falvid.tech</h1>
            <Menu>
                <Menu.Button className="md:px-20 lg:hidden"><img src={menu_icon} alt="" className='h-10'/></Menu.Button>
                <Menu.Items className="flex flex-col">
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`${active && 'bg-blue-500'}`}
                        href="#"
                        >
                        Contact me
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`${active && 'bg-blue-500'}`}
                        href="/account-settings"
                        >
                        Documentation
                        </a>
                    )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
            <nav className='pt-5 hidden px-20 lg:flex'>
                <a href="" className='text-violet-900 font-bold px-5 md:px-15'>Contact me</a>
            </nav>
        </header>
    )
}