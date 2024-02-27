import Artist from './artist'
import SoftwareEngineer from './swe'

export default function Spotlight({ role }) {

  const Section = ({ role }) => {
    switch (role) {
      case 'artist':
        return <Artist />
      case 'software engineer':
        return <SoftwareEngineer />
    }
  }

  return (
      <Section role={role} />
  )
}