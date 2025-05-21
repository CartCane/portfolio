import "./App.css";
import Header from './components/header';
import Project from './components/project';
import Skills from './components/skills';
import Footer from './components/footer';
import data from './data';

export default function App(){
  return(
    <div>
      <Header data={data.nav}/>
      <Project data={data.projects}/>
      <Skills item={data.skills}/>
      <Footer data={data.footer}/>
    </div>
  )
}