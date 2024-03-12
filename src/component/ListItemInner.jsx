import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ListItemText, ListItemAvatar, Avatar } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function ListItemInner({ repo }) {
  const [loading, setLoading] = useState(false);
  const handleDownloadRepoZip = (repoName) => {
    setLoading(true);
    const username = "abuanwar072"; // Replace with your username
    try {
      axios
        .get(
          `https://gitdown-api.knowvibe.tech/github-download?repoName=${repoName}`
        )
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${repoName}.zip`);
          document.body.appendChild(link);
          link.click();
          setLoading(false);
          document.body.removeChild(link);
        });
    } catch (error) {
      console.error("Error downloading repo:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <ListItemAvatar>
        <Avatar alt={repo.name} src={repo.owner.avatar_url} />
      </ListItemAvatar>
      <ListItemText
        sx={{
          // primary color should be white
          // and secondary color should be lightgrey
          "& .MuiListItemText-primary": {
            color: "white",
          },
          "& .MuiListItemText-secondary": {
            color: "lightgrey",
          },
        }}
        primary={repo.name}
        secondary={repo.description}
      />
      {loading === true ? (
        "Downloading..."
      ) : (
        <ArrowDownwardIcon
          onClick={() => {
            handleDownloadRepoZip(repo.name);
          }}
          sx={{
            "&:hover": {
              cursor: "pointer",
              color: "lightgreen",
            },
          }}
        />
      )}
    </>
  );
}

export default ListItemInner;
