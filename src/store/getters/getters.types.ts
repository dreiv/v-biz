import { GetterTree, Store } from "vuex";
import { IArticle } from "@/entities";
import { IState, IRootState } from "../store.types";

export interface IGetters extends GetterTree<IState, IRootState> {
  getAllArticles(this: Store<IState>, state: IState): IArticle[];
  getOneArticlesById(
    this: Store<IState>,
    state: IState
  ): (id: number) => IArticle | undefined;
}

export interface IGettersMock {
  getAllArticles: jest.Mock<IArticle[]>;
  getOneArticlesById: jest.Mock<(id: number) => IArticle | undefined>;
}
