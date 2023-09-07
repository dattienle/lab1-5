import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
// import { title } from "process";
import { useParams } from "react-router";
import listFilmsData from "../../assets/data";
import "./style.scss";
import { useContext, useState } from "react";
import { ThemeContext } from "../../theme/theme/ThemeContext";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Trailer from "../trailer";
const DetailPage = () => {
  const filmId = useParams();
  const film = listFilmsData.find((obj) => obj.ID === parseInt(filmId.id));
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      style={{
        backgroundColor: theme.backgroundColor,
        borderBottom: theme.borderBottom,
      }}
    >
      <Card className="card">
        <CardMedia
          component="img"
          height="140"
          image={`../${film.Image}`}
          className="image"
        />

        <a onClick={() => setIsOpen(true)}>
          <PlayCircleIcon className="video-icon" />
        </a>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {film.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {film.Info}
          </Typography>
        </CardContent>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "20%",
              left: "20%",
              right: "20%",
              bottom: "10%",
              border: "none",
              borderRadius: "2rem",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              outline: "none",
            }}
          >
            <Trailer setIsOpen={setIsOpen} film={film} />
          </Box>
        </Modal>
      </Card>
    </section>
  );
};

export default DetailPage;
