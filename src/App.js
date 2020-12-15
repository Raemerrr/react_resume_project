import React, { useEffect } from "react";
import { Header, Home, About, Resume, Works } from "./Components";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const componentData = {
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
  };

  useEffect(() => {
    console.log("App.js useEffect()[]!");
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/About"
          render={() => <About data={componentData.About} />}
        />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Works" component={Works} />
      </Switch>
    </div>
  );
};

export default App;
