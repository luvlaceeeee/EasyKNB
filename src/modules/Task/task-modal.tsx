export const TaskModal = () => {
  // const userId = useAtomValue(userIdAtom);
  // const boardId = useAtomValue(boardIdAtom);
  // const { columnId, taskId } = useParams();
  // const { data, isLoading } = useQuery<ITask>(
  //   ['task-column', taskId],
  //   () =>
  //     TaskService.findTaskById(
  //       userId,
  //       boardId,
  //       stringToNumber(columnId),
  //       stringToNumber(taskId)
  //     ),
  //   {}
  // );
  //TODO Add loader for task
  return (
    <div>200</div>
    // <URLModal>
    //   <div className="p-7 pr-5 pt-5">
    //     {!isLoading ? (
    //       <>
    //         {/* TODO Fix props(delete desc) */}
    //         <TaskModalHeader
    //           title={data!.text}
    //           desc={data!.description}
    //           id={data!.id}
    //         />
    //         <TaskModalContent task={data!} />
    //       </>
    //     ) : (
    //       <Spinner />
    //     )}
    //   </div>
    // </URLModal>
  );
};
