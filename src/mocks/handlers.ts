import {
  comments,
  tasks,
  users,
} from "@/app/projects/sprint-board/data/mockData";
import { IComment, ITask } from "@/app/projects/sprint-board/types/interfaces";
import {
  addItem,
  archiveItem,
  fetchFilteredItems,
  fetchItems,
  updateItem,
} from "@/utils/mockApi-helpers";
import { http, HttpResponse } from "msw";

export const handlers = [
  // create new comment
  http.post("*/api/tasks/:id/comments", async ({ request }) => {
    const body = await request.json();
    const comment = addItem(body as IComment, comments);

    return HttpResponse.json({
      data: comment,
      status: 200,
      message: "Comment created successfully",
      success: true,
    });
  }),

  // get comments for specific task
  http.get("*/api/tasks/:id/comments", ({ params }) => {
    const { id } = params;
    const fetchedComments = fetchFilteredItems("taskId", Number(id), comments);
    console.log("COMMENTS HANDLER HIT");

    return HttpResponse.json({
      data: fetchedComments,
      status: 200,
      message: "Comments fetched successfully",
      success: true,
      page: 1,
      limit: 10,
      totalPages: Math.ceil(fetchedComments.length / 10),
    });
  }),
  // fetch all users
  http.get("*/api/users", () => {
    return HttpResponse.json({
      data: users,
      status: 200,
      message: "Users fetched successfully",
      success: true,
      page: 1,
      limit: 10,
      totalPages: Math.ceil(users.length / 10),
    });
  }),
  // create new task
  http.post("*/api/tasks", async ({ request }) => {
    const body = await request.json();
    const task = addItem(body as ITask, tasks);

    return HttpResponse.json({
      data: task,
      status: 200,
      message: "Task created successfully",
      success: true,
    });
  }),
  // fetch all tasks
  http.get("*/api/tasks", () => {
    return HttpResponse.json({
      data: tasks,
      status: 200,
      message: "Tasks fetched successfully",
      success: true,
      page: 1,
      limit: 10,
      totalPages: Math.ceil(tasks.length / 10),
    });
  }),
  // archive task by id
  http.patch("*/api/tasks/:id/archive", ({ params }) => {
    const { id } = params;
    const task = archiveItem(Number(id), tasks);

    if (!task) {
      return HttpResponse.json({
        data: null,
        status: 404,
        message: "Task not found",
        success: false,
      });
    }

    return HttpResponse.json({
      data: task,
      status: 200,
      message: "Task archived successfully",
      success: true,
    });
  }),
  // fetch single task by id
  http.get("*/api/tasks/:id", ({ params }) => {
    const { id } = params;
    const task = fetchItems(Number(id), tasks);

    if (!task) {
      return HttpResponse.json({
        data: null,
        status: 404,
        message: "Task not found",
        success: false,
      });
    }

    return HttpResponse.json({
      data: task,
      status: 200,
      message: "Task fetched successfully",
      success: true,
    });
  }),
  // update task by id
  http.patch("*/api/tasks/:id", async ({ params, request }) => {
    const { id } = params;
    const body = (await request.json()) as ITask;
    const task = updateItem(Number(id), body, tasks);

    if (!task) {
      return HttpResponse.json({
        data: null,
        status: 404,
        message: "Task not found",
        success: false,
      });
    }

    return HttpResponse.json({
      data: task,
      status: 200,
      message: "Task updated successfully",
      success: true,
    });
  }),
];
