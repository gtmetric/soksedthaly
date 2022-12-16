type AboutProps = { about: string }

export const About = ({ about }: AboutProps) => (
  <div className="space-y-2 text-left">
    <div className="text-default text-4xl font-medium">About</div>
    <div className="text-default text-2xl font-normal">{about}</div>
  </div>
)
