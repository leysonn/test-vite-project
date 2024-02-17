import 'sass';
import './styles/App.scss';
import Navbar from './components/Navbar/Navbar';
import AboutSection from './components/AboutSection/AboutSection';
import InfoSection from './components/InfoSection/InfoSection';
import IntroSection from './components/IntroSection/IntroSection';
import OutroSection from './components/OutroSection/OutroSection';
import ProjectSection from './components/ProjectsSection/ProjectSection';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <IntroSection />
                <InfoSection />
                <ProjectSection />
                <AboutSection />
                <OutroSection />
            </main>
        </>
    );
}

export default App;
