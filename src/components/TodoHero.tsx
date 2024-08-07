import { Text, Box, Flex, Center } from "@chakra-ui/react";

interface Props {
  completed_todos: number;
  total_todos: number;
}
const TodoHero = ({ completed_todos, total_todos }: Props) => {
  return (
    <>
      <Center>
        <Flex
          justify={"center"}
          gap={"40px"}
          mt={"10px"}
          border={"1px"}
          borderRadius={"10px"}
          bg={"lightseagreen"}
          w={"40%"}
          borderColor={"seagreen"}
          align={"center"}
          p={"10px"}
          minWidth={"18.75rem"}
        >
          <Box>
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              Task Done
            </Text>
            <Text fontSize={"lg"}>Keep it up</Text>
          </Box>
          <Flex
            border={"2px"}
            borderRadius={"full"}
            borderColor={"black"}
            bg={"lightgreen"}
            justify={"center"}
            align={"center"}
            m={"md"}
            minWidth="6em" // Minimum width
            minHeight="6em" // Minimum height
            padding="16px" // Padding to ensure content has space
            aspectRatio={"1"}
          >
            <Text fontSize={"5xl"}>
              {completed_todos}/{total_todos}
            </Text>
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export default TodoHero;
