import { About } from './Hero/About'
import { Profile } from './Hero/Profile'

type HeroProps = { about: string }

export const Hero = ({ about }: HeroProps) => (
  <div className="flex h-screen min-h-[48rem] items-center px-8 sm:px-28">
    <div className="flex-1">
      <Profile />
    </div>

    <div className="flex-1 flex-col space-y-12">
      <div className="flex-1">
        <About about={about} />
      </div>

      <div className="flex-2 h-[30vh] min-h-[14rem] bg-gray-primary" />
    </div>
  </div>
)
