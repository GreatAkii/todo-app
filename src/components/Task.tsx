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
    <Center>
      <Box
        mt={"10px"}
        w={"40%"}
        border={"1px"}
        bg={"lightseagreen"}
        borderColor={"seagreen"}
        borderRadius={".625rem"}
        px={"10px"}
        minWidth={"300px"}
      >
        <Editable
          textAlign="center"
          defaultValue={taskobj.title}
          fontSize="2xl"
          isPreviewFocusable={false}
          onSubmit={handleUpdateTask}
          isTruncated
        >
          <Flex justify={"space-between"} align={"center"} gap={"5px"}>
            <Box isTruncated flex={"1"}>
              <EditablePreview
                textDecoration={taskobj.isCompleted ? "line-through" : "none"}
                textDecorationColor={"red"}
                textDecorationStyle={"solid"}
              />
              <Input
                as={EditableInput}
                minW={"100px"}
                border={"2px"}
                px="10px"
              />
            </Box>

            <Flex justify={"space-between"} align={"center"}>
              <EditableControls />
              <IconButton
                onClick={() => markOutTask(taskobj.id)}
                colorScheme="white"
                aria-label="Search database"
                icon={<CloseIcon />}
              />
            </Flex>
          </Flex>
        </Editable>
      </Box>
    </Center>
  );
};

export default Task;
