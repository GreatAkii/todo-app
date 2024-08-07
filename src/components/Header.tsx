import { Icon, Text, Flex, Center } from "@chakra-ui/react";
import { LuListTodo } from "react-icons/lu";
const Header = () => {
  return (
    <>
      <Center>
        <Flex
          justify={"center"}
          gap={"1.25rem"}
          mt={"1.25rem"}
          border={".0625rem"}
          borderRadius={".625rem"}
          bg={"lightseagreen"}
          w={"40%"}
          borderColor={"seagreen"}
          minWidth={"18.75rem"}
        >
          <Icon as={LuListTodo} boxSize={12} />
          <Text fontSize={"3xl"} as="b">
            TODO
          </Text>
        </Flex>
      </Center>
    </>
  );
};

export default Header;
