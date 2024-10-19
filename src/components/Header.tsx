

// import { Box, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";

// export const Header = () => {
//     const navigate = useNavigate(); // Hook for programmatic navigation
//     const [pressedButton, setPressedButton] = useState<null | string>(null); // State to track which button is pressed

//     const handlePress = (route: string, button: string) => {
//         setPressedButton(button); // Set pressed button
//         setTimeout(() => {
//             navigate(route); // Navigate after a short delay
//             setPressedButton(null); // Reset pressed button
//         }, 150); // Adjust delay as needed
//     };

//     return (
//         <Box
//             sx={{
//                 width: "100%",
//                 height: "100px",
//                 backgroundColor: "black",
//                 display: "flex",
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//             }}
//         >
//             <Typography
//                 sx={{
//                     fontSize: "40px",
//                     color: "orange",
//                     padding: "10px",
//                     fontFamily: "monospace",
//                     fontWeight: "bold",
//                 }}
//             >
//                 {" "}Besto{" "}
//             </Typography>
//             <Box
//                 sx={{
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                     gap: "5px", // Consistent spacing between items
//                     marginRight: "15px"
//                 }}
//             >
//                 {/* Ar Box */}
//                 <Box
//                     sx={{
//                         width: "35px",
//                         height: "35px",
//                         borderRadius: "50%",
//                         backgroundColor: "orange",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         transform: pressedButton === "Ar" ? "scale(0.9)" : "scale(1)", // Scale effect on press for Ar
//                         transition: "transform 0.1s ease", // Smooth transition for scale
//                     }}
//                     onClick={() => handlePress("/", "Ar")} 
//                 >
//                     <Typography sx={{ fontSize: "23px", color: "black" }}>Ar</Typography>
//                 </Box>

//                 {/* Separator */}
//                 <Typography sx={{ fontSize: "30px", color: "orange" }}>|</Typography>

//                 {/* En Box */}
//                 <Box
//                     sx={{
//                         width: "35px",
//                         height: "35px",
//                         borderRadius: "50%",
//                         backgroundColor: "orange",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         transform: pressedButton === "En" ? "scale(0.9)" : "scale(1)", // Scale effect on press for En
//                         transition: "transform 0.1s ease", // Smooth transition for scale
//                     }}
//                     onClick={() => handlePress("/Menu-En", "En")}  
//                 >
//                     <Typography sx={{ fontSize: "23px", color: "black" }}>En</Typography>
//                 </Box>
//             </Box>
//         </Box>
//     );
// };
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
// Import your logo image
import logo from "../assets/background/logo.png"; // Adjust the path according to your directory structure

export const Header = () => {
    const navigate = useNavigate(); // Hook for programmatic navigation
    const [pressedButton, setPressedButton] = useState<null | string>(null); // State to track which button is pressed

    const handlePress = (route: string, button: string) => {
        setPressedButton(button); // Set pressed button
        setTimeout(() => {
            navigate(route); // Navigate after a short delay
            setPressedButton(null); // Reset pressed button
        }, 150); // Adjust delay as needed
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "100px",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            {/* Replace Typography with an image */}
            <Box
                component="img"
                src={logo} // Use the imported logo image
                alt="Besto Logo"
                sx={{
                    height: "80px", // Adjust height as needed
                    margin: "10px", // Adjust margin as needed
                }}
            />

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "5px", // Consistent spacing between items
                    marginRight: "15px"
                }}
            >
                {/* Ar Box */}
                <Box
                    sx={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        backgroundColor: "orange",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transform: pressedButton === "Ar" ? "scale(0.9)" : "scale(1)", // Scale effect on press for Ar
                        transition: "transform 0.1s ease", // Smooth transition for scale
                    }}
                    onClick={() => handlePress("/", "Ar")} 
                >
                    <Typography sx={{ fontSize: "23px", color: "black" }}>Ar</Typography>
                </Box>

                {/* Separator */}
                <Typography sx={{ fontSize: "30px", color: "orange" }}>|</Typography>

                {/* En Box */}
                <Box
                    sx={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        backgroundColor: "orange",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        transform: pressedButton === "En" ? "scale(0.9)" : "scale(1)", // Scale effect on press for En
                        transition: "transform 0.1s ease", // Smooth transition for scale
                    }}
                    onClick={() => handlePress("/Menu-En", "En")}  
                >
                    <Typography sx={{ fontSize: "23px", color: "black" }}>En</Typography>
                </Box>
            </Box>
        </Box>
    );
};
