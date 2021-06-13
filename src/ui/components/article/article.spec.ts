import { shallowMount, VueWrapper } from "@vue/test-utils";
import { mockArticles } from "@/entities";

import ArticleComponent from "./article.vue";
const article = mockArticles()[0];

describe(">>> Article Component", () => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(ArticleComponent, {
      props: { article },
    });
  });

  it("should render", () => {
    expect(wrapper).toBeDefined();
  });
});
