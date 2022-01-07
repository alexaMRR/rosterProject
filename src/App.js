import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyComp student={BobTheBuilder} />
      <MyComp student={Karin} />
      <MyComp student={Ana} />
      <MyComp student={Joe} />
      <MyComp student={Jayden} />
      <MyComp student={Uber} />
      <MyComp student={Maya} />
      <MyComp student={David} />
      <MyComp student={Kevin} />
      <MyComp student={Old} />
      <MyComp student={Ca} />
      <MyComp student={MikeWazowski} />
    </div>
  );
}

let BobTheBuilder = {
  name: "Bob the Builder",
  school: "School of Hard Hats",
  year: "2001",
  color: "Yellow",
  music: "Nursery Rhymes",
  url: "https://www.youtube.com/watch?v=kXj_1u7YlUY",
  socialMedia: "TikTok",
  beachOrMountain: "Mountains"
};

let Karin = {
  name: "Karin",
  school: "UC Berkeley",
  year: "2017",
  color: "Sage",
  music: "Country",
  url: "https://www.youtube.com/watch?v=oOlDewpCfZQ",
  socialMedia: "Instagram",
  beachOrMountain: "Beach"
};

let Ana = {
  name: "Ana",
  school: "CSUEB",
  year: "2016",
  color: "Green",
  music: "Reggea",
  url: "https://www.youtube.com/channel/UCKxbp_TrC0liu7tl0xsmdoA",
  socialMedia: "Instagram",
  beachOrMountain: "Beach"
};

let Joe = {
  name: "Joe",
  school: "School of Schools",
  year: "2021",
  color: "Orange",
  music: "Music",
  url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  socialMedia: "",
  beachOrMountain: ""
};

let Jayden = {
  name: "Jayden",
  school: "Burton High School",
  year: "2023",
  color: "Blue",
  music: "No Prefrence",
  url: "",
  socialMedia: "Instagram",
  beachOrMountain: "Beach"
};

let Uber = {
  name: "uber",
  school: "lowella",
  year: "1940",
  color: "burger",
  music: "classic",
  url: "",
  socialMedia: "",
  beachOrMountain: ""
};

let Maya = {
  name: "Maya",
  school: "UC San Diego",
  year: "2016",
  color: "Purple",
  music: "Dance pop",
  url: "https://www.youtube.com/c/Taskmaster",
  socialMedia: "Instagram",
  beachOrMountain: "Mountains"
};

let David = {
  name: "David",
  school: "Burton",
  year: "2023",
  color: "Crimson Red",
  music: "Folk",
  url: "https://www.youtube.com/watch?v=vWJvQveHDLk",
  socialMedia: "",
  beachOrMountain: ""
};

let Kevin = {
  name: "Kevin",
  school: "Carnegie Mellon",
  year: "2015",
  color: "Blue",
  music: "Pop",
  url: "https://www.youtube.com/c/twosetviolin",
  socialMedia: "Instagram",
  beachOrMountain: "Beach"
};

let Old = {
  name: "Old",
  school: "School",
  year: "1987",
  color: "Red",
  music: "Rock",
  url: "",
  socialMedia: "",
  beachOrMountain: "Mountains"
};

let Ca = {
  name: "ca",
  school: "bal",
  year: "2022",
  color: "blue",
  music: "pop",
  url: "N/A",
  socialMedia: "N/A",
  beachOrMountain: ""
};

let MikeWazowski = {
  name: "Mike Wazowski",
  school: "Monster University",
  year: "5021",
  color: "lime green",
  music: "Kpop",
  url: "https://www.youtube.com/watch?v=QllBbRPTsE0",
  socialMedia: "TikTok",
  beachOrMountain: "Mountains"
};

function MyComp(props) {
  console.log(props);
  let name = props.student.name;
  let school = props.student.school;
  let year = props.student.year;
  let color = props.student.color;
  let music = props.student.music;
  let url = props.student.url;
  let socialMedia = props.student.socialMedia;
  let beachOrMountain = props.student.beachOrMountain;
  return (
    <div>
      {" "}
      {name}, {school}, {year}, {color},{music},{url},{socialMedia},
      {beachOrMountain}
    </div>
  );
}
