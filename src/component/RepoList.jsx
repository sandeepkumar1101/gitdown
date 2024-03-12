import { useState, useEffect } from "react";
import axios from "axios";
import { Box, List, ListItem } from "@mui/material";
import ListItemInner from "./ListItemInner";

function RepoList() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const username = "abuanwar072"; // Replace with your username
      const result = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      setRepos(result.data);
    };

    fetchRepos();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        color: "white",
        padding: "20px",
        height: "100%",
        backgroundColor: "black",
      }}
    >
      <List>
        {repos.map((repo) => (
          <ListItem
            sx={{
              backgroundColor: "#313131",
              mb: "10px",
            }}
            key={repo.id}
          >
            <ListItemInner repo={repo} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default RepoList;
