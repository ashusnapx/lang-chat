import Logo from './Logo'
import { ModeToggle } from './DarkModeToggle'
import UserButton from './UserButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import Link from 'next/link'
import { LucideDollarSign, LucideMessageSquarePlus } from 'lucide-react'
import CreateChatButton from './CreateChatButton'

async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
      <nav className='flex sm:flex-row flex-col items-center justify-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
        <Logo />

        <div className='flex-1 flex items-center justify-end space-x-4'>
          {/* language select */}

          {/* session && (
                  
                  ) */}
          {session ? (
            <>
              <Link
                href={"/chat"}
                prefetch={false}
              >
                <LucideMessageSquarePlus
                  className='text-black dark:text-white'
                />
              </Link>

              <CreateChatButton/>
            </>
          ):(
          <Link
            href="/pricing">
                Pricing
          </Link>
          )}

          {/* Dark mode toggle button */}
          <ModeToggle />

          {/* user info button */}
          <UserButton session={session} />
        </div>
      </nav>

      {/* upgrade banner */}
    </header>
  )
}

export default Header
