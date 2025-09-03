import {useState} from 'react';
import "./App.css";
import Header from './components/header';
import Introduction from './components/Introduction'
import Project from './components/project';
import Skills from './components/skills';
import Footer from './components/footer';
import data from './data';

export default function App(){
  const [state, setState] = useState("home");
  return(
    <div>
      <Header data={data.nav} state={state} setState={setState}/>
      {state === "home" && <Introduction setState={setState}/>}
      {state === "project" && <Project data={data.projects}/>}
      {state === "blog" && <Skills item={data.skills}/>}
      {state === "contacts" && <Footer data={data.footer}/>}
    </div>
  )
}