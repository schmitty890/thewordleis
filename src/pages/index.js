import React from "react"
import { Container, Box, Grid, GridItem, Center } from "@chakra-ui/react"
import "../styles/main.css"
import { Seo } from "../components/Seo"

import {
  SpotifyUserControlsProvider,
  SpotifyUserControlsConsumer,
} from "../context/wordleContext"

export default function Home() {
  return (
    <SpotifyUserControlsProvider>
      <SpotifyUserControlsConsumer>
        {({ wordle }) => (
          <Container
            maxW="container.xl"
            fontFamily="'Clear Sans', 'Helvetica Neue', Arial, sans-serif"
            bgColor="#121213"
          >
            <Seo></Seo>
            <Grid
              templateColumns="repeat(5, 1fr)"
              gap={2}
              mt={20}
              fontWeight="bold"
              color="#ffffff"
              fontSize={{ base: "4em", md: "5em", lg: "7em" }}
              bgColor="#121213"
            >
              <GridItem
                className="wiggle"
                p={{ base: 2, md: 10, lg: 20 }}
                w="100%"
                h="100%"
                bg="#538d4e"
              >
                <Center>{wordle[0]}</Center>
              </GridItem>
              <GridItem
                className="wiggle"
                p={{ base: 2, md: 10, lg: 20 }}
                w="100%"
                h="100%"
                bg="#538d4e"
              >
                <Center h="100%">{wordle[1]}</Center>
              </GridItem>
              <GridItem
                className="wiggle"
                p={{ base: 2, md: 10, lg: 20 }}
                w="100%"
                h="100%"
                bg="#538d4e"
              >
                <Center h="100%">{wordle[2]}</Center>
              </GridItem>
              <GridItem
                className="wiggle"
                p={{ base: 2, md: 10, lg: 20 }}
                w="100%"
                h="100%"
                bg="#538d4e"
              >
                <Center h="100%">{wordle[3]}</Center>
              </GridItem>
              <GridItem
                className="wiggle"
                p={{ base: 2, md: 10, lg: 20 }}
                w="100%"
                h="100%"
                bg="#538d4e"
              >
                <Center h="100%">{wordle[4]}</Center>
              </GridItem>
            </Grid>
          </Container>
        )}
      </SpotifyUserControlsConsumer>
    </SpotifyUserControlsProvider>
  )
}
