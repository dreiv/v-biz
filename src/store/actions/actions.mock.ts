import { ActionContext } from "vuex";
import { mockComments } from "@/entities";

import { ICreateCommentActionPayload, IActionsMock } from "./actions.types";
import { IState, IRootState } from "../store.types";
import { mockRootState, mockState } from "../store.mock";
import { mockGetters } from "../getters";

export const mockActionsContext = (): ActionContext<IState, IRootState> => ({
  commit: jest.fn(),
  dispatch: jest.fn(),
  state: mockState(),
  getters: mockGetters(),
  rootState: mockRootState(),
  rootGetters: {},
});

export const mockCreateCommentActionPayload = (
  articleId = 0,
  comment = mockComments()[0]
): ICreateCommentActionPayload => ({
  articleId,
  comment,
});

export const mockActions = (): IActionsMock => ({
  fetchArticles: jest.fn(),
  createComment: jest.fn(),
});
