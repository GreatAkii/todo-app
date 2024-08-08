import {
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  ButtonGroup,
  IconButton,
  Flex,
  Input,
  Box,
  Center,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { TodoTask } from "../interfaces/TodoTask";

interface Props {
  taskobj: TodoTask;
  markOutTask(id: string): void;
  updateTask(id: string, task: string): void;
}

const Task = ({ taskobj, markOutTask, updateTask }: Props) => {
  const handleUpdateTask = (data: string) => {
    updateTask(taskobj.id, data);
    console.log(data);
  };
  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
          aria-label="Confirm"
        />
        <IconButton
          icon={<CloseIcon />}
          {...getCancelButtonProps()}
          aria-label="Cancel"
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton
          size="sm"
          icon={<EditIcon />}
          {...getEditButtonProps()}
          aria-label="Edit"
        />
      </Flex>
    );
  };
  return (
    <Editable
      textAlign="center"
      defaultValue={taskobj.title}
      fontSize="2xl"
      isPreviewFocusable={false}
      as={taskobj.isCompleted ? "del" : "div"}
      onSubmit={handleUpdateTask}
    >
      <Center>
        <Flex
          justify={"space-between"}
          align={"center"}
          mt={"10px"}
          border={".0625rem"}
          borderRadius={".625rem"}
          bg={"lightseagreen"}
          w={"40%"}
          borderColor={"seagreen"}
          minWidth={"18.75rem"}
          p={"10px"}
        >
          <EditablePreview />
          <Box>
            <Input as={EditableInput} />
          </Box>
          <ButtonGroup>
            <EditableControls />
            <IconButton
              onClick={() => markOutTask(taskobj.id)}
              colorScheme="white"
              aria-label="Search database"
              icon={<CloseIcon />}
            />
          </ButtonGroup>
        </Flex>
      </Center>
    </Editable>
  );
};

export default Task;
