import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";

function App() {
  return (
    <Flex id="main" height={"100vh"} width={"100vw"}>
      <Center flexDir={"column"} flex={1}>
        <Button width={"fit-content"}>Click me </Button>

        <Table variant={"striped"} width={500}>
          <Tbody>
            {Array.from({ length: 8 }).map((_, index) => (
              <Tr key={index}>
                {Array.from({ length: 8 }).map((_, index) => (
                  <Td key={index}>
                    <Center>
                      <Text>{index}</Text>
                    </Center>
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Center>
    </Flex>
  );
}

export default App;
