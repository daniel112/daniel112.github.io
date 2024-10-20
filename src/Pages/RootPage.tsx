import { Box, Button } from "@chakra-ui/react";
import { FC } from "react";
import { useFoo } from "../store/reducers/fooReducer";

export const RootPage: FC = () => {
  const {
    foo,
    actions: { setFoo },
  } = useFoo();
  return (
    <Box>
      <Button colorScheme="blue" onClick={() => setFoo("TEST")}>
        Click me {foo.value}
      </Button>
    </Box>
  );
};
