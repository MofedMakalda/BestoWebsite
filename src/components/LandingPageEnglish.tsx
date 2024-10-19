


import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Collapse,
  Button,
  Box,
  Dialog,
  DialogContent,
  Icon,
} from "@mui/material";

// Importing images

import { Icons } from "./icons";
import { Header } from "./Header";
import {  EnglishCategories } from "../data/MenuEnglishData";



const LandingPageEnglish: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const handleCategoryClick = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const handleImageClick = (image: string) => {
    setZoomedImage(image);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  return (
    <Box
      sx={{ backgroundColor: "#fcba03", paddingBottom: "2px", margin: "0" }}
      
    >
      <Header/>
      <Container>
        {EnglishCategories.map((category, index) => (
          <div
            key={index}
            style={{ marginBottom: "0", padding: "0", position: "relative" }}
          >
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
                  <Box
                    key={idx}
                    width={{ xs: "48%", sm: "48%" }}
                    marginBottom="16px"
                  >
                    <Card onClick={() => handleImageClick(item.image)} sx={{height:"220px"}}>
                      <CardMedia
                        component="img"
                      //   height="200px"
                        image={item.image}
                        alt={item.title}
                        sx={{
                          objectFit: "cover", // Ensure the image covers the entire box
                        }}
                      />
                      <CardContent
                        sx={{
                          padding: "8px", // Adjust padding to reduce space between image and text
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          alignItems: "space-between",
                          backgroundColor:"black",
                          height:"100px"
                          
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            marginTop: 0,
                              color:"white",
                             textAlign:"center"
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Icons />
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </Box>
            </Collapse>
          </div>
        ))}
        
        {/* Zoomed Image Modal */}
        <Dialog open={!!zoomedImage} onClose={handleCloseZoom}>
          <DialogContent>
            {zoomedImage && (
              <img
                src={zoomedImage}
                alt="Zoomed Image"
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default LandingPageEnglish;
