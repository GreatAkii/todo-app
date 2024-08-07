import { Input, Center, Flex, Button, Icon } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoAdd } from "react-icons/io5";
const TodoForm = () => {
  const { register } = useForm();
  return (
    <>
      <Center>
        <Flex
          gap={"10px"}
          mt={"10px"}
          borderRadius={".625rem"}
          w={"40%"}
          borderColor={"seagreen"}
          minWidth={"18.75rem"}
          justify={"space-between"}
        >
          <Input
            {...register("task")}
            id="task"
            type="text"
            placeholder="Write your next task ⚡️"
            bg={"lightseagreen"}
            required
            borderColor={"seagreen"}
            border={".0625rem"}
            w={"95%"}
            fontSize={"lg"}
            autoFocus
          ></Input>
          <Button
            onClick={() => {
              console.log("clicked");
            }}
            w={"10%"}
            bg={"lightseagreen"}
            borderColor={"seagreen"}
            border={".0625rem"}
          >
            <Icon as={IoAdd} boxSize={12} color={"white"} />
          </Button>
        </Flex>
      </Center>
    </>
  );
};

export default TodoForm;
