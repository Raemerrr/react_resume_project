import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Works from "./Components/Works";
import axios from "axios";

const App = () => {
  const [componentData, componentDataSet] = useState({});
  const token = "8c723161781340d48d1ce5b7140188882d20cf15";

  const getComponentData = () => {
    const initData = {
      Header: {
        project: "https://github.com/Raemerrr/react_resume_project",
        github: "https://github.com/Raemerrr/",
      },
      Home: {
        name: "Resume Project",
        description: "React를 공부하기 위해 재미로 만드는 Web Site!",
      },
      About: {
        aboutMe:
          "저는 코딩을 좋아하고 즐기는 사람입니다. React에 관심이 생겨 해당 프로젝트를 진행하게 되었습니다. 프론트엔드 엔지니어로 거듭나도록 하겠습니다.",
        address: "🏡 경기도 안산시 단원구 광덕 1로 80",
        email: "📩 foals18@gmail.com",
      },
    };
    return initData;
  };

  useEffect(() => {
    componentDataSet(getComponentData());
    //Resume.js DataSetting
    (async () => {
      await axios({
        url:
          "https://api.github.com/repos/raemerrr/react_resume_project/languages",
        method: "get",
        timeout: 8000,
        headers: {
          // Authorization: "token " + token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          const tempComponentData = componentData;
          tempComponentData.Resume = {};
          tempComponentData.Resume.languages = res.data;
          componentDataSet(tempComponentData);
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
          const tempComponentData = componentData;
          tempComponentData.Works = {};
          tempComponentData.Works.commits = res.data;
          componentDataSet(tempComponentData);
        })
        .catch((err) => console.error(err));
    })();
  }, []);

  return (
    <div className="App">
      <Header data={componentData.Header} />
      <Home data={componentData.Home} />
      <About data={componentData.About} />
      <Resume data={componentData.Resume} />
      <Works data={componentData.Works} />
    </div>
  );
};

export default App;
