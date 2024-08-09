import { Input, Center, Flex, Button, Icon, Text } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { IoAdd } from "react-icons/io5";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const todoFormSchema = z.object({
  task: z
    .string()
    .min(3, "Task cannot be less then 3 characters")
    .max(100, "Task cannot exceed 100 characters")
    .regex(
      /^[a-zA-Z0-9\s]+$/,
      "Task can only contain letters, numbers, and spaces"
    ),
});

type TodoFormData = z.infer<typeof todoFormSchema>;

interface Props {
  onSubmit(data: TodoFormData): void;
}

interface Props {
  onSubmit(data: FieldValues): void;
}
const TodoForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormData>({
    resolver: zodResolver(todoFormSchema),
  });
  const handleOnSubmit = (data: FieldValues) => {
    onSubmit(data);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
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
              borderColor="seagreen"
              border={".0625rem"}
              w={"95%"}
              fontSize={"lg"}
              autoFocus
              autoComplete="off"
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
        <Center>
          {errors.task && (
            <Text color="red.500" fontSize="sm">
              {errors.task.message}
            </Text>
          )}
        </Center>
      </form>
    </>
  );
};

export default TodoForm;
