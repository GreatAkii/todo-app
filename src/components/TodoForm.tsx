import { Input, Center, Flex, Button, Icon } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { IoAdd } from "react-icons/io5";

interface Props {
  onSubmit(data: FieldValues): void;
}
const TodoForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              type="text"
              placeholder="Write your next task ⚡️"
              bg={"lightseagreen"}
              required
              borderColor={"seagreen"}
              border={".0625rem"}
              w={"95%"}
              fontSize={"lg"}
              autoFocus
              autoComplete="on"
              pattern="^[a-zA-Z0-9\s]+$"
            ></Input>
            <Button
              type="submit"
              w={"10%"}
              bg={"lightseagreen"}
              borderColor={"seagreen"}
              border={".0625rem"}
            >
              <Icon as={IoAdd} boxSize={12} color={"white"} />
            </Button>
          </Flex>
        </Center>
      </form>
    </>
  );
};

export default TodoForm;
