import { FlexContainer } from "../../widgets/flexContainer";
import { Container } from "../../widgets/container";
import { Row } from "../../widgets/row";
import { Text } from "../../widgets/text";
import { withLayoutContainer } from "../widgets/withLayoutContainer";
import router from "../state/routes";

const titleText = () =>
  new Text("The lightweight frontend framework.", null, {
    className: () => "heading-text",
    css: (context) => `
        .heading-text {
            color: white !important;
            text-align: center;
            font-size: 43px;
            max-width: 90%;
            animation: heading-text-anim .6s ease;
            align-self: flex-end;
        }

        @keyframes heading-text-anim {
            from { opacity: 0; transform: translateY(-20px); }
            to   { opacity: 1; transform: translateY(0px); }
          }      
    `
  });

const gettingStartedButton = () =>
  new Container({
    style: () => ({
      width: "140px",
      height: "44px",
      backgroundColor: "white",
      textAlign: "center",
      lineHeight: "44px",
      borderRadius: "40px",
      paddingLeft: "20px",
      paddingRight: "20px",
      userSelect: "none",
      fontSize: "17px",
      boxShadow: "rgba(87, 127, 133, 0.4) 0px 4px 10px"
    }),
    className: () => "getting-started-text",
    css: (context) => `
        .getting-started-text {
            animation:getting-started-text-anim 2s ease;
        }

        @keyframes getting-started-text-anim {
            0% { opacity: 0; }
            25% { opacity: 0; }
            100% { opacity: 1; }
          }      
    `,
    onPressed: () => router.navigate("/resources"),
    builder: ({ children }) => children([new Text("Getting Started")])
  });

const gitHubButton = () =>
  new Container({
    style: () => ({
      width: "90px",
      height: "44px",
      backgroundColor: "rgba(255,255,255,.2)",
      textAlign: "center",
      lineHeight: "44px",
      borderRadius: "40px",
      paddingLeft: "20px",
      paddingRight: "20px",
      userSelect: "none",
      fontSize: "17px",
      marginLeft: "10px",
      boxShadow: "rgba(87, 127, 133, 0.4) 0px 4px 10px"
    }),
    className: () => "github-text",
    css: (context) => `
        .github-text {
            animation:github-text-anim 3s ease;
        }

        @keyframes github-text-anim {
            0% { opacity: 0; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }      
    `,
    onPressed: () => router.navigate("/resources"),
    builder: ({ children }) =>
      children([
        new Text("GitHub", {
          color: "white"
        })
      ])
  });

const HomePage = new Container({
  style: () => ({
    height: "590px",
    backgroundColor: "#000"
  }),
  builder: ({ children }) =>
    children([
      withLayoutContainer([
        new FlexContainer({
          style: (context) => ({
            width: "100%",
            height: "500px",
            backgroundColor: "#000",
            flexWrap: "wrap"
          }),
          alignItems: "center",
          justifyContent: "center",
          builder: ({ children }) =>
            children([
              titleText(),
              new Row({
                style: {
                  width: "100%",
                  height: "120px",
                  alignSelf: "flex-start",
                  alignItems: "center",
                  justifyContent: "center"
                },
                builder: ({ children }) =>
                  children([gettingStartedButton(), gitHubButton()])
              })
            ])
        })
      ])
    ])
});

export default HomePage;
