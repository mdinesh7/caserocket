"use client"
import Image from "next/image"
import { Button } from '@/components/ui/button'

export default function Nav() {
    return (
        <header>
            <nav>
                <ul className="flex items-center justify-between">
                    <div className='flex gap-10 py-3'>
                        <li>
                            <a
                                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/vercel.svg"
                                    alt="Vercel Logo"
                                    className="dark:invert"
                                    width={100}
                                    height={24}
                                    priority
                                />
                            </a>
                        </li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Case Studies</a></li>
                        <li><a href="">More</a></li>
                    </div>
                    <li>
                        <div className='flex gap-6 py-6'>
                            <Button>Button</Button>
                            <Button>Button</Button>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}