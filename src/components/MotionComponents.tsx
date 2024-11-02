// MotionComponents.tsx
import React from 'react';
import { Box, BoxProps, Typography, TypographyProps, Button, ButtonProps, Container, ContainerProps, CardProps, Card } from '@mui/material';
import { motion } from 'framer-motion';

// Create a motion-enhanced Box component
export const MotionBox = motion(
  React.forwardRef<HTMLDivElement, BoxProps>(function MotionBox(props, ref) {
    return <Box ref={ref} {...props} />;
  })
);

// Create a motion-enhanced Typography component
export const MotionTypography = motion(
  React.forwardRef<HTMLSpanElement, TypographyProps>(function MotionTypography(
    props,
    ref
  ) {
    return <Typography ref={ref} {...props} />;
  })
);

// Create a motion-enhanced Button component
export const MotionButton = motion(
  React.forwardRef<HTMLButtonElement, ButtonProps>(function MotionButton(props, ref) {
    return <Button ref={ref} {...props} />;
  })
);

// Create a motion-enhanced Container component
export const MotionContainer = motion(
  React.forwardRef<HTMLDivElement, ContainerProps>(function MotionContainer(props, ref) {
    return <Container ref={ref} {...props} />;
  })
);

// Create a motion-enhanced Card component
export const MotionCard = motion(
    React.forwardRef<HTMLDivElement, CardProps>(function MotionCard(props, ref) {
      return <Card ref={ref} {...props} />;
    })
  );
