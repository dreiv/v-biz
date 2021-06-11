import { Store } from "vuex";

import { IArticleData } from "@/entities";
import { IProviderMock } from "@/services";

import { IActionsMock } from "./actions";
import { IMutationsMock } from "./mutations";
import { IGettersMock } from "./getters";
import { IStorageMock } from "./storage";

export interface IRootState {
  version: number;
}

export interface IState extends IRootState {
  articles: IArticleData[];
}

export type IStore = Store<IState>;

export interface IStoreMock extends IStore {
  $storage: IStorageMock;
  $services: IProviderMock;
  state: IState;
  actions: IActionsMock;
  mutations: IMutationsMock;
  getters: IGettersMock;
}
