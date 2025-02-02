import {PropsWithChildren} from 'react'

import type {FC} from 'react'
import Link from "next/link";
import {ThemeSwitcher} from "@/components/theme-switcher";
import {Separator} from "@/components/ui/separator";


type PropsType = PropsWithChildren<{}>

const Layout: FC<PropsType> = ({children}) => {

  return (
    <>
      <div className={'max-w-[1920px] min-w-[300px] w-full h-full flex flex-col bg-background'}>
        <header className={'sticky top-0 bg-background'}>
          <div className={'flex justify-between items-center p-5'}>
            <Link href={'/'}>
              <h2 className={'font-semibold'}>
                Exflein
              </h2>
            </Link>

            <div className={'flex gap-5 items-center'}>
              <nav className={''}>
                <ul className={'flex gap-2'}>
                  <li>
                    <Link href={'/blog'}>Blog</Link>
                  </li>
                  <li>
                    <Link href={'/projects'}>Projects</Link>
                  </li>
                  <li>
                    <Link href={'/about'}>About</Link>
                  </li>
                  <li>
                    <Link href={'/news'}>Newsletter</Link>
                  </li>
                </ul>
              </nav>
              <ThemeSwitcher />
            </div>
          </div>
          <Separator
            orientation={'horizontal'}
            className={'mx-auto w-11/12 bg-foreground'}
          />
          {/*<div>*/}
          {/*  <h1 className={' text-[18vw] font-bold'}>THE BLOG</h1>*/}
          {/*</div>*/}
        </header>
        <div className={''}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout