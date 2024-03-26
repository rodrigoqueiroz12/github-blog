import { AppContainer } from '../../../_components/app-container'
import { IssuesSection } from './issues-section'
import { ProfileSection } from './profile-section'

export const Home = () => {
  return (
    <main className="relative z-10 -mt-[5.5rem] overflow-x-hidden pb-16">
      <AppContainer>
        <ProfileSection />

        <IssuesSection />
      </AppContainer>
    </main>
  )
}
