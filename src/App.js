import React, { useState, useEffect } from "react";
import { Header, Home, About, Resume, Works } from "./Components";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from "axios";

const App = () => {
  const [componentData, setComponentData] = useState({
    Header: {
      project: "https://github.com/Raemerrr/react_resume_project",
      github: "https://github.com/Raemerrr/",
    },
    About: {
      aboutMe:
        "저는 코딩을 좋아하고 즐기는 사람입니다. React에 관심이 생겨 해당 프로젝트를 진행하게 되었습니다. 프론트엔드 엔지니어로 거듭나도록 하겠습니다.",
      address: "🏡 Ansan-si, Gyeonggi-do, Republic of Korea",
      email: "📩 foals18@gmail.com",
    },
  });
  const [resumeData,setResumeData] = useState([]);
  const [worksData,setWorksData] = useState([]);

  useEffect(() => {
    //Resume.js DataSetting
    (async () => {
      await axios({
        url:
          "https://api.github.com/repos/raemerrr/react_resume_project/languages",
        method: "get",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setResumeData(res.data);
        })
        .catch((err) => console.error(err));
    })();

    //Works.js DataSetting
    (async () => {
      await axios({
        url:
          "https://api.github.com/repos/raemerrr/react_resume_project/commits",
        method: "get",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setWorksData(res.data);
        })
        .catch((err) => console.error(err));
    })();
  }, []);

  useEffect(() => {
    // console.log("componentData 변경!");
    // console.log("componentData : " + JSON.stringify(componentData));
    // setComponentData(componentData);
  }, [componentData]);

  return (
    <Router>
        <div>
          <Header data={componentData.Header} />
          <Route exact path='/' component={Home}/>
          <Route path='/About' render={()=><About data={componentData.About} />}/>
          <Route path='/Resume' render={()=><Resume data={resumeData} />}/>
          <Route path='/Works' render={()=><Works data={worksData} />}/>
        </div>
      </Router>
  );
};

export default App;
