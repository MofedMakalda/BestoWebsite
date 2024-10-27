

import React, { useState } from "react";
import { 
  Container, Typography, Card, CardMedia, CardContent, Collapse, Button, Box, Dialog, DialogContent, IconButton 
} from "@mui/material";
import { Icons } from "./icons";
import { Header } from "./Header";
import { ArabicCategories } from "../data/MenuArabicData";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const LandingPageArabic: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [zoomedImages, setZoomedImages] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCategoryClick = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const handleImageClick = (images: string[]) => {
    setZoomedImages(images);
    setCurrentImageIndex(0);
  };

  const handleCloseZoom = () => {
    setZoomedImages(null);
  };

  const handleNextImage = () => {
    if (zoomedImages) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % zoomedImages.length);
    }
  };

  const handlePreviousImage = () => {
    if (zoomedImages) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + zoomedImages.length) % zoomedImages.length
      );
    }
  };

  return (
    <Box sx={{ backgroundColor: "#fcba03", paddingBottom: "2px", margin: "0" }}>
      <Header />
      <Container>
        {ArabicCategories.map((category, index) => (
          <div key={index} style={{ marginBottom: "0", padding: "0", position: "relative" }}>
            <div
              style={{
                backgroundImage: `url(${category.backgroundImage})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "250px",
                marginBottom: "0",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => handleCategoryClick(index)}
                variant="contained"
                sx={{
                  zIndex: 1,
                  marginBottom: "2rem",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: { xs: "6px 12px", sm: "8px 16px" },
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                <Typography variant="h6">{category.title}</Typography>
              </Button>
            </div>
            <Collapse in={openCategory === index}>
              <Box display="flex" flexWrap="wrap" justifyContent="space-between">
                {category.items.map((item, idx) => (
                  <Box key={idx} width={{ xs: "48%", sm: "48%" }} marginBottom="16px">
                    <Card sx={{ height: "285px", display: "flex", flexDirection: "column" }}>
                      <CardMedia
                        component="img"
                        image={item.images[0]}  // Show the first image as the thumbnail
                        alt={item.title}
                        sx={{ height: "175px", objectFit: "cover" }}
                        onClick={() => handleImageClick(item.images)}
                      />
                       <CardContent
                        sx={{
                          padding: "8px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor: "black",
                          flexGrow: 1,
                          position:"relative"
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          {item.title}
                          <Typography sx={{fontSize:"10px"}}>{item.description}</Typography>
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            color: "orange",
                            textAlign: "center",
                            fontSize:"20px"
                          }}
                        >
                          {item.price}
                        </Typography>
                        {/* <Icons /> */}
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </Box>
            </Collapse>
          </div>
        ))}

        {/* Zoomed Image Modal with Image Carousel */}
        <Dialog open={!!zoomedImages} onClose={handleCloseZoom} PaperProps={{ style: { margin: 0 } }}>
          <DialogContent sx={{ position: "relative", textAlign: "center", padding: 0 }}>
            {zoomedImages && (
              <img
                src={zoomedImages[currentImageIndex]}
                alt="Zoomed Image"
                style={{ width: "100%", height: "auto", display: "block", margin: 0 }}
              />
            )}
            {/* Previous Button */}
            <IconButton
              onClick={handlePreviousImage}
              sx={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", color: "orange" }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            {/* Next Button */}
            <IconButton
              onClick={handleNextImage}
              sx={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", color: "orange" }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default LandingPageArabic;
