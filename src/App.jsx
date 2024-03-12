import Header from "./component/header";
import "./App.css";
import { Box, Icon, Input } from "@mui/material";
import RepoList from "./component/RepoList";

function App() {
  return (
    <>
      <div>
        <Header />
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            component="img"
            src="https://picsum.photos/500/300"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "150px",
              filter: "blur(2px)",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "60%",
              transform: "translate(-50%, -50%)",
              color: "black",
              fontSize: "40px",
              borderRadius: "10px",
              textAlign: "center",
              backgroundColor: "#368eb559",
            }}
          >
            Download your favourate repo
          </Box>
        </Box>
        <RepoList />
      </div>
    </>
  );
}

export default App;
